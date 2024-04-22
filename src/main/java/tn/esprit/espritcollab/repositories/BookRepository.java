package tn.esprit.espritcollab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.espritcollab.entities.Book;


public interface BookRepository extends JpaRepository<Book,Long> {
}

