package tn.esprit.espritcollabbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.espritcollabbackend.entities.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint,Long> {
}
