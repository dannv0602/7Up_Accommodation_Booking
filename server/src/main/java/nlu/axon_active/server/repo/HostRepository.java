package nlu.axon_active.server.repo;

import nlu.axon_active.server.entity.Host;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HostRepository  extends JpaRepository<Host, Long> {
}
