import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupMComponent } from '../popup-m/popup-m.component';
@Injectable({
  providedIn: 'root'
})
export class PopupMService {

  constructor(private dialog: MatDialog) {}
  openPopupM() {
    this.dialog.open(PopupMComponent);
    width: '250px'
  }
}
