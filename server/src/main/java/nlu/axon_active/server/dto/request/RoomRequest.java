package nlu.axon_active.server.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nlu.axon_active.server.entity.Image;
import nlu.axon_active.server.entity.Location;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class RoomRequest {
    private String title;
    private String description;
    private double size;
    private double rentCost;
    private double deposit;
    private String type;
    private String interiorStatus;
    private int bedRoomNumber;
    private int bathRoomNumber;
    private LocationRequest location;
    private Long hostId;
    private List<String> images = new ArrayList<>();
}
