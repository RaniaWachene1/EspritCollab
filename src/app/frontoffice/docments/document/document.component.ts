import { Component, OnInit } from '@angular/core';
import { Document } from '../../../Models/Document.model';
import { DocumentService } from '../../../Services/document.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentDialogComponent } from '../add-document-dialog/add-document-dialog.component';
import { GetDocumentByIdDialogComponent } from '../get-document-by-id-dialog/get-document-by-id-dialog.component'

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  documents: Document[] = []; 
  displayedDocuments: Document[] = []; 
  currentPage = 1;
  itemsPerPage = 9; 
  totalPages = 1;
  pages: number[] = [];

  constructor(
    private documentService: DocumentService,
    public dialog: MatDialog
    ) { }

    ngOnInit(): void {
      this.fetchDocuments();  
    }
  
    fetchDocuments(): void {
      this.documentService.getAllDocument().subscribe((data) => {
        this.documents = data;
        this.totalPages = Math.ceil(this.documents.length / this.itemsPerPage);
        this.updatePages();
        this.updateDisplayedDocuments();
      });
    }
  
  updatePages(): void {
    this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  goToPage(page: number, event: Event): void {
    event.preventDefault(); 
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedDocuments();
    }
  }  

  updateDisplayedDocuments(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.documents.length);
    this.displayedDocuments = this.documents.slice(startIndex, endIndex);
  }
  // Method to open the dialog
  openAddDocumentDialog(): void {
    const dialogRef = this.dialog.open(AddDocumentDialogComponent, {
      width: '400px', 
      data: {} 
    });
    

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.fetchDocuments();
      }
    });
  }

    openGetDocumentByIdDialog(idDoc: number): void {
      const dialogRef = this.dialog.open(GetDocumentByIdDialogComponent, {
        width: '400px' ,
        data: idDoc
      });

      dialogRef.afterClosed().subscribe(result => {
          this.fetchDocuments();
        
      });
    }

}

