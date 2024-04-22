import { Component, OnInit } from '@angular/core';
import { BookService } from '../../books.service';
import { Book } from '../../../models/books.model';
import { UpdateBookDialogComponent } from '../../update-book-dialog/update-book-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrl: './get-all-books.component.css'
})
export class GetAllBooksComponent implements OnInit {
  books: Book[] = [];

  selectedBooks: Book | null = null;
  fileToUpload: File | null = null;
  qrCodeData: { [key: number]: string } = {}; // Un dictionnaire pour stocker les données QR par ID de livre
  filteredBooks: Book[] = [];
  searchText: string = '';


  constructor(private bookService: BookService  , public dialog: MatDialog) { }


  ngOnInit(): void {
    this.getAllBooks();
    this.filterBooks();
       
   
    
  }

  
  getAllBooks(): void {
    this.bookService.getAllBK().subscribe(books => {
        console.log("Books received: ", books); // Pour voir les données reçues
        this.books = books;
        this.filteredBooks = [...this.books]; // Faites une copie des livres pour initialiser filteredBooks
        books.forEach(book => {
             this.qrCodeData[book.idBook] = this.bookService.getQrCodeData(book.idBook);
        });
    }, error => {
        console.error("Failed to fetch books: ", error); // Afficher les erreurs si la requête échoue
    });
}

  
  
  openDialog(book: Book): void {
    const dialogRef = this.dialog.open(UpdateBookDialogComponent, {
      width: '300px',
      data: { book: {...book} }  // Clone the book object to avoid direct modification
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateBooks(result);
      }
    });
  }

  updateBooks(book: Book): void {
    this.bookService.updateBook(book.idBook, book).subscribe(
      updatedBook => {
        const index = this.books.findIndex(b => b.idBook === updatedBook.idBook);
        if (index !== -1) {
          this.books[index] = updatedBook;  // Update the local array to reflect the changes
          this.filterBooks(); // Reapply filters to update the filteredBooks array
        }
      },
      error => {
        console.error('Failed to update book:', error);
      }
    );
  }
  

  selectBooks(books: Book): void {
    this.selectedBooks = books;
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.books = this.books.filter(book => book.idBook !== id);
        console.log('Book deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting book:', error);
      }
    });
  }
  filterBooks(): void {
    if (!this.searchText) {
      this.filteredBooks = [...this.books];  // Utilisez spread pour forcer la mise à jour du binding
    } else {
      this.filteredBooks = this.books.filter(book =>
        book.titleBook.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  
  

}

  


