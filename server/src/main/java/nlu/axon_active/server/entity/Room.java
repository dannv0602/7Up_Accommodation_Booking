package nlu.axon_active.server.entity;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="rooms")
public class Room extends BaseEntity {
    private String name;
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
    @OneToOne(mappedBy = "room")
    private Location location;
    @OneToMany(mappedBy = "image")
    private Set<Image> images = new HashSet<>();
    @OneToMany(mappedBy = "room")
    private Set<Evaluation> evaluations = new HashSet<>();
    @OneToMany(mappedBy = "room")
    private Set<Wishlist> wishlists = new HashSet<>();

}
