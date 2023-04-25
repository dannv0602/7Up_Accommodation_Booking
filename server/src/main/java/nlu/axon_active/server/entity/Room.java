package nlu.axon_active.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="rooms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Room extends BaseEntity {
    private String title;
    private String description;
    private double size;
    private double rentCost;
    private double deposit;
    private String type;
    private String interiorStatus;
    private int bedRoomNumber;
    private int bathRoomNumber;
    private String cusorshipStatus;
    private String activeStatus;
    @ManyToOne
    @JoinColumn(name="host_id")
    private Host host;
    @OneToOne(mappedBy = "room",cascade = CascadeType.ALL)
    private Location location;
    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private Set<Image> images = new HashSet<>();
    @OneToMany(mappedBy = "room")
    private Set<Evaluation> evaluations = new HashSet<>();
    @OneToMany(mappedBy = "room")
    private Set<Wishlist> wishlists = new HashSet<>();

}
