import { Component , OnInit} from '@angular/core';
import { RevisionService } from '../revision.service';
import { Revision } from '../../../models/revision.model'; 
import { PopupMService } from '../popupM/popup-m.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popup-m',
  templateUrl: './popup-m.component.html',
  styleUrls: ['./popup-m.component.css']
})

export class PopupMComponent implements OnInit  {
  newRevision: Revision = {} as Revision;
  selectedRevision: Revision | null = null;
  revisions: Revision[] = [];

  constructor(
    private popupMService: PopupMService,
    public dialogRef: MatDialogRef<PopupMComponent>,
    private revisionService: RevisionService
  ) {}

    ngOnInit(): void {
      this.loadRevisions(); // Chargement des révisions lors de l'initialisation du composant
    }
    openPopup(): void {
      this.popupMService.openPopupM();
    }
    
    updateRevision(revision: Revision): void {
      this.revisionService.updateRevision(revision.idRev, revision).subscribe((updatedRevision) => {
        const index = this.revisions.findIndex((r) => r.idRev === updatedRevision.idRev);
        if (index !== -1) {
          this.revisions[index] = updatedRevision;
          this.selectedRevision = null; // Cache le formulaire après la mise à jour
        }
      });
    } 
  
    selectRevision(revision: Revision): void {
      this.selectedRevision = revision;
    } 
  
    private loadRevisions(): void {
      // Chargez vos révisions depuis le service ici, par exemple :
      this.revisionService.getAllRevisions().subscribe((revisions) => {
        this.revisions = revisions;
      });
    }
  }