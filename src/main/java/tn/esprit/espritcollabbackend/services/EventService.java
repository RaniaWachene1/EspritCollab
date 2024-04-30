package tn.esprit.espritcollabbackend.services;

import org.springframework.web.multipart.MultipartFile;
import tn.esprit.espritcollabbackend.entities.Reservation;
import tn.esprit.espritcollabbackend.entities.Event;
import java.util.List;

public interface EventService {
    Event addEvent(Event event);
    Event retrieveById(long idEvent);
    Event updateEvent(Long idEvent, Event updateEvent);
    List<Event> retrieveAllEvents();
    void deleteEvent(long idEvent);
    /*************************************/
    // Nouvelles méthodes pour la gestion des réservations
    Reservation addReservation(long eventId, Reservation reservation);
    List<Reservation> getReservationsByEventId(long eventId);
    void deleteReservation(long reservationId);
    /**********************************/
    double calculateAverageRating(long eventId);
    void addRating(long eventId, int rating);

}

