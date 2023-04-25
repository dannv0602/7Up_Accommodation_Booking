package nlu.axon_active.server.repo;

import nlu.axon_active.server.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image,Long> {
}
