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
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class

RoomService implements BaseService<RoomRequest, RoomResponse> {
    @Autowired
    private  RoomRepository roomRepository;


    ModelMapper mapper = new ModelMapper();;
    @Override
    public RoomResponse createRoom(RoomRequest roomRequest,Long createBy) {
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
        return roomResponse;
    }

    @Override
    public RoomResponse getById(Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Room not found!"+id));

        RoomResponse roomResponse = mapper.map(room,RoomResponse.class);

        Set<String> urlImages = new HashSet<>();

        for(Image image : room.getImages()){
            urlImages.add(image.getUrl());
        }
        roomResponse.setListImages(urlImages);
        return roomResponse;
    }

    @Override
    public void updateRoom(Long id, RoomRequest roomRequest) {
    }

    public List<RoomResponse> findAll() {
        List<Room> rooms = roomRepository.findAll();
        List<RoomResponse> responses = new ArrayList<>();
        for(Room room: rooms){
            responses.add(mapper.map(room,RoomResponse.class));
        }
        return responses;
    }
}
