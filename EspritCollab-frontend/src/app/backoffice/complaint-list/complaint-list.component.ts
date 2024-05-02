import { Component,OnInit } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';
import { Complaint } from '../../models/complaint.model';
import { Traitement } from '../../models/traitement.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit{
  complaints: Complaint[] = [];
  selectedComplaint: Complaint | null = null;


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
      },
      (error: any) => { // Spécifiez le type du paramètre 'error' comme 'any'
        console.error('Error fetching complaints:', error);
      }
    );
  }
  isComplaintTreated(complaint: Complaint): boolean {
    return complaint.traitement === Traitement.NONTRAITE;}
 
    updateComplaint(complaint: Complaint): void {
      if (!complaint || !complaint.idComplaint) {
        console.error('Invalid complaint or idComplaint is missing');
        return;
      }
      
      this.router.navigate(['/editcomplaint', complaint.idComplaint]);
    }
    createComplaint(): void {
      // Naviguer vers la page d'ajout de réclamation
      this.router.navigate(['/addComplaint']);
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

 // viewComplaintDetails(idComplaint: number): void {
   // this.router.navigate(['/complaintDetails', idComplaint]);
  //}

}
