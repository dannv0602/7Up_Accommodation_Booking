package nlu.axon_active.server.dto.response;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AccountResponse {
    private String id;
    private String username;
    private String avatar;
    private String type;
    private Set<String> roles;
    private HostResponse host;
}
