package tn.esprit.espritcollab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.espritcollab.entities.Pomodoro;

public interface PomodoroRepository  extends JpaRepository<Pomodoro,Long> {
}
