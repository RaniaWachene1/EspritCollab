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
  { path: 'deleteprofile', component: DeleteProfileComponent }

  

 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }