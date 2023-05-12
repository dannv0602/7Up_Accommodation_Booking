package nlu.axon_active.server.service;

import nlu.axon_active.server.dto.request.RoomRequest;
import nlu.axon_active.server.dto.response.HostResponse;
import nlu.axon_active.server.dto.response.RoomResponse;
import nlu.axon_active.server.entity.Host;
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
        room.setActiveStatus("ACTIVE");
        room.setInteriorStatus(roomRequest.getInteriorStatus());
        RoomResponse roomResponse = mapper.map(roomRepository.save(room),RoomResponse.class);
//        RoomResponse roomResponse = null;
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
        //Get host
        if(room.getHost()!=null){
            HostResponse hostResponse = mapper.map(room.getHost(), HostResponse.class);
            roomResponse.setHostResponse(hostResponse);
        }
        return roomResponse;
    }

    public void update(Long id, RoomRequest request, Long updateBy) {}


    public List<RoomResponse> findAll() {
        List<Room> rooms = roomRepository.findAll();
        List<RoomResponse> responses = new ArrayList<>();
        for(Room room: rooms){
            RoomResponse roomResponse = mapper.map(room,RoomResponse.class);
            responses.add(roomResponse);
            Set<String> urlImages = new HashSet<>();

            for(Image image : room.getImages()){
                urlImages.add(image.getUrl());
            }

            roomResponse.setListImages(urlImages);
        }
        return responses;
    }

    @Override
    public void delete(Long id) {

    }

    public List<RoomResponse> searchRoomByKeywords(String keyword, double minPrice, double maxPrice) {
        List<Room> rooms = roomRepository.findByTitleContainingIgnoreCase(keyword,minPrice,maxPrice);
        List<RoomResponse> responses = new ArrayList<>();

        for(Room room : rooms) {
            RoomResponse roomResponse = mapper.map(room, RoomResponse.class);
            Set<String> urlImages = new HashSet<>();

            for(Image image : room.getImages()) {
                urlImages.add(image.getUrl());
            }
            roomResponse.setListImages(urlImages);
            responses.add(roomResponse);
        }

        return responses;
    }

    public List<RoomResponse> getRoomByCity(String city, double minPrice, double maxPrice) {
        List<Room> rooms = roomRepository.findByLocationCity(city, minPrice, maxPrice);
        List<RoomResponse> responses = new ArrayList<>();

        for(Room room : rooms) {
            RoomResponse roomResponse = mapper.map(room, RoomResponse.class);
            Set<String> urlImages = new HashSet<>();

            for(Image image : room.getImages()) {
                urlImages.add(image.getUrl());
            }
            roomResponse.setListImages(urlImages);
            responses.add(roomResponse);
        }

        return responses;
    }

    public List<RoomResponse> getRoomByCityAndDistrict(String city, String district, double minPrice, double maxPrice) {
        List<Room> rooms = roomRepository.findByLocationCityDistrict(city, district,minPrice,maxPrice);
        List<RoomResponse> responses = new ArrayList<>();

        for(Room room : rooms) {
            RoomResponse roomResponse = mapper.map(room, RoomResponse.class);
            Set<String> urlImages = new HashSet<>();

            for(Image image : room.getImages()) {
                urlImages.add(image.getUrl());
            }
            roomResponse.setListImages(urlImages);
            responses.add(roomResponse);
        }

        return responses;
    }
}
