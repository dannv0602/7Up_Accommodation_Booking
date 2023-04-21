package nlu.axon_active.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="images")
public class Image extends BaseEntity {
    private String url;
    @ManyToOne
    @JoinColumn(name = "image_id")
    private Room room;
}
