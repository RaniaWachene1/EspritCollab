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
import { ComplaintListComponent } from './backoffice/complaint-list/complaint-list.component';
import { ComplaintEditComponent } from './backoffice/complaint-edit/complaint-edit.component';
import { ComplaintAddComponent } from './backoffice/complaint-add/complaint-add.component';
import { CompAddComponent } from './frontoffice/comp-add/comp-add.component';
import { CompEditComponent } from './frontoffice/comp-edit/comp-edit.component';
import { CompListComponent } from './frontoffice/comp-list/comp-list.component';
import { ModulesListComponent } from './backoffice/modules-list/modules-list.component';
import { ModuleListComponent } from './frontoffice/modules/module-list/module-list.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { QuestionComponent } from './frontoffice/question/question.component';
import { WelcomeComponent } from './frontoffice/welcome/welcome.component';
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
  { path: 'revision', component: RevisionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Comp', component: ComplaintListComponent },
  { path: 'editcomplaint/:id', component: ComplaintEditComponent },
  { path: 'addComplaint', component: ComplaintAddComponent },
  { path: 'addc', component: CompAddComponent },
  { path: 'editc/:id', component: CompEditComponent },
  { path: 'listc', component: CompListComponent },
  { path: 'listm', component: ModulesListComponent },
  { path: 'detailsm/:id', component: ModulesListComponent },
{path: 'modules', component:ModuleListComponent},
{path: 'chatbot', component:ChatbotComponent},
{path: 'stat', component:StatisticsComponent},
{path: 'question', component:QuestionComponent},
{path: 'welcome', component:WelcomeComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }