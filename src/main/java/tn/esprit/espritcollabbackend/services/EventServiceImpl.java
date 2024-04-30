package tn.esprit.espritcollabbackend.services;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.espritcollabbackend.entities.Event;
import tn.esprit.espritcollabbackend.repositories.EventRepository;
import tn.esprit.espritcollabbackend.entities.Reservation;
import tn.esprit.espritcollabbackend.repositories.ReservationRepository;
import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private ReservationRepository reservationRepository;
    @Override
    public Event addEvent(Event event) {
        return eventRepository.save(event);
    }



    @Override
    public Event retrieveById(long idEvent) {
        Optional<Event> optionalEvent = eventRepository.findById(idEvent);
        return optionalEvent.orElse(null);
    }

    @Override
    public Event updateEvent(Long idEvent, Event updateEvent) {

            Event existingEvent = eventRepository.findById(idEvent)
                    .orElseThrow(() -> new EntityNotFoundException("Event not found with id: " + idEvent));

            // Mettre à jour les champs spécifiques s'ils ne sont pas nuls
            if (updateEvent.getTitleEvent() != null) {
                existingEvent.setTitleEvent(updateEvent.getTitleEvent());
            }
            if (updateEvent.getDateEvent() != null) {
                existingEvent.setDateEvent(updateEvent.getDateEvent());
            }
            if (updateEvent.getDescription() != null) {
                existingEvent.setDescription(updateEvent.getDescription());
            }

                existingEvent.setNbMaxInscrits(updateEvent.getNbMaxInscrits());


        if (updateEvent.getDuree() != null) {
            existingEvent.setDuree(updateEvent.getDuree());
        }
        if (updateEvent.getFormateurs() != null) {
            existingEvent.setFormateurs(updateEvent.getFormateurs());
        }
        if (updateEvent.getModalitesParticipation() != null) {
            existingEvent.setModalitesParticipation(updateEvent.getModalitesParticipation());
        }
        if (updateEvent.getCout() != 0) {
            existingEvent.setCout(updateEvent.getCout());
        }
        if (updateEvent.getPrerequis() != null) {
            existingEvent.setPrerequis(updateEvent.getPrerequis());
        }
        if (updateEvent.getAverageRating() != 0) {
            existingEvent.setAverageRating(updateEvent.getAverageRating());
        }
        if (updateEvent.getPhotoUrl() != null) {
            existingEvent.setPhotoUrl(updateEvent.getPhotoUrl());
        }
        existingEvent.setPhotoUrl(updateEvent.getPhotoUrl());
        existingEvent.setDescription(updateEvent.getDescription());
        existingEvent.setTitleEvent(updateEvent.getTitleEvent());
        existingEvent.setDateEvent(updateEvent.getDateEvent());
        existingEvent.setNbMaxInscrits(updateEvent.getNbMaxInscrits());
        existingEvent.setDuree(updateEvent.getDuree());
        existingEvent.setPrerequis(updateEvent.getPrerequis());
        existingEvent.setAverageRating(updateEvent.getAverageRating());

            // Enregistrer les modifications dans la base de données
            eventRepository.save(existingEvent);
        return existingEvent;
    }


//*****************************************************************//
    @Override
    public List<Event> retrieveAllEvents() {
        return eventRepository.findAll();
    }

//****************************************************************//

    @Override
    public void deleteEvent(long idEvent) {
        eventRepository.deleteById(idEvent);
    }


    // Implémentation des autres méthodes de base

//****************************************************************//
    @Override
    public Reservation addReservation(long eventId, Reservation reservation) {
        Event event = eventRepository.findById(eventId).orElse(null);
        if (event != null) {
            reservation.setEvent(event);
            return reservationRepository.save(reservation);
        }
        return null;
    }



    @Override
    public List<Reservation> getReservationsByEventId(long eventId) {
        Event event = eventRepository.findById(eventId).orElse(null);
        if (event != null) {
            return event.getReservations();
        }
        return null;
    }
//**************************************************************//
    @Override
    public void deleteReservation(long reservationId) {
        eventRepository.deleteById(reservationId);
    }
    @Override
    public double calculateAverageRating(long eventId) {
        Event event = eventRepository.findById(eventId).orElse(null);
        if (event != null) {
            // Code pour calculer la moyenne des notes des évaluations de l'événement
            return 0.0; // Remplacer par le calcul réel
        }
        return 0.0; // Valeur par défaut si l'événement n'est pas trouvé
    }

    @Override
    public void addRating(long eventId, int rating) {
        Event event = eventRepository.findById(eventId).orElse(null);
        if (event != null) {
            // Code pour ajouter une nouvelle évaluation et mettre à jour la moyenne
        }
    }
}
