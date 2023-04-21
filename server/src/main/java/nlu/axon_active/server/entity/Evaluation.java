package nlu.axon_active.server.entity;

import jakarta.persistence.*;
import nlu.axon_active.server.entity.composite_key.EvaluationId;

@Entity
@Table(name="evaluations")
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
