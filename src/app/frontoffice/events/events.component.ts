import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: { idEvent: number; titleEvent: string;
    photoUrl: string; 
    nbMaxInscrits: number; 
    location:  string; 
    duree: string; 
    dateEvent: Date; 
    prerequis: string; 
    averageRating: number; 
    cout: number; 
    formateurs: string;
    category: string;
    modalitesParticipation: string;
    userList: { idUser: number }[]; // Include userList property

  
  }[] = [];
  searchQuery: string = '';
userData: any;
  modalService: any;
idEvent: any;
currentUser: { id: number } | null = null;   constructor(private eventService: EventService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,private authService: AuthService
  ) { }
  eventEdit: any = { idEvent: null }; // Initialize eventEdit with idEvent
  ngOnInit(): void {
    this.loadEvents();
    this.getCurrentUser();

  }
  getCurrentUser(): void {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        this.userData = JSON.parse(storedUserData);
        console.log('current user:', this.userData);
        
        if ('idUser' in this.userData) {
            const userId = this.userData.idUser; // Extracting idUser from userData
            console.log('User ID:', userId);
            // Assigning idUser to currentUser.id
            this.currentUser = { id: userId }; // assuming currentUser is of type User
        } else {
            console.log('No user ID found in userData');
        }
    } else {
        console.log('No user data found in localStorage');
    }
}

  
  
  
  
  
  
  
  
  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(
      (events: any[]) => {
        this.events = events.map(event => {
          return {
            idEvent: event.idEvent,
            titleEvent: event.titleEvent,
            photoUrl: event.photoUrl,
            nbMaxInscrits: event.nbMaxInscrits,
            location: event.location,
            duree: event.duree,
            dateEvent: event.dateEvent,
            prerequis: event.prerequis,
            averageRating: event.averageRating,
            cout: event.cout,
            formateurs: event.formateurs,
            category: event.category,
            modalitesParticipation: event.modalitesParticipation,
            userList: event.userList 
          };
        });
        console.log(this.events);
      },
      error => {
        console.error('Error fetching events:', error);
      }
    );
  } 
  viewEventDetails(eventId: number): void {
    this.router.navigate(['/eventinfo', eventId]);
  }
  



  eventForm: FormGroup = this.formBuilder.group({
    titleEvent: ['', [Validators.required]],
    dateEvent: ['', [Validators.required]],
    description: ['',[Validators.required]],
    nbMaxInscrits: ['', [Validators.required]],
    location: [''],
    duree: [''],
    formateurs: [''],
    modalitesParticipation: [''],
    cout: [''],
    category: [''],
  });
  selectedFile: File | null = null;
  titleEvent: string = '';
  description: string = '';
  nbMaxInscrits: number | null = null;
  dateEvent:  Date | null = null;
  location: string = '';
  duree: string = '';
  category: string = '';
  formateurs: string = '';
        modalitesParticipation: string = '';
        prerequis: string = '';
        cout: number | null = null;
        onSubmit(idUser: number): void {
          const formattedDateEvent = this.formatDateEvent();
          
          const eventData = {
            titleEvent: this.titleEvent,
            description: this.description,
            nbMaxInscrits: this.nbMaxInscrits,
            dateEvent: formattedDateEvent,
            location: this.location,
            duree: this.duree,
            category: this.category,
            image: this.selectedFile,
            formateurs: this.formateurs,
            modalitesParticipation: this.modalitesParticipation,
            prerequis: this.prerequis,
          };
        
          // Call the addEvent service function with the idUser parameter
          this.eventService.addEvent(eventData, idUser).subscribe(
            (addedEvent: any) => {
              console.log('Event added:', addedEvent);
              this.toastr.success('Event added successfully');
        
              // After adding the event, assign it to the user
              this.assignEventToUser(idUser, addedEvent.idEvent);
            },
            (error) => {
              console.error('Failed to add event:', error);
              this.toastr.error('Failed to add event. Please try again later.');
            }
          );
        }
        
        assignEventToUser(idUser: number, idEvent: number): void {
          this.eventService.assignUserToEvent(idUser, idEvent).subscribe(
            (response: any) => {
              console.log('User assigned to event:', response);
            },
            (error) => {
              console.error('Failed to assign user to event:', error);
            }
          );
        }
        
        
      
        
        
        
        onFileSelected(event: any): void {
          const file: File = event.target.files[0];
          this.selectedFile = file;
        }
      
        applyValidationStyles() {
          const eventForm = document.querySelectorAll('.needs-validation');
          Array.from(eventForm).forEach((form: any) => {
            form.addEventListener('submit', (event: Event) => {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            });
          });
        }
        formatDateEvent(): Date | null {
          if (this.dateEvent) {
              return new Date(this.dateEvent);
          } else {
              return null;
          }
      
        }
       
    
      deleteEvent(idEvent: any) {
          // Convert id to a valid number using parseInt
          const eventId = parseInt(idEvent, 10);
          console.log('Deleting event with ID:', eventId);
        
          if (!isNaN(eventId)) { // Check if eventId is a valid number
            if (confirm("Are you sure you want to delete this event?")) {
              this.eventService.deleteEvent(eventId).subscribe(
                () => {
                  console.log("Event deleted successfully");
                  this.toastr.success('Event deleted successfully', 'Success');
                  this.loadEvents(); // Met à jour la liste des événements après la suppression
                },
                error => {
                  console.error('Error deleting event:', error);
                  this.toastr.error('Failed to delete event', 'Error');
                }
              );
            }
          } else {
            console.error('Invalid event ID:', idEvent);
            this.toastr.error('Invalid event ID', 'Error');
          }
      }

      selectEventForEdit(event: any): void {
        this.eventEdit = { ...event };
      }
    
      updateEvent(): void {
        const eventData = {
          titleEvent: this.eventEdit.titleEvent,
          dateEvent: this.eventEdit.dateEvent,
          description: this.eventEdit.description,
          nbMaxInscrits: this.eventEdit.nbMaxInscrits,
          location: this.eventEdit.location,
          formateurs: this.eventEdit.formateurs
          // Add other event properties as needed
        };
    
        if (this.eventEdit.idEvent && this.eventEdit.idEvent !== 0) {
          this.eventService.updateEvent(this.eventEdit.idEvent, eventData).subscribe(
            (updatedEventData: any) => {
              console.log('Event updated successfully:', updatedEventData);
              this.toastr.success('Event updated successfully');
              this.loadEvents(); // Reload events after updating
            },
            (error) => {
              console.error('Error updating event:', error);
              this.toastr.error('Failed to update event. Please try again later.');
            }
          );
        } else {
          console.error('Invalid event ID:', this.eventEdit.idEvent);
          this.toastr.error('Invalid event ID', 'Error');
        }
      }
    }