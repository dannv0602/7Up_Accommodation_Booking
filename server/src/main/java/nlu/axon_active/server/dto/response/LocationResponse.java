package nlu.axon_active.server.dto.response;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LocationResponse {
     String city;
     String district;
     String ward;
     String street;
     String houseNumber;


}
