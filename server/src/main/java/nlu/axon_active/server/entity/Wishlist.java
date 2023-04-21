package nlu.axon_active.server.entity;

import jakarta.persistence.*;
import nlu.axon_active.server.entity.composite_key.WishlistId;

@Entity
@Table(name="wishlist")
public class Wishlist  {
    @EmbeddedId
    private WishlistId id;
    @ManyToOne
    @MapsId("roomId")
    private Room room;
    @ManyToOne
    @MapsId("accountId")
    private Account account;
}
