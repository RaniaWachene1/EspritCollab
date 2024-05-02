package tn.esprit.espritcollab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.espritcollab.entities.Document;

public interface DocumentRepository extends JpaRepository<Document,Long> {
}
