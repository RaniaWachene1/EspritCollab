package tn.esprit.espritcollabbackend.services;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.espritcollabbackend.entities.User;

import java.util.List;
import java.util.Map;

public interface IUser  {


    User addUser(User user, MultipartFile imageFile);

    User retrieveById(Long id);


    void updateUser(Long userId, User updateUser);

    List<User> retrieveAllUsers();
    void deleteUser(Long id);
    User findByUsername(String username);

}

