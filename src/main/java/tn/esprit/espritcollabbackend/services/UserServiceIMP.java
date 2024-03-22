package tn.esprit.espritcollabbackend.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.espritcollabbackend.entities.User;
import tn.esprit.espritcollabbackend.repositories.UserRepository;

import java.util.List;

@Service
public class UserServiceIMP implements IUser {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User retrieveById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User updateUser(User user, Long id) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            // Update user fields as needed
            if (user.getFirstName() != null) {
                existingUser.setFirstName(user.getFirstName());
            }
            // Repeat for other fields...

            return userRepository.save(existingUser);
        }
        return null;
    }

    @Override
    public List<User> retrieveAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public User findByUsername(String username) {
        return null;
    }


}