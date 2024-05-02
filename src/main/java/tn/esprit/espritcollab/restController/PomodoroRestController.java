package tn.esprit.espritcollab.restController;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.espritcollab.entities.Pomodoro;
import tn.esprit.espritcollab.services.IPomodoro;
import tn.esprit.espritcollab.services.IRevision;

@RestController
@AllArgsConstructor

 public class PomodoroRestController {
    private IPomodoro iPomodoro;
    @PostMapping("/api/pomodoro")
    public Pomodoro createOrUpdatePomodoro(@RequestBody Pomodoro pomodoro) {
        return iPomodoro.saveOrUpdatePomodoro(pomodoro);
    }

}
