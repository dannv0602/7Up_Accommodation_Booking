package nlu.axon_active.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nlu.axon_active.server.entity.composite_key.WishlistId;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="accounts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Account extends BaseEntity {
    private String username;
    private String password;
    private String type;
    private String avatar;
    private String activeStatus;
    @OneToMany(mappedBy = "account", fetch = FetchType.LAZY)
    private Set<Evaluation> evaluations = new HashSet<>();
    @OneToMany(mappedBy = "account", fetch = FetchType.LAZY)
    private Set<Wishlist> wishlist = new HashSet<>();
    @OneToMany(mappedBy = "account", fetch = FetchType.LAZY)
    private Set<AccountRole> accountRoles = new HashSet<>();
}
