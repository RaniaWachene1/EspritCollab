package tn.esprit.espritcollab.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Revision implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRev;
    @Temporal(TemporalType.DATE)
    private Date date_debut;
    @Temporal(TemporalType.DATE)
    private Date date_fin;
    private String sujetRev;
    private int duree;
    private String notes;
    private String objectif;
   // private String technique;
  //  private String ressources;
   @ManyToOne
   @JsonIgnore
   private User user;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Document> Documents;

}
