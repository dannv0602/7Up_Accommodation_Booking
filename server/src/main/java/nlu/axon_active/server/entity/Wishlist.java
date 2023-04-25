package nlu.axon_active.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nlu.axon_active.server.entity.composite_key.WishlistId;

@Entity
@Table(name="wishlist")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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
