package tn.esprit.espritcollabbackend.restController;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.espritcollabbackend.entities.Event;
import tn.esprit.espritcollabbackend.entities.Reservation;
import tn.esprit.espritcollabbackend.entities.User;
import tn.esprit.espritcollabbackend.payload.request.response.MessageResponse;
import tn.esprit.espritcollabbackend.repositories.EventRepository;
import tn.esprit.espritcollabbackend.repositories.UserRepository;
import tn.esprit.espritcollabbackend.security.services.UserDetailsImpl;
import tn.esprit.espritcollabbackend.services.EventService;
import tn.esprit.espritcollabbackend.services.FilesStorageService;
import tn.esprit.espritcollabbackend.services.IUser;
import tn.esprit.espritcollabbackend.services.UserServiceIMP;

import java.io.IOException;
import java.nio.file.Paths;
import java.security.Principal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")// ajoutineha bch el front najmt tchouf el back 5ater ma3ndhech nafs el port w zidna configuration fel security fel crosconfiguration
@RestController
public class EventRestController {
    @Autowired
    FilesStorageService storageService;
    @Autowired
    private EventService eventService;
    @Autowired
    private UserServiceIMP userService;
    @Autowired
    EventRepository eventRepository;
    @Autowired
   UserRepository userRepository;
    @Autowired
    private IUser iUser;
    @PostMapping("/addEvent")
    public ResponseEntity<Event> addEvent(@Valid @ModelAttribute Event event,
                                          @RequestParam("file") MultipartFile file,
                                          @RequestParam("idUser") Long idUser,
                                          Authentication authentication) {
        // Check if user is authenticated
        if (authentication == null || !authentication.isAuthenticated() || !(authentication.getPrincipal() instanceof UserDetailsImpl)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User currentUser = userDetails.getUser();

        // Retrieve the user based on the idUser
        User user = iUser.retrieveById(idUser);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // User not found
        }

        // Set photo URL
        String savedImageUrl = storageService.saveImage(file);
        String photoUrl = "http://localhost:8087/uploads/" + file.getOriginalFilename();
        event.setPhotoUrl(photoUrl);

        // Add the user to the event's user list
        event.getUserList().add(user);

        // Save the event
        Event savedEvent = eventRepository.save(event);

        return ResponseEntity.ok(savedEvent);
    }



    @GetMapping("/getEventById/{idEvent}")
    public Event retrieveById(@PathVariable int idEvent) {
        return eventService.retrieveById(idEvent);
    }
    //ok
    @GetMapping("/getAllEvents")
    public List<Event> retrieveAllEvents() {
        return eventService.retrieveAllEvents();
    }
    //ok


    @PutMapping("/updateEvent/{idEvent}")

    public ResponseEntity<?> updateEvent(@RequestBody Event updateEvent, @PathVariable Long idEvent) {
        try {
            eventService.updateEvent(idEvent, updateEvent);
            return ResponseEntity.ok(new MessageResponse("Event updated successfully!"));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new MessageResponse("An error occurred while updating event"));
        }
    }





    //ok
    @DeleteMapping("/deleteEvent/{idEvent}")
    public void deleteById(@PathVariable long idEvent) {
        try {
            System.out.println("Received user ID: " + idEvent);
            eventService.deleteEvent(idEvent); // Assuming iUser is an instance of a service class
            System.out.println("User deleted successfully");
        } catch (Exception e) {
            System.out.println("Error deleting user: " + e.getMessage());
        }
    }

    // Autres méthodes existantes...

    @PostMapping("/events/{userId}/{eventId}/reservations")
    public Reservation addReservation(
            @PathVariable("userId") long userId,
            @PathVariable("eventId") long eventId,
            @RequestBody Reservation reservation) {
        return eventService.addReservation(userId, eventId, reservation);
    }


    @GetMapping("/events/{eventId}/reservations")
    public List<Reservation> getReservationsByEventId(@PathVariable("eventId") long eventId) {
        return eventService.getReservationsByEventId(eventId);
    }

    @DeleteMapping("/events/reservations/{reservationId}")
    public void deleteReservation(@PathVariable("reservationId") long reservationId) {
        eventService.deleteReservation(reservationId);
    }


}