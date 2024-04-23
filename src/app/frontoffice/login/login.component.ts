import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isCaptchaResolved: boolean = false;


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
    private service:UserService,
     private socialAuthService: SocialAuthService,
     private router: Router,
     private route: ActivatedRoute,
     private toastr: ToastrService) {}

     onSubmit() {
      if (this.isCaptchaResolved) {
        this.authService.login(this.username, this.password).subscribe(
          (response: any) => {
            console.log('Login Response:', response);
            if (response && response.roles.includes('STUDENT')) { 
              console.log('Navigating to frontend...');
              this.router.navigate(['/home']);
              this.toastr.success('Login Successful');
            } else if (response.roles.includes('ADMIN')) {
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
      } else {
        this.toastr.error('Please verify reCAPTCHA!');
      }
    }
  
    onCaptchaResolved(captchaResponse: string | null) {
      if (captchaResponse !== null) {
        console.log('reCAPTCHA resolved with response:', captchaResponse);
        this.isCaptchaResolved = true;
      }
    }
    signInWithGoogle(): void {
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        (userData: SocialUser) => {
          // Handle successful sign-in with Google
          console.log('Google user signed in: ', userData);
          
          const registerData = {
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            password: userData.email, // Use email as password
            username: userData.email, // Use email as username
          };
          
          // Register the user
          this.authService.register(registerData).subscribe(
            (registrationResponse: any) => {
              console.log('Registration Response:', registrationResponse);
              
              // After successful registration, proceed with login
              this.authService.login(userData.email, userData.email).subscribe( // Use email as both username and password
                (loginResponse: any) => {
                  console.log('Login Response:', loginResponse);
                  
                  // Navigate the user to the home page
                  this.router.navigate(['/home']);
                  this.toastr.success('Registration and Login Successful');
                },
                (loginError: any) => {
                  console.error('Login Error:', loginError);
                  this.toastr.error('Login Error');
                }
              );
            },
            (registrationError: any) => {
              console.error('Registration Error:', registrationError);
              this.toastr.error('Registration Error');
            }
          );
        },
        (error: any) => {
          // Handle sign-in error with Google
          console.error('Error signing in with Google: ', error);
          this.toastr.error('Error signing in with Google');
        }
      );
    }
    
    
    signInWithFB(): void {
      this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
        (userData: SocialUser) => {
          // Handle successful sign-in with Facebook
          console.log('Facebook user signed in: ', userData);
      
          const registerData = {
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            password: userData.email, // Use email as password
            username: userData.email, // Use email as username
          };
          
          // Register the user
          this.authService.register(registerData).subscribe(
            (registrationResponse: any) => {
              console.log('Registration Response:', registrationResponse);
              
              // After successful registration, proceed with login
              this.authService.login(userData.email, userData.email).subscribe( // Use email as both username and password
                (loginResponse: any) => {
                  console.log('Login Response:', loginResponse);
                  
                  // Navigate the user to the home page
                  this.router.navigate(['/home']);
                  this.toastr.success('Registration and Login Successful');
                },
                (loginError: any) => {
                  console.error('Login Error:', loginError);
                  this.toastr.error('Login Error');
                }
              );
            },
            (registrationError: any) => {
              console.error('Registration Error:', registrationError);
              this.toastr.error('Registration Error');
            }
          );
        },
        (error: any) => {
          // Handle sign-in error with Facebook
          console.error('Error signing in with Facebook: ', error);
          this.toastr.error('Error signing in with Facebook');
        }
      );
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
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.loggedIn = (user != null);
    });

    this.applyValidationStyles();

    this.route.queryParams.subscribe(params => {
      const code = params['code']; // Retrieve the authorization code from the URL
      if (code) {
        // Handle the authorization code (e.g., send it to the server for token exchange)
        console.log('Authorization code:', code);
        // Process the code here (e.g., send it to the server for further processing)
      }
    });
  }
  }
  



