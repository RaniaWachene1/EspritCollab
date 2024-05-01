import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './frontoffice/footer/footer.component';
import { HeaderComponent } from './frontoffice/header/header.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { RegisterComponent } from './frontoffice/register/register.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { ProfileComponent } from './frontoffice/profile/profile.component';
import { DocumentCategoriesComponent } from './frontoffice/document-categories/document-categories.component';
import { DocumentComponent } from './frontoffice/document/document.component';
import { EventsComponent } from './frontoffice/events/events.component';
import { BooksComponent } from './frontoffice/books/books.component';
import { BookDetailsComponent } from './frontoffice/book-details/book-details.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { ComplaintComponent } from './frontoffice/complaint/complaint.component';
import { RevisionComponent } from './frontoffice/revision/revision.component';
import { UserListComponent } from './backoffice/user-list/user-list.component';
import { UserAddComponent } from './backoffice/user-add/user-add.component';
import { UserDetailsComponent } from './backoffice/user-details/user-details.component';
import { UserEditComponent } from './backoffice/user-edit/user-edit.component';
import { EditProfileComponent } from './frontoffice/edit-profile/edit-profile.component';
import { DeleteProfileComponent } from './frontoffice/delete-profile/delete-profile.component';
import { EventListComponent } from './backoffice/event-list/event-list.component';
import { EventDetailsComponent } from './backoffice/event-details/event-details.component';
import { EventEditComponent } from './backoffice/event-edit/event-edit.component';
import { EventAddComponent } from './backoffice/event-add/event-add.component';
import { ProfileEventListComponent } from './frontoffice/profile-event-list/profile-event-list.component';
import { EventinfoComponent } from './frontoffice/eventinfo/eventinfo.component';
import { ForgetPasswordComponent } from './frontoffice/forget-password/forget-password.component';
import { ResetPasswordComponent } from './frontoffice/reset-password/reset-password.component';
import { DeactivateComponent } from './backoffice/deactivate/deactivate.component';
import { EventCalendarComponent } from './frontoffice/event-calendar/event-calendar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent,},
  { path: 'documentCategories', component: DocumentCategoriesComponent },
  { path: 'documents', component: DocumentComponent },
  { path: 'events', component: EventsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'bookDetails', component: BookDetailsComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'revision', component: RevisionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserListComponent },
  { path: 'addUser', component:UserAddComponent},
  { path: 'user-details/:userId', component:UserDetailsComponent},
  { path: 'editUser/:userId', component: UserEditComponent },
  { path: 'editprofile', component: EditProfileComponent },
  { path: 'deleteprofile', component: DeleteProfileComponent },
  { path: 'editUser/:userId', component: UserEditComponent },
  { path: 'login/oauth2/code/facebook', component: LoginComponent },
  { path: 'ForgetPassword', component:ForgetPasswordComponent},
  { path: 'resetPassword', component:ResetPasswordComponent},
  { path: 'desactivate', component:DeactivateComponent},

  
  /////
  { path: 'eventList', component: EventListComponent },
  { path: 'listevent', component: EventListComponent },
  { path: 'event-details/:eventId', component: EventDetailsComponent },
  { path: 'editEvent/:eventId', component: EventEditComponent },
  { path: 'addEvent', component:EventAddComponent},
  { path: 'EventListUser', component:ProfileEventListComponent},
  { path: 'eventinfo/:eventId', component: EventinfoComponent },
  
  { path: 'calendar', component: EventCalendarComponent },
  
 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }