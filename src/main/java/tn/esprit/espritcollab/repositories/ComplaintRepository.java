package tn.esprit.espritcollab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.espritcollab.entities.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint,Long> {
}
