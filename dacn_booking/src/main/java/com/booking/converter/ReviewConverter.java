package com.booking.converter;

import com.booking.entity.ReviewEntity;
import com.booking.entity.RoomEntity;
import com.booking.payload.request.ReviewRequest;
import com.booking.payload.request.roomResquest.RoomReviewRequest;
import com.booking.payload.response.ReviewResponse;
import com.booking.payload.response.roomRespsonse.RoomReviewResponse;

public class ReviewConverter {
    public static ReviewResponse toResponse(ReviewEntity entity){
        return ReviewResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .comment(entity.getComment())
                .rating(entity.getRating())
                .roomId(entity.getRoom().getId())
                .build();
    }
    public static ReviewEntity toEntity(ReviewRequest request){
        RoomEntity roomEntity =RoomEntity.builder()
                .id(request.getRoomId())
                .build();
        return ReviewEntity.builder()
                .name(request.getName())
                .comment(request.getComment())
                .rating(request.getRating())
                .room(roomEntity)
                .build();
    }
    public static ReviewEntity toEntity(RoomReviewRequest request){
        return ReviewEntity.builder()
                .name(request.getName())
                .comment(request.getComment())
                .rating(request.getRating())
                .build();
    }
    public static RoomReviewResponse toRoomResponse(ReviewEntity entity){
        return RoomReviewResponse.builder()
                .name(entity.getName())
                .comment(entity.getComment())
                .rating(entity.getRating())
                .build();
    }

}
