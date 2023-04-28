package nlu.axon_active.server.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LocationRequest {
    private String city;
    private String district;
    private String ward;
    private String street;
    private String houseNumber;
}
