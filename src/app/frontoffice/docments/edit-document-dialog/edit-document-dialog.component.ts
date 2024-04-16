import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Document } from '../../../Models/Document.model';
import { DocumentService } from '../../../Services/document.service';

@Component({
  selector: 'app-edit-document-dialog',
  templateUrl: './edit-document-dialog.component.html',
  styleUrls: ['./edit-document-dialog.component.css']
})
export class EditDocumentDialogComponent {
//  @Output() documentUpdated: EventEmitter<void> = new EventEmitter<void>(); // Événement pour signaler la mise à jour du document

  editedDocument: Document; 

  constructor(
    private dialogRef: MatDialogRef<EditDocumentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Document, 
    private documentService: DocumentService
  ) {
    this.editedDocument = { ...data };
  }

  onSubmit(): void {
    this.documentService.updateDocument(this.editedDocument).subscribe({
      next: () => {
        console.log('Document updated successfully');
        this.dialogRef.close('success');
   //     this.documentUpdated.emit(); // Émettre l'événement de mise à jour du document

      },
      error: (error) => {
        console.error('Error updating document:', error);
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close(); 
  }
}
