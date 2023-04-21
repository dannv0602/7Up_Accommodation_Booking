package nlu.axon_active.server.entity;

import jakarta.persistence.*;
import nlu.axon_active.server.entity.composite_key.AccountRoleId;

@Entity
@Table(name="account_role")
public class AccountRole {
    @EmbeddedId
    private AccountRoleId id;
    @ManyToOne
    @MapsId("accountId")
    private Account account;
    @ManyToOne
    @MapsId("roleId")
    private Role role;
}
