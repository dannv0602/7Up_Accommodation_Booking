package com.booking.services.impl;

import com.booking.converter.AddressConverter;
import com.booking.converter.RoomConverter;
import com.booking.entity.*;
import com.booking.payload.request.RoomRequest;
import com.booking.payload.response.RoomResponse;
import com.booking.repository.AddressRepository;
import com.booking.repository.RoomRepository;
import com.booking.services.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RoomService implements IRoomService {
    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private AddressService addressService;
    @Autowired
    private GalleryService galleryService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserService userService;
    @Autowired
    private ReviewService reviewService;

    @Override
    public List<RoomEntity> getAll() {
        return roomRepository.findAll();
    }
    @Override
    public RoomEntity save(RoomRequest roomRequest) {
        RoomEntity rawEntity = RoomConverter.toEntity(roomRequest);

        Address addressEntity = addressService.save(roomRequest.getAddress());

        rawEntity.setAddress(addressEntity);

        RoomEntity entity = roomRepository.save(rawEntity);

        galleryService.saveAllByRoom(roomRequest.getImages(), entity.getId());
        reviewService.saveAllByRoom(roomRequest.getReviews(), entity.getId());

        return entity;
    }
    @Override
    public RoomEntity update(Long id, RoomRequest roomRequest) {
        RoomEntity rawEntity = RoomConverter.toEntity(roomRequest);
        RoomEntity entity = roomRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Not found room with id:" + id));

        //Delete all old galleries reviews
        galleryService.deleteByRoomId(id);
        reviewService.deleteByRoomId(id);

        //Update address
        Address newAddress= addressService.update(entity.getAddress().getId(),roomRequest.getAddress());
        rawEntity.setAddress(newAddress);

        //Save new galleries and reviews
        List<GalleryEntity> images = galleryService.saveAllByRoom(roomRequest.getImages(), entity.getId());
        List<ReviewEntity> reviews = reviewService.saveAllByRoom(roomRequest.getReviews(), entity.getId());

        rawEntity.setImages(images);
        rawEntity.setReviews(reviews);
        rawEntity.setId(id);

        return roomRepository.save(rawEntity);
    }
    @Override
    public void delete(Long id) {
        RoomEntity entity = roomRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Not found room with id:" + id));
        galleryService.deleteByRoomId(id);
        reviewService.deleteByRoomId(id);
        Long addressId = entity.getAddress().getId();
        roomRepository.delete(entity);
        addressService.deleteById(addressId);
    }
    @Override
    public RoomEntity getById(Long id) {
        RoomEntity entity = roomRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(("Not found room with id:" + id)));
        return entity;
    }

    @Override
    public List<RoomEntity> saveAll(List<RoomRequest> requests) {
        List<RoomEntity> entities=new ArrayList<>();
        for(RoomRequest request:requests){
          entities.add(save(request));
        }
        return entities;
    }

    @Override
    public void deleteAll() {
        galleryService.deleteAll();
        reviewService.deleteAll();
        roomRepository.deleteAll();
        addressService.deleteAll();
    }

    @Override
    @Transactional
    public List<RoomEntity> getByProvinceId(Long id) {
        return roomRepository.findAllByAddressProvinceId(id);
    }
}
