package nlu.axon_active.server.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nlu.axon_active.server.entity.Image;
import nlu.axon_active.server.entity.Location;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RoomResponse {
    private Long id;
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

}
