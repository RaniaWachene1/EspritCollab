import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: SocialUser | undefined;
  loggedIn: boolean | undefined;
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
   
  });
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService,  private formBuilder: FormBuilder,
    private service:UserService, private socialAuthService: SocialAuthService,private router: Router,private toastr: ToastrService) {}

  onSubmit() {
  
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Login Response:', response);
        if (response && response.roles.includes('STUDENT')) { 
          console.log('Navigating to frontend...');
          
          this.router.navigate(['/home']);
          this.toastr.success('Login Successful');
        }
        else if (response.roles.includes('ADMIN')) {
          console.log('Navigating to dashboard...');
          this.router.navigate(['/dashboard']);
          this.toastr.success('Login Successful');
        }
      },
      (error: any) => {
        console.error('Login Error:', error);
        this.toastr.error('Incorrect username or password!');
      }
    );
    
     
          
          
    }
    signInWithGoogle(): void {
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
    
    
  applyValidationStyles() {
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach((form: any) => {
      form.addEventListener('submit', (event: Event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      });
    });
  }
  ngOnInit() {
    this.applyValidationStyles();
  //  this.socialAuthService.authState.subscribe((user) => {
    //  this.user = user;
      //this.loggedIn = (user != null);
    //});
  }
  
}
