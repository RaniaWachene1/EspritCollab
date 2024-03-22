package tn.esprit.espritcollabbackend.entities;
import tn.esprit.espritcollabbackend.entities.Role;
import tn.esprit.espritcollabbackend.entities.Role;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@ToString
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private long idUser;
private String firstName;
private String lastName;
private String email;
private String username;
private String password;
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

    public User() {
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }



}
