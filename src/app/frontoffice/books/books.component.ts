import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/books.model'; // Mettez à jour le chemin si nécessaire
import { BookService } from '../../books.service'; // Mettez à jour le chemin si nécessaire
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IsAvailable } from '../../../models/IsAvailable.model';
@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = {
    idBook: 0, // Initialiser avec un id par défaut ou laisser vide si géré côté serveur
    titleBook: '',
    description: '',
    language: '',
    coverPicture: '',
    isAvailable: IsAvailable.AVAILABLE, // Initialisé sur 'Indisponible'
    phoneNumber: ''
  };

  selectedBooks: Book | null = null;
  fileToUpload: File | null = null;

  constructor(private bookService: BookService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getAllBK().subscribe(books => {
      this.books = books;
    });
  }

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe({
      next: (book) => {
        this.books.push(book); // Ajoutez le livre retourné par le serveur si différent de newBook
        this.resetNewBook(); // Réinitialise le formulaire avec les valeurs par défaut
        this.toastr.success('Ajout Avec Succés!', 'Ajout Avec Succés!');
        this.router.navigate(['/getallbooks']); // Redirection vers '/getallbooks'
      },
      error: (error) => {
        console.error('An error occurred while adding the book', error);
        this.toastr.error('Erreur lors de l\'ajout du livre', 'Une erreur est survenue!');
      }
    });
    this.toastr.success('Ajout Avec Succés!', 'Ajout Avec Succés!');
  }

  resetNewBook(): void {
    this.newBook = {
      idBook: 0,
      titleBook: '',
      description: '',
      language: '',
      coverPicture: '',
      isAvailable: IsAvailable.NOTAVAILABLE ,// Gardez le statut initial sur 'Indisponible'
      phoneNumber: ''

    };
  }

  updateBooks(book: Book): void {
    // Appeler la méthode updateBook() avec la disponibilité mise à jour
    this.bookService.updateBook(book.idBook, book).subscribe(updatedBook => {
      const index = this.books.findIndex(b => b.idBook === updatedBook.idBook);
      if (index !== -1) {
        this.books[index] = updatedBook;
        this.toastr.success('Mise à jour avec succès!', 'Le livre a été mis à jour!');
      }
    }, error => {
      console.error('Failed to update book:', error);
      this.toastr.error('Erreur lors de la mise à jour du livre', 'Une erreur est survenue!');
    });
  }

  selectBooks(book: Book): void {
    this.selectedBooks = book;
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.books = this.books.filter(book => book.idBook !== id);
        this.toastr.success('Suppression réussie!', 'Le livre a été supprimé!');
      },
      error: (error) => {
        console.error('Error deleting book:', error);
        this.toastr.error('Erreur lors de la suppression du livre', 'Une erreur est survenue!');
      }
    });
  }

  onFileSelect(event: any): void {
    this.fileToUpload = event.target.files.item(0);
  }
}
