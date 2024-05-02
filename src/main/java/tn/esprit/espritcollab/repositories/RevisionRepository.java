package tn.esprit.espritcollab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.espritcollab.entities.Revision;

public interface RevisionRepository extends JpaRepository<Revision,Long> {
}
