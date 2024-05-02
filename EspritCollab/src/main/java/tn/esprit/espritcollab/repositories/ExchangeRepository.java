package tn.esprit.espritcollab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.espritcollab.entities.Exchange;

public interface ExchangeRepository extends JpaRepository<Exchange,Long> {
}
