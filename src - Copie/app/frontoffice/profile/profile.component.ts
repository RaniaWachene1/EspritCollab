import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
<<<<<<< HEAD
import { User } from '../../models/user.model';
=======
>>>>>>> 2ccfd77c9737d402b11bf7ba59ba4ed96d848c8f

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
<<<<<<< HEAD
  user!: User;  // The user property is declared as non-nullable but no initial value is provided
  badges = [
    { name: 'Nerd', imageUrl: 'http://localhost:8087/uploads/Nerd.png', threshold: 96 },
    { name: 'Performer', imageUrl: 'http://localhost:8087/uploads/Preformer.png', threshold: 48 },
    { name: 'Acrobat', imageUrl: 'http://localhost:8087/uploads/Acrobat.png', threshold: 24 },
    { name: 'Ice Breaker', imageUrl: 'http://localhost:8087/uploads/icebreaker.png', threshold: 12 },
    { name: 'Amateur', imageUrl: 'http://localhost:8087/uploads/Amateur.png', threshold: 4 },
    { name: 'Newbie', imageUrl: 'http://localhost:8087/uploads/Newbie.png', threshold: 1 },
  
];
=======
  userData: any;

>>>>>>> 2ccfd77c9737d402b11bf7ba59ba4ed96d848c8f
  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchUserData();
  }
  
  fetchUserData(): void {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
<<<<<<< HEAD
      this.user = JSON.parse(storedUserData);
      console.log('User data from localStorage:', this.user);
      if (!this.user.badge) { 
        this.fetchUserData(); 
    }
    }

    const userId = this.authService.userId; // Make sure this value is being correctly set
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (response) => {
          this.user = response;
          localStorage.setItem('userData', JSON.stringify(response));
          console.log('User data from API:', this.user);
=======
      this.userData = JSON.parse(storedUserData);
      console.log('User data from localStorage:', this.userData);
    }
        const userId = this.authService.userId;
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (response) => {
          this.userData = response;
          localStorage.setItem('userData', JSON.stringify(response));
          console.log('User data from API:', this.userData);
>>>>>>> 2ccfd77c9737d402b11bf7ba59ba4ed96d848c8f
        },
        (error) => {
          console.error('Error fetching user profile:', error);
        }
      );
    } 
  }
}
