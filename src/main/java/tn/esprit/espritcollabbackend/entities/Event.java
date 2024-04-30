package tn.esprit.espritcollabbackend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Event implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idEvent;
    @NotNull
    private String titleEvent;
    @Temporal(TemporalType.DATE)
    private Date dateEvent;
    private String description;
    private int nbMaxInscrits;
    private String location; // Lieu de l'événement (physique)
    private String enligne; // Lieu de l'événement (en ligne)
    private String duree; // Durée de l'événement
    private String formateurs; // Formateurs de l'événement
    private String modalitesParticipation; // Modalités de participation
    private double cout; // Coût de participation
    private String prerequis;
    private double averageRating; // Nouvel attribut pour la notation moyenne
    private String photoUrl; // URL de la photo de l'événement

    @ManyToMany(mappedBy = "events")
    private List<User> users;

    public Event(long idEvent, String titleEvent, Date dateEvent, String description, int nbMaxInscrits, String location, String enligne, String duree, String formateurs, String modalitesParticipation, double cout, String prerequis, double averageRating, String photoUrl, List<User> users, List<Reservation> reservations) {
        this.idEvent = idEvent;
        this.titleEvent = titleEvent;
        this.dateEvent = dateEvent;
        this.description = description;
        this.nbMaxInscrits = nbMaxInscrits;
        this.location = location;
        this.enligne = enligne;
        this.duree = duree;
        this.formateurs = formateurs;
        this.modalitesParticipation = modalitesParticipation;
        this.cout = cout;
        this.prerequis = prerequis;
        this.averageRating = averageRating;
        this.photoUrl = photoUrl;
        this.users = users;
        this.reservations = reservations;
    }

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private List<Reservation> reservations;

    public Event(long idEvent, String titleEvent, Date dateEvent, String description, int nbMaxInscrits, String location, String enligne, String duree, String formateurs, String modalitesParticipation, double cout, String prerequis) {
        this.idEvent = idEvent;
        this.titleEvent = titleEvent;
        this.dateEvent = dateEvent;
        this.description = description;
        this.nbMaxInscrits = nbMaxInscrits;
        this.location = location;
        this.enligne = enligne;
        this.duree = duree;
        this.formateurs = formateurs;
        this.modalitesParticipation = modalitesParticipation;
        this.cout = cout;
        this.prerequis = prerequis;
    }
}
