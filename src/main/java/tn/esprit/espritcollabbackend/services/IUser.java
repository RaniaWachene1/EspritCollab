package tn.esprit.espritcollabbackend.services;
import tn.esprit.espritcollabbackend.entities.User;

import java.util.List;

public interface IUser {
    User addUser(User user);
    User retrieveById(Long id);
    User updateUser(User user, Long id);
    List<User> retrieveAllUsers();
    void deleteUser(Long id);
    User findByUsername(String username);

}

