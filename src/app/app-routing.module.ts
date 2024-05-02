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
import { PopupComponent } from './frontoffice/popup/popup.component';
import { GetAlllRevisionComponent } from './frontoffice/get-alll-revision/get-alll-revision.component';
import { PopupMComponent } from './frontoffice/popup-m/popup-m.component';
import { PomodoroTimerComponent } from './frontoffice/pomodoro-timer/pomodoro-timer.component';
import { TaskListComponent } from './frontoffice/task-list/task-list.component';
import { IndexComponent } from './frontoffice/index/index.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent,},
  { path: 'documentCategories', component: DocumentCategoriesComponent },
  { path: 'documents', component: DocumentComponent },
  { path: 'events', component: EventsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'bookDetails', component: BookDetailsComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'revisions', component: RevisionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'popupAjout', component: PopupComponent },
  { path: 'getAllRevision', component: GetAlllRevisionComponent },
  { path: 'ModifRev', component: PopupMComponent },
  { path: 'pomodoro', component: PomodoroTimerComponent },
  { path: 'taskList', component: TaskListComponent },
  { path: 'index', component: IndexComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }