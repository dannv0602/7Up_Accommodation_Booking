package nlu.axon_active.server.repo;

import nlu.axon_active.server.entity.Account;
import nlu.axon_active.server.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
