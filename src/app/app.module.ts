import { NgModule } from '@angular/core';
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
import { DocumentComponent } from './frontoffice/document/document.component';
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
import { FormsModule } from '@angular/forms';
import { GetAllBooksComponent } from './frontoffice/get-all-books/get-all-books.component'; // Importez FormsModule depuis @angular/forms

import { Router } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UpdateBookDialogComponent } from './update-book-dialog/update-book-dialog.component';
import { QRCodeModule } from 'angularx-qrcode';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select'; // Importation nécessaire pour 'mat-select' et 'mat-option'
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { ExchangeFormComponent } from './exchange-form/exchange-form.component';
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
    GetAllBooksComponent,
    UpdateBookDialogComponent,
    ExchangeFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    QRCodeModule,  
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    MatSelectModule,
    ReactiveFormsModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
