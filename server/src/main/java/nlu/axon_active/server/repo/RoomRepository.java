package nlu.axon_active.server.repo;

import nlu.axon_active.server.dto.response.RoomResponse;
import nlu.axon_active.server.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room,Long> {
    public List<Room> findRoomsByLocationCity(String city);
}
