import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) { }

  handleLogin(event: Event): void {
    event.preventDefault();

    // Get user input
    const emailInput = (event.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
    const passwordInput = (event.target as HTMLFormElement).elements.namedItem('password') as HTMLInputElement;
    const email = emailInput.value;
    const pwd = passwordInput.value;

    const user = {
      email: email,
      pwd: pwd
    };

    this.http.post<any>('http://localhost:8080/api/v1/users/login', user)
      .subscribe(
        (response) => {
          localStorage.setItem('connectedUser', JSON.stringify(response));
          this.router.navigate(['index']);  
        },
        (error) => {
          alert('Login and/or password is incorrect');
          console.error('Login error:', error);
        }
      );
  }
}
