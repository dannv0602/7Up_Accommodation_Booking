package nlu.axon_active.server.repo;

import nlu.axon_active.server.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long> {
}
