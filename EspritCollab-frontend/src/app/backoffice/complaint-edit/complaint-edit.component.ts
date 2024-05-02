import { Component,OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Complaint } from '../../models/complaint.model';
import { ComplaintService } from '../../services/complaint.service';
import { Traitement } from '../../models/traitement.model';


@Component({
  selector: 'app-complaint-edit',
  templateUrl: './complaint-edit.component.html',
  styleUrls: ['./complaint-edit.component.css']
})
export class ComplaintEditComponent implements OnInit {
  selectedComplaint: Complaint | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private complaintService: ComplaintService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convertir l'ID en nombre
      if (id) {
        this.complaintService.getComplaintById(id).subscribe(
          (complaint: Complaint) => {
            this.selectedComplaint = complaint;
          },
          (error) => {
            console.error('Error fetching complaint details:', error);
          }
        );
      }
    });
  }

  updateComplaint(complaint: Complaint): void {
    if (!complaint) {
      return;
    }

    this.complaintService.updateComplaint(complaint.idComplaint, complaint).subscribe(
      (updatedComplaint: Complaint) => {
        console.log('Complaint updated successfully:', updatedComplaint);
        this.navigateToListPage(); // Rediriger vers la liste des réclamations après la mise à jour
      },
      (error) => {
        console.error('Error updating complaint:', error);
        // Gérer les erreurs de mise à jour
      }
    );
  }

  navigateToListPage(): void {
    // Utiliser le router pour naviguer vers la page list
    this.router.navigate(['/Comp']); // Remplacer '/Comp' par le chemin de votre page list
  }
}
