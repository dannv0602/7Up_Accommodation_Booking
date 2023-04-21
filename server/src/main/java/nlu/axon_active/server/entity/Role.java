package nlu.axon_active.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="roles")
public class Role extends BaseEntity {
    private String roleName;
    @OneToMany(mappedBy = "role")
    private Set<AccountRole> accountRoles = new HashSet<>();

}
