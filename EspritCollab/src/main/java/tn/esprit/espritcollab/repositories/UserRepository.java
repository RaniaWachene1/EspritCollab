package tn.esprit.espritcollab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.espritcollab.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {
}
