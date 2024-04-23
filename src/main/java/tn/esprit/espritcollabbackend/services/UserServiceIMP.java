package tn.esprit.espritcollabbackend.services;


import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.espritcollabbackend.entities.Event;
import tn.esprit.espritcollabbackend.entities.User;
import tn.esprit.espritcollabbackend.repositories.EventRepository;
import tn.esprit.espritcollabbackend.repositories.UserRepository;
import tn.esprit.espritcollabbackend.security.services.UserDetailsImpl;

import java.time.Duration;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class UserServiceIMP implements IUser {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FilesStorageService filesStorageService;


    @Autowired
    private EventRepository eventRepository;
    @Override
    public User addUser(User user, MultipartFile imageFile) {
        try {
            if (imageFile != null && !imageFile.isEmpty()) {
                String imageUrl = filesStorageService.saveImage(imageFile);
                user.setImageUser(imageUrl);
            }
            return userRepository.save(user);
        } catch (Exception e) {
            throw new RuntimeException("Failed to add user. Error: " + e.getMessage());
        }
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
    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
    @Override
    public User findByUsername(String username) {
        return null;
    }


    public void generatePasswordResetToken(User user) {
        String token = UUID.randomUUID().toString();
        user.setResetPasswordToken(token);
        user.setResetPasswordTokenExpiry(new Date(System.currentTimeMillis() + 3600000)); // Token expiry in 1 hour
        userRepository.save(user);
        // Send email with password reset link containing the token
    }

    public void resetPassword(String token, String newPassword) {
        User user = userRepository.findByResetPasswordToken(token);
        if (user != null && user.getResetPasswordTokenExpiry().after(new Date())) {
            user.setPassword(newPassword);
            user.setResetPasswordToken(null);
            user.setResetPasswordTokenExpiry(null);
            userRepository.save(user);
            // Password reset successful, notify user
        } else {
            // Invalid or expired token, notify user
        }
    }
    public User getCurrentUser() {
        // Retrieve the currently authenticated user from the security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                // Define the method directly here
                UserDetails userDetails = (UserDetails) principal;
                return getUserFromUserDetails(userDetails);
            }
        }

        // Handle the case where the principal is not an instance of UserDetails
        return null;
    }

    // Method to extract the User object from UserDetails
    private User getUserFromUserDetails(UserDetails userDetails) {
        if (userDetails instanceof UserDetailsImpl) {
            UserDetailsImpl userDetailsImpl = (UserDetailsImpl) userDetails;
            return userDetailsImpl.getUser();
        }
        return null;
    }


    @Override
    public boolean verifyEmail(String verificationToken) {
        // Find the user by verification token
        User user = userRepository.findByVerificationToken(verificationToken);

        if (user != null) {
            // Mark the user's email as verified
            user.setVerified(true);
            // Clear the verification token
            user.setVerificationToken(null);
            // Save the updated user
            userRepository.save(user);
            return true; // Email verified successfully
        } else {
            return false; // Invalid verification token
        }
    }



    @Override
    public void deactivateAccount(long userId, Duration duration) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        user.setActive(false);
        user.setDeactivationDate(new Date());
        user.setDeactivationDuration(duration);
        user.setReactivationDate(Date.from(user.getDeactivationDate().toInstant().plus(duration)));

        userRepository.save(user);
    }

    @Override
    public void reactivateAccount(long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        user.setActive(true);
        user.setDeactivationDate(null);
        user.setDeactivationDuration(null);
        user.setReactivationDate(null);

        userRepository.save(user);
    }

    public boolean isUserActive(long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        return user.isActive();
    }

    @Override
    public User assignUserToEvent(Long idUser, Long idEvent) {
        User user =userRepository.findById(idUser).orElse(null);
        Event event = eventRepository.findById(idEvent).orElse(null);
        try {
            user.getEventList().add(event);
        }
        catch(NullPointerException exception){
            List<Event> eventList = new ArrayList<>();
            eventList.add(event);
            user.setEventList(eventList);
        }

        return userRepository.save(user);
    }

}