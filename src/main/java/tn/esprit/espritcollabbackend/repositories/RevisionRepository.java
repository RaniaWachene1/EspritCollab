package tn.esprit.espritcollabbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.espritcollabbackend.entities.Revision;

public interface RevisionRepository extends JpaRepository<Revision,Long> {
}
