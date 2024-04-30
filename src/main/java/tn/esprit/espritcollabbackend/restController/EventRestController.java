package tn.esprit.espritcollabbackend.restController;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.espritcollabbackend.entities.Event;
import tn.esprit.espritcollabbackend.entities.Reservation;
import tn.esprit.espritcollabbackend.payload.request.response.MessageResponse;
import tn.esprit.espritcollabbackend.services.EventService;
import tn.esprit.espritcollabbackend.services.FilesStorageService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")// ajoutineha bch el front najmt tchouf el back 5ater ma3ndhech nafs el port w zidna configuration fel security fel crosconfiguration
@RestController
public class EventRestController {
    @Autowired
    FilesStorageService storageService;
    @Autowired
    private EventService eventService;
    //ok
    @PostMapping("/addEvent")
    public Event addEvent(@RequestBody Event event) {
        return eventService.addEvent(event);
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

    @PostMapping("/events/{eventId}/reservations")
    public Reservation addReservation(@PathVariable("eventId") long eventId, @RequestBody Reservation reservation) {
        return eventService.addReservation(eventId, reservation);
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