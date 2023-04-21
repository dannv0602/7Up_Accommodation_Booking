package com.booking.converter;

import com.booking.entity.GalleryEntity;
import com.booking.entity.RoomEntity;
import com.booking.payload.request.GalleryRequest;
import com.booking.payload.request.roomResquest.RoomGalleryRequest;
import com.booking.payload.response.GalleryResponse;
import com.booking.payload.response.roomRespsonse.RoomGalleryResponse;

public class GalleryConverter {
    public static GalleryResponse toResponse(GalleryEntity entity){
        return GalleryResponse.builder()
                .id(entity.getId())
                .url(entity.getUrl())
                .roomId(entity.getRoom().getId())
                .build();
    }
    public static GalleryEntity toEntity(GalleryRequest galleryRequest){
        RoomEntity roomEntity =RoomEntity.builder()
                .id(galleryRequest.getRoomId()).build();
        return GalleryEntity.builder()
                .url(galleryRequest.getUrl())
                .room(roomEntity)
                .build();
    }

    public static GalleryEntity toEntity(RoomGalleryRequest request){
        return GalleryEntity.builder()
                .url(request.getUrl())
                .build();
    }


    public static RoomGalleryResponse toRoomResponse(GalleryEntity entity){
        return RoomGalleryResponse.builder()
                .url(entity.getUrl())
                .build();
    }
}
