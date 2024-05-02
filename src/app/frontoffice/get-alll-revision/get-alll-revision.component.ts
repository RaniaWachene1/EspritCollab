import { Component, OnInit } from '@angular/core';
 import { Revision } from '../../../models/revision.model';
 import { RevisionService } from '../revision.service';
 import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-get-alll-revision',
  templateUrl: './get-alll-revision.component.html',
  styleUrl: './get-alll-revision.component.css'
})
export class GetAlllRevisionComponent implements OnInit  {
  revisions: Revision[] = [];
  newRevision: Revision = {} as Revision;
  selectedRevision: Revision | null = null;
  displayedRevisions: Revision[] = [];
  startIndex = 0;
  batchSize = 1; // Nombre de révisions à afficher à chaque fois
  showAllRevisions = false;
  pagedRevisions: Revision[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5; // Nombre d'éléments par page

  constructor(private revisionService: RevisionService, public dialog: MatDialog) {} // Injectez MatDialog

  ngOnInit(): void {
    this.loadRevisions();
  }
   
  loadRevisions(): void {
    this.revisionService.getAllRevisions().subscribe(revisions => {
      this.revisions = revisions;
      this.updatePage();
    });
  }

  updatePage(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.revisions.length);
    this.pagedRevisions = this.revisions.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePage();
    }
  }
  goToPage(page: number) {
    this.currentPage = page;
  }
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.revisions.length / this.itemsPerPage);
  }

  addRevision(): void {
    this.revisionService.addRevision(this.newRevision).subscribe((newRevision) => {
      this.revisions.push(newRevision);
      this.newRevision = {} as Revision; // Réinitialise le formulaire
    });
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
 
  deleteRevision(id: number): void {
    this.revisionService.deleteRevision(id).subscribe(() => {
      // Filtrer les révisions supprimées de pagedRevisions
      this.pagedRevisions = this.pagedRevisions.filter((r) => r.idRev !== id);
  
      // Mettre à jour également la liste complète des révisions si nécessaire
      this.revisions = this.revisions.filter((r) => r.idRev !== id);
    });
  }
   

  selectRevision(revision: Revision): void {
    this.selectedRevision = revision;
  }
}
