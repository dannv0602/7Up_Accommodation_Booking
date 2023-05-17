package nlu.axon_active.server.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HostResponse {
    private Long id;
    private String name;
    private String phoneNumber;
    private String gender;
    private String idCard;
    private Date birthDate;
    private LocationResponse locations;
}
