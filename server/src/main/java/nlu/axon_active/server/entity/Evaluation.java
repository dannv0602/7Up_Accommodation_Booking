package nlu.axon_active.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nlu.axon_active.server.entity.composite_key.EvaluationId;

@Entity
@Table(name="evaluations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Evaluation {
    @EmbeddedId
    EvaluationId id;
    private int rating;
    private String comment;
    private String status;
    @ManyToOne
    @MapsId("roomId")
    private Room room;
    @ManyToOne
    @MapsId("accountId")
    private Account account;

}
