package tn.esprit.espritcollabbackend.restController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.espritcollabbackend.entities.User;
import tn.esprit.espritcollabbackend.services.IUser;

import java.util.List;

@RestController
public class UserRestController {

    @Autowired
    private IUser iUser;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return iUser.addUser(user);
    }

    @GetMapping("/getUserById/{id}")
    public User retrieveById(@PathVariable Long id) {
        return iUser.retrieveById(id);
    }

    @GetMapping("/getAllUsers")
    public List<User> retrieveAllUsers() {
        return iUser.retrieveAllUsers();
    }

    @PutMapping("/updateUser/{id}")
    public User updateUser(@RequestBody User user, @PathVariable Long id) {
        return iUser.updateUser(user, id);
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteById(@PathVariable Long id) {
        iUser.deleteUser(id);
    }
}
