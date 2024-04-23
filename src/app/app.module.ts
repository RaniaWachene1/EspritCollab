import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { EventDetailsComponent } from './backoffice/event-details/event-details.component';
import { BooksComponent } from './frontoffice/books/books.component';
import { BookDetailsComponent } from './frontoffice/book-details/book-details.component';
import { RevisionComponent } from './frontoffice/revision/revision.component';
import { ComplaintComponent } from './frontoffice/complaint/complaint.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { SideBarComponent } from './backoffice/side-bar/side-bar.component';
import { TopBarComponent } from './backoffice/top-bar/top-bar.component';
import { UserListComponent } from './backoffice/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule, DatePipe } from '@angular/common';
import { UserAddComponent } from './backoffice/user-add/user-add.component';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { UserDetailsComponent } from './backoffice/user-details/user-details.component';
import { UserEditComponent } from './backoffice/user-edit/user-edit.component';
import { SocialLoginModule, SocialAuthServiceConfig , GoogleLoginProvider, FacebookLoginProvider, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { ForgetPasswordComponent } from './frontoffice/forget-password/forget-password.component';
import { EditProfileComponent } from './frontoffice/edit-profile/edit-profile.component';
import { ProfileSideBarComponent } from './frontoffice/profile-side-bar/profile-side-bar.component';
import { DeleteProfileComponent } from './frontoffice/delete-profile/delete-profile.component';
import { EventEditComponent } from './backoffice/event-edit/event-edit.component';
import { EventListComponent } from './backoffice/event-list/event-list.component';
import { EventAddComponent } from './backoffice/event-add/event-add.component';
import { ProfileEventListComponent } from './frontoffice/profile-event-list/profile-event-list.component';
import { ProfileEventEditComponent } from './frontoffice/profile-event-edit/profile-event-edit.component';
import { EventinfoComponent } from './frontoffice/eventinfo/eventinfo.component';
import { ResetPasswordComponent } from './frontoffice/reset-password/reset-password.component';
import { StarRatingModule } from 'angular-star-rating';
import { IgcFormsModule } from 'igniteui-angular';
import { RecaptchaModule } from 'ng-recaptcha';
import { DeactivateComponent } from './backoffice/deactivate/deactivate.component';

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
    UserListComponent,
    UserAddComponent,
    UserDetailsComponent,
    UserEditComponent,
    ForgetPasswordComponent,
    EditProfileComponent,
    ProfileSideBarComponent,
    DeleteProfileComponent,
    EventEditComponent,
    EventListComponent,
    EventAddComponent,
    EventDetailsComponent,
    ProfileEventListComponent,
    ProfileEventEditComponent,
    EventinfoComponent,
    ResetPasswordComponent,
    DeactivateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    StarRatingModule.forRoot(),
    IgcFormsModule,
    RecaptchaModule,
  ],
  
  providers: [DatePipe,httpInterceptorProviders,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        useFederatedConsentForPopups: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '75100929630-s7tih0ketin8gkufse47s7q6ohj4aouq.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('391140843744729')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  
  
  
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
