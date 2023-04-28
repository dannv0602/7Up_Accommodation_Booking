package nlu.axon_active.server.service;

import nlu.axon_active.server.dto.request.RoomRequest;
import nlu.axon_active.server.dto.response.RoomResponse;
import nlu.axon_active.server.entity.Image;
import nlu.axon_active.server.entity.Location;
import nlu.axon_active.server.entity.Room;
import nlu.axon_active.server.repo.RoomRepository;
import nlu.axon_active.server.utils.DateUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class RoomService implements BaseService<RoomRequest, RoomResponse> {
    @Autowired
    public RoomRepository roomRepository;
    ModelMapper mapper = new ModelMapper();;
    @Override
    public RoomResponse create(RoomRequest roomRequest,Long createBy) {
        Room room = mapper.map(roomRequest,Room.class);
        room.setCreateBy(createBy);
        room.setCreateDate(DateUtils.getNow());
        Set<Image> images = new HashSet<>();

        for(String imageRequest: roomRequest.getImages()){
            Image image = new Image();
            image.setUrl(imageRequest);
            image.setCreateBy(createBy);
            image.setCreateDate(DateUtils.getNow());
            image.setRoom(room);
            images.add(image);

        }
        room.setImages(images);


        Location location = mapper.map(roomRequest.getLocation(), Location.class);
        location.setCreateBy(createBy);
        location.setCreateDate(DateUtils.getNow());
        location.setRoom(room);
        room.setLocation(location);

        RoomResponse roomResponse = mapper.map(roomRepository.save(room),RoomResponse.class);
//        RoomResponse roomResponse = null;
        return roomResponse;
    }

    @Override
    public RoomResponse getById(Long id) {
        return null;
    }

    @Override
    public void update(Long id, RoomRequest request, Long updateBy) {

    }

    @Override
    public void delete(Long id) {

    }


}
