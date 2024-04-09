import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  email: string = '';

  constructor(private authService: AuthService, private toastr: ToastrService) {}

  onSubmit() {
    //this.authService.forgotPassword(this.email).subscribe(
     // () => {
     //   this.toastr.success('Password reset instructions sent to your email.');
     // },
     // (error) => {
      //  this.toastr.error('Failed to send password reset instructions. Please try again later.');
      //  console.error('Forgot Password Error:', error);
      }
   
  
}
