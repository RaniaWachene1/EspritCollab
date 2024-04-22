import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatService, Message } from '../chat.service';
import { BookService } from '../books.service';  // Assurez-vous d'importer BookService

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css']
})
export class ExchangeFormComponent implements OnInit {
  phoneNumber: string = '';
  bookId: number | null = null;
  showChat: boolean = false;
  newMessage: string = '';
  messages: Observable<Message[]>;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private bookService: BookService  // Injectez BookService ici
  ) {
    this.messages = this.chatService.messages$;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = +params['id'];
      console.log(this.bookId)
      console.log(this.phoneNumber)
    });
  }

  onSubmit(): void {
    if (this.bookId && this.phoneNumber) {
      this.bookService.updatePhoneNumber(this.bookId, this.phoneNumber).subscribe({
        next: (response) => {
          console.log('Phone number updated successfully', response);
          // Afficher un message de réussite ou rediriger l'utilisateur
        },
        error: (error) => {
          console.error('Failed to update phone number', error);
          // Afficher un message d'erreur
        }
      });
    }
  }

  toggleChat(): void {
    this.showChat = !this.showChat;
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage('Username', this.newMessage);
      this.newMessage = '';
    }
  }
}
