package tn.esprit.espritcollabbackend.services;


import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.espritcollabbackend.entities.User;
import tn.esprit.espritcollabbackend.repositories.UserRepository;

import java.util.List;

@Service
public class UserServiceIMP implements IUser {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FilesStorageService filesStorageService;
    @Override
    public User addUser(User user, MultipartFile imageFile) {
        try {
            // Handle file upload
            if (imageFile != null && !imageFile.isEmpty()) {
                String imageUrl = filesStorageService.saveImage(imageFile);
                user.setImageUser(imageUrl);
            }
        } catch (Exception e) {
            // Handle file upload exception
            e.printStackTrace();
            // You might want to throw a specific exception or handle the error in a different way
        }

        return userRepository.save(user);
    }

    @Override
    public User retrieveById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public void updateUser(Long userId, User updateUser) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));

        // Update specific fields if they are not null
        if (updateUser.getUsername() != null) {
            existingUser.setUsername(updateUser.getUsername());
        }
        if (updateUser.getEmail() != null) {
            existingUser.setEmail(updateUser.getEmail());
        }
        if (updateUser.getFirstName() != null) {
            existingUser.setFirstName(updateUser.getFirstName());
        }
        if (updateUser.getLastName() != null) {
            existingUser.setLastName(updateUser.getLastName());
        }
        if (updateUser.getBirthdate() != null) {
            existingUser.setBirthdate(updateUser.getBirthdate());
        }
        if (updateUser.getImageUser() != null) {
            existingUser.setImageUser(updateUser.getImageUser());
        }
        if (updateUser.getLevel() != null) {
            existingUser.setLevel(updateUser.getLevel());
        }

        if (updateUser.getMajor() != null) {
            existingUser.setClassNumber(updateUser.getClassNumber());
        }
        if (updateUser.getMajor() != null) {
            existingUser.setMajor(updateUser.getMajor());
        }
        existingUser.setImageUser(updateUser.getImageUser());
        existingUser.setDescription(updateUser.getDescription());
        existingUser.setFacebookUsername(updateUser.getFacebookUsername());
        existingUser.setInstagramUsername(updateUser.getInstagramUsername());
        existingUser.setLinkedinProfileUrl(updateUser.getLinkedinProfileUrl());
        existingUser.setLinkedinProfileUrl(updateUser.getLinkedinProfileUrl());
        existingUser.setYoutubeProfileUrl(updateUser.getYoutubeProfileUrl());

        userRepository.save(existingUser);
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