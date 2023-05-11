package nlu.axon_active.server.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HostRequest {
    private String name;
    private String phoneNumber;
    private String gender;
    private String idCard;
    private Date birthDate;
    private LocationRequest location;
}
