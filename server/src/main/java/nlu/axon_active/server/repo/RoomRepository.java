package nlu.axon_active.server.repo;

import nlu.axon_active.server.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room,Long> {
    @Query("SELECT r FROM Room r WHERE r.title LIKE %:keyword% AND r.rentCost BETWEEN :minPrice AND :maxPrice")
    List<Room> findByTitleContainingIgnoreCase(String keyword, double minPrice, double maxPrice);

    @Query("SELECT r FROM Room r JOIN r.location l WHERE l.city = :city  AND r.rentCost BETWEEN :minPrice AND :maxPrice")
    List<Room> findByLocationCity(String city, double minPrice, double maxPrice);

    @Query("SELECT r FROM Room r JOIN r.location l WHERE l.city = :city AND l.district = :district AND r.rentCost BETWEEN :minPrice AND :maxPrice" )
    List<Room> findByLocationCityDistrict(String city, String district, double minPrice, double maxPrice);
    public List<Room> findRoomsByActiveStatus(String activeStatus);
}
