package tn.esprit.espritcollab.restController;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.espritcollab.entities.Book;
import tn.esprit.espritcollab.services.IBook;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@AllArgsConstructor
public class BookRestController {
    private IBook iBook;
    @PostMapping("/addBook")
    public Book addBook(@RequestBody Book b){
        return iBook.addBook(b);
    }
    @GetMapping("/getBookById/{idb}")
    public Book retrieveBookbyId(@PathVariable Long idb){
        return iBook.retrieveBookbyId(idb);
    }
    @GetMapping("/getAllBK")
    public List<Book> retrieveAllB(){
        return iBook.retrieveAllBook();
    }
    @DeleteMapping("/deleteBK/{idb}")
    public void deleteById(@PathVariable Long idb){
        iBook.deleteBookById(idb);
    }
    @PutMapping("/updateBK/{idb}")

    public Book updateBK(@RequestBody  Book BK, @PathVariable  long idb){
        return iBook.updateBK(BK,idb);
    }
    @PutMapping("/updateBook/{bookId}")
    public Book updatePhoneNumber(@PathVariable Long bookId, @RequestBody String phoneNumber) {
        Book updatedBook = iBook.updatePhoneNumber(bookId, phoneNumber);
        return  updatedBook;
    }
}


