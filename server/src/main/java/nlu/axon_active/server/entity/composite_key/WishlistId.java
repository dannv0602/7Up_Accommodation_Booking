package nlu.axon_active.server.entity.composite_key;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import nlu.axon_active.server.entity.Account;
import nlu.axon_active.server.entity.Room;

import java.io.Serializable;

public class WishlistId implements Serializable {
    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
}
