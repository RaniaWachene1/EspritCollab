package tn.esprit.espritcollab.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Document implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idDoc;
    private String titleDoc;
    private String content;
    private String format;
    @ManyToOne
    private Modules module;
}
