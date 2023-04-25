package nlu.axon_active.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nlu.axon_active.server.entity.composite_key.AccountRoleId;

@Entity
@Table(name="account_role")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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
