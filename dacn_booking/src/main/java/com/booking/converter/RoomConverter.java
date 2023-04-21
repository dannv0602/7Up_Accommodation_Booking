package com.booking.converter;

import com.booking.entity.CategoryEntity;
import com.booking.entity.RoomEntity;
import com.booking.payload.request.RoomRequest;
import com.booking.payload.response.RoomResponse;
import com.booking.payload.response.order.OrderRoomResponse;
import com.booking.payload.response.roomRespsonse.RoomGalleryResponse;
import com.booking.payload.response.roomRespsonse.RoomReviewResponse;

import java.util.List;
import java.util.stream.Collectors;

public class RoomConverter {
    public static RoomResponse toResponse(RoomEntity roomEntity) {
        List<RoomGalleryResponse> galleryResponses = roomEntity.getImages() != null ?
                (roomEntity
                        .getImages()
                        .stream().map(image -> GalleryConverter.toRoomResponse(image))
                        .collect(Collectors.toList()))
                : null;
        List<RoomReviewResponse> reviewResponses = roomEntity.getReviews() != null ?
                roomEntity
                        .getReviews()
                        .stream().map(review -> ReviewConverter.toRoomResponse(review))
                        .collect(Collectors.toList())
                : null;
        return RoomResponse.builder()
                .id(roomEntity.getId())
                .description(roomEntity.getDescription())
                .shortDescription(roomEntity.getShortDescription())
                .name(roomEntity.getName())
                .status(roomEntity.isStatus())
                .images(galleryResponses)
                .reviews(reviewResponses)
                .address(AddressConverter.toResponse(roomEntity.getAddress()))
                .category(CategoryConverter.toResponse(roomEntity.getCategory()))
                .rating(roomEntity.getRating())
                .price(roomEntity.getPrice())
                .build();
    }

    public static RoomEntity toEntity(RoomRequest roomRequest) {
        CategoryEntity categoryEntity = CategoryEntity
                .builder()
                .id(roomRequest.getCategoryId())
                .build();

        return RoomEntity.builder()
                .description(roomRequest.getDescription())
                .shortDescription(roomRequest.getShortDescription())
                .name(roomRequest.getName())
                .numRating(roomRequest.getNumRating())
                .address(AddressConverter.toEntity(roomRequest.getAddress()))
                .category(categoryEntity)
                .rating(roomRequest.getRating())
                .status(roomRequest.isStatus())
                .price(roomRequest.getPrice())
                .build();
    }

    public static OrderRoomResponse toOrderRoomResponse(RoomEntity entity) {
        return  OrderRoomResponse.builder()
                .name(entity.getName())
                .price(entity.getPrice())
                .build();
    }
}
