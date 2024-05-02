  import { Component } from '@angular/core';
  import { PopupService } from './popup.service';
  import { MatDialogRef } from '@angular/material/dialog';
  import { Revision } from '../../../models/revision.model';
  import { RevisionService } from '../revision.service';
  import { ToastrService } from 'ngx-toastr';
  @Component({
    selector: 'app-root',
    template: `
      <button (click)="openPopup()">Open Popup</button>
    `,
      templateUrl: './popup.component.html',

  })
  export class PopupComponent {
    newRevision: Revision = {} as Revision;

    constructor(private popupService: PopupService,
      private toastr: ToastrService,

      public dialogRef: MatDialogRef<PopupComponent>,
      private revisionService: RevisionService) {}
    openPopup() {
      this.popupService.openPopupA();
    }
    addRevision(): void {
      this.revisionService.addRevision(this.newRevision).subscribe((newRevision) => {
        // Fermer le popup et renvoyer la nouvelle révision ajoutée au composant parent
        this.dialogRef.close(newRevision);
        this.toastr.success('Login Successful');

      });
    }

  }
