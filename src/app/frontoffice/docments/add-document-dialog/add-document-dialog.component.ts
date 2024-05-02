import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Document } from '../../../Models/Document.model';
import { DocumentService } from '../../../Services/document.service';
import { FileUploadService } from '../../../Services/file-upload.service';

@Component({
  selector: 'app-add-document-dialog',
  templateUrl: './add-document-dialog.component.html',
  styleUrls: ['./add-document-dialog.component.css'],
})
export class AddDocumentDialogComponent {
  newDocument: Document = new Document();
  selectedFile: File | null = null;

  constructor(
    private dialogRef: MatDialogRef<AddDocumentDialogComponent>,
    private documentService: DocumentService,
    private fileUploadService: FileUploadService
  ) { }
  files: File[] = [];
  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.files = Array.from(input.files);
    }
  }
  onSubmit(): void {
    this.documentService.createDocument(this.newDocument).subscribe({
      next: (createdDocument: any) => {
        console.log('Document added successfully');
        const idDoc = createdDocument.idDoc;
        if (this.files && idDoc) {
          this.fileUploadService.uploadFiles(idDoc, this.files).subscribe({
            next: () => {
              console.log('File uploaded successfully');
              this.dialogRef.close('success');
            },
            error: (error: any) => {
              console.error('Error uploading file:', error);
            }
          });
        } else {
          this.dialogRef.close('success');
        }
      },
      error: (error: any) => {
        console.error('Error adding document:', error);
      }
    });
  }
}
