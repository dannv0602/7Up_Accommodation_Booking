package nlu.axon_active.server.entity.composite_key;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import nlu.axon_active.server.entity.Account;
import nlu.axon_active.server.entity.Role;
import nlu.axon_active.server.entity.Room;

import java.io.Serializable;
@Embeddable
public class AccountRoleId implements Serializable {
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

}
