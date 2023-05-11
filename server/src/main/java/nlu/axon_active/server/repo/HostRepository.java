package nlu.axon_active.server.repo;

import jakarta.transaction.Transactional;
import nlu.axon_active.server.entity.Host;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface HostRepository  extends JpaRepository<Host, Long> {
    public void deleteHostById(Long id);
}
