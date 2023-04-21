package nlu.axon_active.server.entity;

import jakarta.persistence.*;

@Entity
@Table(name="locations")
public class Location extends BaseEntity {
    private String addressDetail;
    private String city;
    private String district;
    private String ward;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    private Room room;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "host_id", referencedColumnName = "id")
    private Host host;
}
