package tn.esprit.espritcollab.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.espritcollab.entities.Book;
import tn.esprit.espritcollab.repositories.BookRepository;

import java.util.List;
@Service
@AllArgsConstructor
public class BookServiceIMP implements IBook {
    private BookRepository bookRepository;
    @Override
    public Book addBook(Book b) {
        return bookRepository.save(b) ;
    }

    @Override
    public Book retrieveBookbyId(Long idb) {
        return bookRepository.findById(idb).orElse(null);
    }

    @Override
    public List<Book> retrieveAllBook() {
        return bookRepository.findAll();
    }

    @Override
    public void deleteBookById(Long idb) {
        bookRepository.deleteById(idb);

    }
    @Override
    public Book updateBK(Book BK, long idb) {
         Book b = bookRepository.findById(idb).get();
        if (BK.getTitleBook()!=null){
            b.setTitleBook(BK.getTitleBook());
        }
        if (BK.getDescription()!=null){
            b.setDescription(BK.getDescription());
        }
        if (BK.getLanguage()!=null){
            b.setLanguage(BK.getLanguage());
        }

        if (BK.getCoverPicture()!=null){
            b.setCoverPicture(BK.getCoverPicture());}

        if (BK.getIsAvailable() != null) {
            b.setIsAvailable(BK.getIsAvailable());
        }


        return bookRepository.save(b);
    };
    public Book updatePhoneNumber(Long bookId, String phoneNumber) {
        Book book = bookRepository.findById(bookId).orElseThrow(() -> new RuntimeException("Book not found"));
        book.setPhoneNumber(phoneNumber);
        return bookRepository.save(book);
    }

    public Book likeBook(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found with id " + id));
        book.setLikes(book.getLikes() + 1);
        return bookRepository.save(book);
    }

    public Book dislikeBook(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found with id " + id));
        book.setDislikes(book.getDislikes() + 1);
        return bookRepository.save(book);
    }



}

