import { Component ,OnInit} from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';
import { Complaint } from '../../models/complaint.model';
import { Traitement } from '../../models/traitement.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comp-add',
  templateUrl: './comp-add.component.html',
  styleUrls: ['./comp-add.component.css']
})
export class CompAddComponent implements OnInit {
  newComplaint: Complaint = {
    idComplaint: 0,
    dateComplaint: new Date(),
    comment: '',
    traitement: null,
    createdDate: new Date()
  };

  traitementValues = Object.values(Traitement);

  constructor(private router: Router, private complaintService: ComplaintService) { }
  ngOnInit(): void {
    // Update dateComplaint to use system date when component initializes
    this.newComplaint.dateComplaint = new Date();
  }

  addComplaint(): void {
    this.complaintService.addComplaint(this.newComplaint).subscribe(
      (addedComplaint: Complaint) => {
        console.log('Complaint added successfully:', addedComplaint);
        // Navigate to the '/listc' route after complaint added
        this.router.navigate(['/listc']);
      },
      (error) => {
        console.error('Error adding complaint:', error);
      }
    );
  }
  getCurrentDate(): string {
    return new Date().toISOString().substring(0, 10); // Format: YYYY-MM-DD
  }

}
