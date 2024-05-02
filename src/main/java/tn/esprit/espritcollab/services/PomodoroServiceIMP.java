package tn.esprit.espritcollab.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.espritcollab.entities.Pomodoro;
import tn.esprit.espritcollab.repositories.PomodoroRepository;
import tn.esprit.espritcollab.repositories.RevisionRepository;
import java.util.List;
@Service
@AllArgsConstructor
public class PomodoroServiceIMP implements IPomodoro{
    private PomodoroRepository pomodoroRepository ;

    public Pomodoro saveOrUpdatePomodoro(Pomodoro pomodoro) {
        return pomodoroRepository.save(pomodoro);
    }
}
