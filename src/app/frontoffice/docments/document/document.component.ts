import { Component, OnInit } from '@angular/core';
import { Document } from '../../../models/Document.model';
import { DocumentService } from '../../../services/document.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentDialogComponent } from '../add-document-dialog/add-document-dialog.component';
import { GetDocumentByIdDialogComponent } from '../get-document-by-id-dialog/get-document-by-id-dialog.component'
import { PaymentService } from '../../../services/payment.service'; 
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { map } from 'rxjs';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  documents: Document[] = []; 
  displayedDocuments: Document[] = []; 
  currentPage = 1;
  itemsPerPage = 9; 
  totalPages = 1;
  pages: number[] = [];
  modules: string[] = [];

  constructor(
    private documentService: DocumentService,
    private paymentService: PaymentService, 
    private cartService: CartService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.fetchDocuments();
    this.fetchModules();
  }

  fetchDocuments(): void {
    this.documentService.getAllDocument().subscribe((data) => {
      this.documents = data;
      this.totalPages = Math.ceil(this.documents.length / this.itemsPerPage);
      this.updatePages();
      this.updateDisplayedDocuments();
    });
  }

  fetchModules(): void {
    this.documentService.getAllModules().subscribe((modules) => {
      this.modules = modules;
    });
  }

  updatePages(): void {
    this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  goToPage(page: number, event: Event): void {
    event.preventDefault(); 
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedDocuments();
    }
  }  

  updateDisplayedDocuments(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.documents.length);
    this.displayedDocuments = this.documents.slice(startIndex, endIndex);
  }

  filterByModule(module: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.displayedDocuments = this.documents.filter(doc => doc.module === module);
    } else {
      this.updateDisplayedDocuments();
    }
  }

  filterByPrice(priceLevel: string, event: Event): void {
    if (priceLevel === 'Free') {
      this.displayedDocuments = this.documents.filter(doc => doc.price === 0);
    } else if (priceLevel === 'Paid') {
      this.displayedDocuments = this.documents.filter(doc => doc.price > 0);
    } else {
      this.updateDisplayedDocuments();
    }
  }

  openAddDocumentDialog(): void {
    const dialogRef = this.dialog.open(AddDocumentDialogComponent, {
      width: '400px', 
      data: {} 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.fetchDocuments();
      }
    });
  }

  applyFilters(): void {
    const selectedModules = this.modules.filter(module => {
      return (document.getElementById(`module${module}`) as HTMLInputElement).checked;
    });
    
    const priceFilter = document.querySelector('input[name="priceFilter"]:checked')?.getAttribute('value');
    
    this.displayedDocuments = this.documents.filter(document => {
      const modulePass = selectedModules.length === 0 || selectedModules.includes(document.module);
      
      if (priceFilter === 'free') {
        return document.price === 0 && modulePass;
      } else if (priceFilter === 'paid') {
        return document.price !== 0 && modulePass;
      } else {
        return modulePass;
      }
    });
  }
  

    openGetDocumentByIdDialog(idDoc: number): void {
      const dialogRef = this.dialog.open(GetDocumentByIdDialogComponent, {
        width: '500px' ,
        data: idDoc
      });

      dialogRef.afterClosed().subscribe(result => {
          this.fetchDocuments();
        
      });
    }




  addToCart(document: Document): void {
    this.cartService.addItem(document);
    // Optionnel: Afficher un message ou une notification
    alert('Added to cart!');
}
buy(doc: Document) {
  this.paymentService.proc22(doc).subscribe({
    next: (response) => {
      console.log("Received URL:", response);
      window.location.href = response; // Redirect to the Stripe payment page
    },
    error: (error) => {
      console.error("Error:", error);
    }
  });
}



openCartDialog(): void {
  const dialogRef = this.dialog.open(CartDialogComponent, {
    width: '400px',
    data: { items: this.cartService.getItems() }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'proceed_to_checkout') {
      this.processPayment();
    }
  });
}

processPayment(): void {
  const items = this.cartService.getItems();
  items.forEach(item => {
    this.paymentService.processPayment(item.idDoc).subscribe({
      next: (data: any) => {
        window.location.href = data.paymentLink; // Assurez-vous que cette URL est correctement retournée par votre backend
      },
      error: (error: any) => {
        console.error('Error processing payment:', error);
      }
    });
  });
}






}

