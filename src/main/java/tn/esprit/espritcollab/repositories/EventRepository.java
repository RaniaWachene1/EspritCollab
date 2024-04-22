package tn.esprit.espritcollab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.espritcollab.entities.Event;

public interface EventRepository extends JpaRepository<Event,Long> {
}
