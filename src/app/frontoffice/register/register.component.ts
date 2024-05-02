import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http: HttpClient, private router: Router) { }

  handleRegistration(event: Event): void {
    event.preventDefault();

    // Get user input
    const usernameInput = (event.target as HTMLFormElement).elements.namedItem('username') as HTMLInputElement;
    const emailInput = (event.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
    const passwordInput = (event.target as HTMLFormElement).elements.namedItem('password') as HTMLInputElement;

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const status = "online"; // Assuming the status is online upon registration

    // Create an object with user information
    const user = {
      username: username,
      email: email,
      password: password,
      status: status,
    };

    this.http.post<any>('http://localhost:8080/api/v1/users', user)
      .subscribe(
        () => {
          localStorage.setItem("connectedUser", JSON.stringify(user));
          this.router.navigate(['index']); // Navigate to the index page
        },
        (error) => {
          console.error('POST request error:', error);
        }
      );
  }
}
