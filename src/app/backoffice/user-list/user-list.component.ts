import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: { id: number, name: string, email: string,username: string, level: string, major: string, pictureUrl: string ,instagramUsername:string}[] = [];
Math: any;


  constructor(private userService: UserService,private toastr: ToastrService,private router: Router,) {}
  displayedMembers: any[] = []; 
  pageSize: number = 5; 
  currentPage: number = 1; 
  totalPages: number = 3; 
  pages: number[] = [];
  ngOnInit(): void {
    this.fetchUsers(); 
   }
   fetchUsers(): void {
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users.map(user => {
          return {
            id: user.idUser,
            name: user.firstName + ' ' + user.lastName,
            email: user.email,
            username: user.username,
            level: user.level,
            major: user.major,
            instagramUsername: user.instagramUsername,
            classNumber: user.classNumber,
            pictureUrl: user.imageUser 
            
            
          };
        });
        console.log(this.users);
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  } 

  editStudent(idUser: number): void {
    if (idUser && !isNaN(idUser)) {
      const userData = {}; 
      this.userService.updateUser(idUser, userData).subscribe(
        (response) => {
          this.router.navigate(['/editUser', idUser]); 
          console.log('User updated successfully:', response);
        },
        (error) => {
          console.error('Error updating user details:', error);
        }
      );
    } else {
      console.error('Invalid user ID:', idUser);
    }
  }
  

  deleteUser(id: any) {
    const userId = parseInt(id, 10);
    console.log('Deleting user with ID:', userId);
  
    if (!isNaN(userId)) { 
      if (confirm("Are you sure you want to delete this user?")) {
        this.userService.deleteUser(userId).subscribe(
          () => {
            console.log("User deleted successfully");
            this.toastr.success('User deleted successfully', 'Success');
            this.fetchUsers(); 
          },
          error => {
            console.error('Error deleting user:', error);
            this.toastr.error('Failed to delete user', 'Error');
          }
        );
      }
    } else {
      console.error('Invalid user ID:', id);
      this.toastr.error('Invalid user ID', 'Error');
    }
  }
 
  viewStudentDetails(userId: number): void {
    this.userService.getUserById(userId).subscribe(
      (userData) => {
        console.log(userData);
        this.router.navigate(['/user-details', userId]);
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  deactivateUser(userId: number): void {
    const duration = prompt("Enter the duration for deactivation (e.g., 'PT30M' for 30 minutes):");
    if (duration) {
      this.userService.deactivateUser(userId, duration).subscribe({
        next: () => {
          this.toastr.success('User deactivated successfully');
          this.fetchUsers();
        },
        error: (error) => {
          console.error('Error deactivating user:', error);
          this.toastr.error('Failed to deactivate user');
        }
      });
    }
  }
  

  reactivateUser(userId: number): void {
    this.userService.reactivateUser(userId).subscribe({
      next: () => {
        this.toastr.success('User reactivated successfully');
        this.fetchUsers();
      },
      error: (error) => {
        console.error('Error reactivating user:', error);
        this.toastr.error('Failed to reactivate user');
      }
    });
  }

  
  calculatePagination(): void {
    this.totalPages = Math.ceil(this.users.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.updateDisplayedMembers();
  }

  updateDisplayedMembers(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedMembers = this.users.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedMembers();
    }
  }
}
