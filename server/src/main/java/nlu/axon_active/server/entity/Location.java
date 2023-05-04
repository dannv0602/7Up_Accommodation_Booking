package nlu.axon_active.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="locations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Location extends BaseEntity {
    private String city;
    private String district;
    private String ward;
    private String street;
    private String houseNumber;
    @OneToOne()
    @JoinColumn(name = "room_id")
    private Room room;
    @OneToOne()
    @JoinColumn(name = "host_id")
    private Host host;
}
