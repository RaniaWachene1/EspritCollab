import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './frontoffice/register/register.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { HeaderComponent } from './frontoffice/header/header.component';
import { FooterComponent } from './frontoffice/footer/footer.component';
import { ProfileComponent } from './frontoffice/profile/profile.component';
import { DocumentCategoriesComponent } from './frontoffice/document-categories/document-categories.component';
import { DocumentComponent } from './frontoffice/docments/document/document.component';
import { EventsComponent } from './frontoffice/events/events.component';
import { EventDetailsComponent } from './frontoffice/event-details/event-details.component';
import { BooksComponent } from './frontoffice/books/books.component';
import { BookDetailsComponent } from './frontoffice/book-details/book-details.component';
import { RevisionComponent } from './frontoffice/revision/revision.component';
import { ComplaintComponent } from './frontoffice/complaint/complaint.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { SideBarComponent } from './backoffice/side-bar/side-bar.component';
import { TopBarComponent } from './backoffice/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDocumentDialogComponent } from './frontoffice/docments/add-document-dialog/add-document-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { GetDocumentByIdDialogComponent } from './frontoffice/docments/get-document-by-id-dialog/get-document-by-id-dialog.component';
import { ConfirmDialogComponent } from './frontoffice/docments/confirm-dialog/confirm-dialog.component';
import { EditDocumentDialogComponent } from './frontoffice/docments/edit-document-dialog/edit-document-dialog.component';
import { FileUploadComponent } from './frontoffice/docments/file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    DocumentCategoriesComponent,
    DocumentComponent,
    EventsComponent,
    EventDetailsComponent,
    BooksComponent,
    BookDetailsComponent,
    RevisionComponent,
    ComplaintComponent,
    DashboardComponent,
    SideBarComponent,
    TopBarComponent,
    AddDocumentDialogComponent,
    GetDocumentByIdDialogComponent,
    ConfirmDialogComponent,
    EditDocumentDialogComponent,
    FileUploadComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //hedhi zedha
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
