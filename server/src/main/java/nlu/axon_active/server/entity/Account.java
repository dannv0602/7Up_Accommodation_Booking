package nlu.axon_active.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import nlu.axon_active.server.entity.composite_key.WishlistId;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="accounts")
public class Account extends BaseEntity {
    private String username;
    private String password;
    private String type;
    private String avatar;
    private String activeStatus;
    @OneToMany(mappedBy = "account")
    private Set<Evaluation> evaluations = new HashSet<>();
    @OneToMany(mappedBy = "account")
    private Set<Wishlist> wishlist = new HashSet<>();
    @OneToMany(mappedBy = "account")
    private Set<AccountRole> accountRoles = new HashSet<>();
}
