package tn.esprit.espritcollab.services;

import tn.esprit.espritcollab.entities.Book;

import java.util.List;

public interface IBook
{
    public Book addBook(Book b);
    public Book retrieveBookbyId (Long idb);
    public List<Book> retrieveAllBook();
    public void deleteBookById (Long idb) ;
    public Book updateBK (Book BK, long idb) ;
     public Book updatePhoneNumber(Long bookId, String phoneNumber);
    public Book likeBook(Long id);
    public Book  dislikeBook(Long id);

}

