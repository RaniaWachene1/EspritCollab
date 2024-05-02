import { Component } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';
import { Complaint } from '../../models/complaint.model';
import { Traitement } from '../../models/traitement.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complaint-add',
  templateUrl: './complaint-add.component.html',
  styleUrls: ['./complaint-add.component.css']
})
export class ComplaintAddComponent {

  newComplaint: Complaint = {
    idComplaint: 0,
    dateComplaint: new Date(),
    comment: '',
    traitement: null,
    createdDate: new Date()

  };

  traitementValues = Object.values(Traitement);

  constructor(private router: Router, private complaintService: ComplaintService) { }

  addComplaint(): void {
    this.complaintService.addComplaint(this.newComplaint).subscribe(
      (addedComplaint: Complaint) => {
        console.log('Complaint added successfully:', addedComplaint);
        // Naviguer vers la page /comp après l'ajout de la réclamation
        this.router.navigate(['/Comp']);
      },
      (error) => {
        console.error('Error adding complaint:', error);
      }
    );
  }
  
  }

