package tn.esprit.espritcollab.entities;

import jakarta.persistence.*;
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
    private int idEvent;
    private String titleEvent;
    @Temporal(TemporalType.DATE)
    private Date dateEvent;
    private String description;
    private int nbMaxInscrits;
    @ManyToMany(mappedBy = "events")
    private List<User> users;


}
