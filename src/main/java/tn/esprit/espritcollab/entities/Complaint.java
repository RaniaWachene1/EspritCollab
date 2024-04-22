package tn.esprit.espritcollab.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Complaint implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idComplaint;
    @Temporal(TemporalType.DATE)
    private Date dateComplaint;
    private  String comment;
    @Enumerated(EnumType.STRING)
    private  Traitement traitement;
    private String file;

    @ManyToOne
    @JsonIgnore
    private User user;
}
