import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Document } from '../../../Models/Document.model';
import { DocumentService } from '../../../Services/document.service';

@Component({
  selector: 'app-add-document-dialog',
  templateUrl: './add-document-dialog.component.html',
  styleUrls: ['./add-document-dialog.component.css'],
})
export class AddDocumentDialogComponent {
  newDocument: Document = new Document();

  constructor(
    private dialogRef: MatDialogRef<AddDocumentDialogComponent>,
    private documentService: DocumentService
  ) { }

  onSubmit(): void {
    this.documentService.createDocument(this.newDocument).subscribe({
      next: () => {
        console.log('Document added successfully');
        this.dialogRef.close('success');
      },
      error: (error) => {
        console.error('Error adding document:', error);
      }
    });
  }
}
