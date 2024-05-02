package tn.esprit.espritcollab.restController;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.espritcollab.entities.User;
import tn.esprit.espritcollab.services.IUserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Slf4j
public class UserRestController {
    private IUserService service;
    @PostMapping
    public void register(
            @RequestBody User user
    ) {
        service.register(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return service.login(user);
    }

    @PostMapping("/logout")
    public void logout(@RequestBody User email) {
        service.logout(email.getEmail());
    }

    @GetMapping
    public List<User> findAll() {
        return service.findAll();
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handle(Exception ex) {
        ex.printStackTrace();
        return ResponseEntity
                .status(INTERNAL_SERVER_ERROR)
                .body(ex.getMessage());
    }

}
