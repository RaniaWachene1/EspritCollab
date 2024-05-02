import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { RevisionService } from '../revision.service';
  
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userList: User[] = [];  
  constructor(private revisionService: RevisionService) { }

  ngOnInit(): void {
    this.loadAndDisplayUsers();
  }

  loadAndDisplayUsers(): void {
    this.revisionService.loadAndDisplayUsers()
      .subscribe(
        (data: User[]) => {
          console.log(data);
          this.userList = data;
        },
        (error) => {
          console.error('Error loading users:', error);
         }
      );
  }

  handleLogout(): void {
    this.revisionService.handleLogout()
      .subscribe(
        () => {
          localStorage.removeItem('connectedUser');
          window.location.href = 'login.html';
        },
        (error) => {
          console.error('Error logging out:', error);
         }
      );
  }

  handleNewMeeting(): void {
    this.revisionService.handleNewMeeting();
  }

  handleJoinMeeting(roomId: string): void {
    this.revisionService.handleJoinMeeting(roomId);
  }
}
