package tn.esprit.espritcollabbackend.entities;

import jakarta.validation.constraints.*;
import tn.esprit.espritcollabbackend.entities.Role;
import tn.esprit.espritcollabbackend.entities.Role;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;
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
    @NotNull
private String firstName;
    @NotNull(message = "Last name is required")
    @Pattern(regexp = "[a-zA-Z]+", message = "Last name should contain only letters")
private String lastName;
    @NotNull
private String email;
    @NotNull
private String username;
@Temporal(TemporalType.DATE)
private Date birthdate;
    @NotNull
private String password;

private String imageUser ;
@Enumerated(EnumType.STRING)
private Role role;
    private String description;
    @NotNull
    private String level;

    private String section;
    @NotNull
    private int classNumber;

    @NotNull
    private String major;
    private String facebookUsername;
    private String instagramUsername;
    private String youtubeProfileUrl;
    private String linkedinProfileUrl;
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

    public User(long idUser, String firstName, String lastName, String email, String username, Date birthdate, String password, String imageUser, Role role, String description, String level, int classNumber, String major) {
        this.idUser = idUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.birthdate = birthdate;
        this.password = password;
        this.imageUser = imageUser;
        this.role = role;
        this.description = description;
        this.level = level;
        this.classNumber = classNumber;
        this.major = major;
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(String email, String username, String password, Role role) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public User(String firstName, String lastName, String email, String username, Date birthdate, String password, String imageUser, String level,  int classNumber, String major) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.birthdate = birthdate;
        this.password = password;
        this.imageUser = imageUser;
        this.level = level;

        this.classNumber = classNumber;
        this.major = major;
    }

    public User(String imageUser) {
    }

    public User(String firstName, String lastName, String email, String username, Date birthdate, String password, String imageUser, Role role, String description, String level, String section, int classNumber, String major, String facebookUsername, String instagramUsername, String youtubeProfileUrl, String linkedinProfileUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.birthdate = birthdate;
        this.password = password;
        this.imageUser = imageUser;
        this.role = role;
        this.description = description;
        this.level = level;
        this.section = section;
        this.classNumber = classNumber;
        this.major = major;
        this.facebookUsername = facebookUsername;
        this.instagramUsername = instagramUsername;
        this.youtubeProfileUrl = youtubeProfileUrl;
        this.linkedinProfileUrl = linkedinProfileUrl;
    }

    public User(String firstName, String lastName, String email, String username, Date birthdate, String encode, String imageUser, String level, int classNumber, String major, String description, String facebookUsername, String instagramUsername, String linkedinProfileUrl, String youtubeProfileUrl) {
    }

    public User(String firstName, String lastName, String email, String username, Date birthdate, String encode, String imageUrl, String level, int classNumber, String major, String description) {
    }
}
