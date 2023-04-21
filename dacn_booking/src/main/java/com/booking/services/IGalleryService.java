package com.booking.services;

import com.booking.entity.GalleryEntity;
import com.booking.payload.request.GalleryRequest;
import com.booking.payload.request.roomResquest.RoomGalleryRequest;

import java.util.List;

public interface IGalleryService {

     List<GalleryEntity> getAll();

     List<GalleryEntity> getAllByRoomId(Long id);

     GalleryEntity save(GalleryRequest galleryRequest);

     List<GalleryEntity> saveAllByRoom(List<RoomGalleryRequest> requests, Long roomId);

     void deleteByRoomId(Long roomId);

     void update(Long id, GalleryRequest galleryRequest) ;

     void deleteById(Long id);

     void deleteAll();
}
