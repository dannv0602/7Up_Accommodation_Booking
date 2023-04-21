package com.booking.services.impl;

import com.booking.converter.GalleryConverter;
import com.booking.entity.GalleryEntity;
import com.booking.entity.RoomEntity;
import com.booking.payload.request.GalleryRequest;
import com.booking.payload.request.roomResquest.RoomGalleryRequest;
import com.booking.repository.GalleryRepository;
import com.booking.services.IGalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GalleryService implements IGalleryService {
    @Autowired
    private GalleryRepository galleryRepository;

    @Override
    public List<GalleryEntity> getAll() {
        return galleryRepository.findAll();
    }

    @Override
    public List<GalleryEntity> getAllByRoomId(Long id) {
        return galleryRepository.findAllByRoomId(id);
    }

    @Override
    public GalleryEntity save(GalleryRequest galleryRequest) {
        GalleryEntity entity = GalleryConverter.toEntity(galleryRequest);
        return galleryRepository.save(entity);
    }

    @Override
    public List<GalleryEntity> saveAllByRoom(List<RoomGalleryRequest> requests, Long roomId) {
        List<GalleryEntity> entities = requests.stream().map(request -> {
            GalleryEntity entity = GalleryConverter.toEntity(request);
            entity.setRoom(RoomEntity.builder().id(roomId).build());
            return entity;
        }).collect(Collectors.toList());
        return galleryRepository.saveAll(entities);
    }

    @Override
    @Transactional
    public void deleteByRoomId(Long roomId) {
        galleryRepository.deleteByRoomId(roomId);
    }

    public void update(Long id, GalleryRequest galleryRequest) {
        GalleryEntity entity = GalleryConverter.toEntity(galleryRequest);
        Optional<GalleryEntity> optional = galleryRepository.findById(id);
        if (optional.isPresent()) {
            entity.setId(id);
            galleryRepository.save(entity);
        }
    }

    public void deleteById(Long id) {
        galleryRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        galleryRepository.deleteAll();
    }
}
