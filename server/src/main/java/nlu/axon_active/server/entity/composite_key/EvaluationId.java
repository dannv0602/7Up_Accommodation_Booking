package nlu.axon_active.server.entity.composite_key;

import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import nlu.axon_active.server.entity.Account;
import nlu.axon_active.server.entity.Room;

import java.io.Serializable;

@Embeddable
public class EvaluationId implements Serializable {
    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

}
