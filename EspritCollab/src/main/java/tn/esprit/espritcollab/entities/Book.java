package tn.esprit.espritcollab.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Book implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private int idBook;
private String titleBook;
private String description;
private String language;
// private String availability;
private String coverPicture;
    @OneToMany(mappedBy = "book")
    private List<Exchange> exchanges;
   // @ManyToOne
    //private Modules module;
}
