package nlu.axon_active.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="hosts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Host extends BaseEntity{
    private String name;
    private String phoneNumber;
    private String gender;
    private String idCard;
    private Date birthDate;
    private String activeStatus;

    @OneToMany(mappedBy="host")
    private Set<Room> rooms = new HashSet<>();
    @OneToOne(mappedBy = "host")
    private Location location;
}
