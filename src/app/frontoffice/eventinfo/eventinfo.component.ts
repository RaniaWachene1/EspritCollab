import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Rating } from './rating.model';
import { Reservation } from './reservation.model';

import { IgcRatingComponent, defineComponents } from 'igniteui-webcomponents';
defineComponents(IgcRatingComponent);


@Component({
  selector: 'app-eventinfo',
  templateUrl: './eventinfo.component.html',
  styleUrls: ['./eventinfo.component.css']
})
export class EventinfoComponent implements OnInit {
  reservation: Reservation = {};
  eventId: number | undefined;
  eventDetails: any;
  content: string = '';
  idUser: number | undefined;
  userData: any;
  ratingValue: number = 0;
  averageRating: number = 0;

  ratings: Rating[] = [];
  comments: { 
    idC: number,
    content: string, 
    user: { 
      idUser: number, 
      firstName: string,
      lastName: string,
      imageUser: string
    }
  }[] = [];
totalReviews: any;
Math: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private eventService: EventService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {  
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const eventIdParam = params.get('eventId');
      if (eventIdParam !== null) {
        this.eventId = +eventIdParam;
        this.loadEventDetails(this.eventId);
        this.getAllCommentsForEvent(this.eventId); 
        this.fetchComments(); 
        this.getAllRatingsForEvent(this.eventId); 
        this.fetchRatings();
        this.fetchAverageRatingForEvent(this.eventId);
      } else {
        console.error('Event ID parameter is null');
      } 
    });
    this.fetchUserData();
    this.fetchComments(); 
    this.fetchRatings();
    console.log('Event details:', this.eventDetails);


  }
  fetchAverageRatingForEvent(eventId: number): void {
    this.eventService.getAverageRatingForEvent(eventId).subscribe(
      (averageRating: number) => {
          this.averageRating = averageRating;
      },
      error => {
          console.error('Error fetching average rating:', error);
      }
  );
  }
  fetchUserData(): void {
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
      console.log('User data from localStorage:', this.userData);
      
      this.idUser = this.userData.idUser; // Assign user ID to class property
      
      if (this.idUser) {
        console.log('User ID:', this.idUser); // Display user ID in the console
      } else {
        console.error('Invalid user ID:', this.idUser);
      }
    }
    
    // Rest of your method...
  }
  
  fetchComments(): void {
    if (this.eventId !== undefined) {
      this.getAllCommentsForEvent(this.eventId);
    }
  }
  fetchRatings(): void {
    if (this.eventId !== undefined) {
      this.eventService.getAllRatingsForEvent(this.eventId).subscribe(
        (ratings: any[]) => {
          this.ratings = ratings;
          
        },
        error => {
          console.error('Error fetching ratings:', error);
        }
      );
    }
  }

  loadEventDetails(eventId: number): void {
    this.eventService.getEventById(eventId).subscribe(
      (eventDetails: any) => {
        this.eventDetails = eventDetails;
      },
      error => {
        console.error('Error fetching event details:', error);
      }
    );
  }

  addCommentToEvent(): void {
    console.log('Comment content:', this.content);
    // Trim the content and check if it's empty
    const trimmedContent = this.content.trim();
    if (!trimmedContent) {
        console.error('Comment content is empty');
        return;
    }

    if (this.eventId === undefined) {
        console.error('Event ID is undefined');
        return;
    }

    if (this.idUser === undefined) {
        console.error('User ID is undefined');
        return;
    }

    this.eventService.addCommentToEvent(this.eventId, this.idUser, trimmedContent).subscribe(
        (newComment) => {
            console.log('Comment added successfully:', newComment);
            // Add the new comment to the comments array
            this.comments = [...this.comments, newComment];
            // Clear the content textarea
            this.content = '';
        },
        error => {
            console.error('Error adding comment:', error);
        }
    );
}


  
  onRatingChange(rating: number) {
    console.log('Rating changed:', rating);
    if (this.eventId === undefined) {
        console.error('Event ID is not defined');
        return;
    }
    if (this.idUser === undefined) {
        console.error('User ID is undefined');
        return;
    }
    this.eventService.addRatingToEvent(this.eventId, this.idUser, rating).subscribe(
        response => {
            console.log('Rating submitted successfully');
            this.fetchRatings();
          },
        error => {
            console.error('Error submitting rating:', error);
        }
    );
}


  getAllCommentsForEvent(eventId: number): void {
    // Fetch comments for the event
    this.eventService.getAllCommentsForEvent(eventId).subscribe(
      (comments: any[]) => {
        // Map the received data to match the expected structure
        this.comments = comments.map(comment => ({
          idC: comment.idC,
          content: comment.content,
          user: {
            idUser: comment.user.idUser,
            firstName: comment.user.firstName,
            lastName: comment.user.lastName,
            imageUser: comment.user.imageUser
          }
        }));
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }
  getAllRatingsForEvent(eventId: number): void {
    this.eventService.getAllRatingsForEvent(eventId).subscribe(
      (ratings: Rating[]) => {
        this.ratings = ratings;
        this.fetchRatings();

      },
      error => {
        console.error('Error fetching ratings:', error);
      }
    );
  }
  addReservation(idUser: number, eventId: number) {
    if (idUser && eventId) {
      this.eventService.addReservation(idUser, eventId, this.reservation).subscribe(
        (response) => {
          this.toastr.success('Reservation added successfully');

          console.log('Reservation added successfully:', response);
        },
        (error) => {
          this.toastr.error('Failed to add reservation');

          console.error('Failed to add reservation:', error);
        }
      );
    } else {
      console.error('userId or eventId is undefined');
    }
  }
  
  
  
  
}
