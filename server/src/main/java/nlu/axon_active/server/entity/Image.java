package nlu.axon_active.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="images")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Image extends BaseEntity {
    private String url;
    @ManyToOne()
    @JoinColumn(name = "room_id")
    private Room room;
}
