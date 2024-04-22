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
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private int idUser;
private String nomUser;
private String prenomUser;
private String email;
private String pwd;
private String imageUser ;
@Enumerated(EnumType.STRING)
private Role role;
    @ManyToMany
    private List<Event> events;
    @OneToMany(mappedBy = "user")
    private List<Complaint> complaints;
    @OneToMany(mappedBy = "user")
    private List<Revision> revisions;
    @OneToMany(mappedBy = "user")
    private List<Exchange> exchanges;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Document> Documents;
}
