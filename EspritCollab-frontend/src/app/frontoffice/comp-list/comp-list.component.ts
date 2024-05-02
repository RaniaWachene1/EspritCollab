import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';
import { Complaint } from '../../models/complaint.model';
import { Traitement } from '../../models/traitement.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.css']
})
export class CompListComponent implements OnInit {
  complaints: Complaint[] = [];
  selectedComplaint: Complaint | null = null;
  p:number=1;
itemsPerPage:number=8;
totalcomplaint:any ;


  constructor(
    private complaintService: ComplaintService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchComplaints();

    
  }
   
  fetchComplaints(): void {
    this.complaintService.getAllComplaint().subscribe(
      (complaints: Complaint[]) => {
        this.complaints = complaints;
       // this.complaints = complaints.map(c => ({
          //...c,
          //isChecked: c.traitement === Traitement.TRAITE
          
        //}));
       
        this.complaints.forEach((c) => {
          const storedValue = localStorage.getItem(`complaint_${c.idComplaint}_isChecked`);
          c.isChecked = storedValue ? JSON.parse(storedValue) : (c.traitement === Traitement.TRAITE);
        });
      },
      (error: any) => { // Spécifiez le type du paramètre 'error' comme 'any'
        console.error('Error fetching complaints:', error);
      }
    );

  }
  
  
  isComplaintTreated(complaint: Complaint): boolean {
    return complaint.traitement === Traitement.TRAITE;}
 
    updateComplaint(complaint: Complaint): void {
      if (!complaint || !complaint.idComplaint) {
        console.error('Invalid complaint or idComplaint is missing');
        return;
      }
      
      this.router.navigate(['/editc', complaint.idComplaint]);
    }
    createComplaint(): void {
      // Naviguer vers la page d'ajout de réclamation
      this.router.navigate(['/addc']);
    }
    
    toggleTreatment(complaint: Complaint): void {
      const newTraitement = complaint.isChecked ? Traitement.TRAITE : Traitement.NONTRAITE;
      console.log('New Traitement:', newTraitement);


    this.complaintService.updateComplaint(complaint.idComplaint, { ...complaint, traitement: newTraitement }).subscribe(
      () => {
        this.toastr.success('Traitement de la plainte mis à jour avec succès!', 'Succès');
        complaint.traitement = newTraitement;

        // Update isChecked property
        complaint.isChecked = complaint.traitement === Traitement.TRAITE;

        // Save isChecked state in localStorage
        localStorage.setItem(`complaint_${complaint.idComplaint}_isChecked`, complaint.isChecked.toString());
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du traitement de la plainte:', error);
        this.toastr.error('Erreur lors de la mise à jour du traitement de la plainte', 'Erreur');
      }
    );
    }
  
    
    

  deleteComplaint(idComplaint: number): void {
    this.complaintService.deleteComplaint(idComplaint).subscribe(
      () => {
        this.toastr.success('Complaint deleted successfully!', 'Success');
        this.complaints = this.complaints.filter(c => c.idComplaint !== idComplaint);
      },
      (error) => {
        console.error('Error deleting complaint:', error);
        this.toastr.error('Error deleting complaint', 'Error');
      }
    );
  }
  
 
  viewComplaintDetails(idComplaint: number): void {
    this.router.navigate(['/detailsc', idComplaint]);
  }
  navigateToChatbot(): void {
    // Rediriger vers la page du chatbot (remplacez 'chatbot' par le chemin de votre page de chatbot)
    this.router.navigate(['/chatbot']);
  }
}
