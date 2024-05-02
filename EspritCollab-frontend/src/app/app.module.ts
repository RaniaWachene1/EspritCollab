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
import { ComplaintListComponent } from './backoffice/complaint-list/complaint-list.component';
import { ComplaintEditComponent } from './backoffice/complaint-edit/complaint-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ComplaintAddComponent } from './backoffice/complaint-add/complaint-add.component';
import { CompAddComponent } from './frontoffice/comp-add/comp-add.component';
import { CompEditComponent } from './frontoffice/comp-edit/comp-edit.component';
import { CompListComponent } from './frontoffice/comp-list/comp-list.component';
import { ModulesListComponent } from './backoffice/modules-list/modules-list.component';
import { ModulesDetailsComponent } from './backoffice/modules-details/modules-details.component';
import { ModuleListComponent } from './frontoffice/modules/module-list/module-list.component';
import { AddModuleDialogComponentComponent } from './frontoffice/modules/add-module-dialog-component/add-module-dialog-component.component';

import {provideAnimationsAsync} from'@angular/platform-browser/animations/async';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogComponent } from './frontoffice/modules/confirmation-dialog/confirmation-dialog.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { WelcomeComponent } from './frontoffice/welcome/welcome.component';
import { QuestionComponent } from './frontoffice/question/question.component';
import { ChangeBgDirective } from './frontoffice/change-bg.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxChartsModule } from '@swimlane/ngx-charts';



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
    ComplaintListComponent,
    ComplaintEditComponent,

     ComplaintAddComponent,
     CompAddComponent,
     CompEditComponent,
     CompListComponent,
     ModulesListComponent,
     ModulesDetailsComponent,
     ModuleListComponent,
     AddModuleDialogComponentComponent,
     ConfirmationDialogComponent,
     ChatbotComponent,
     StatisticsComponent,
     WelcomeComponent,
     QuestionComponent,
     ChangeBgDirective,



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
   MatSelectModule,
   MatInputModule,
   MatFormFieldModule,
   MatButtonModule,
   MatIconModule,
   NgxChartsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
