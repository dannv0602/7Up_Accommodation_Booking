package com.booking.services;

import com.booking.entity.ReviewEntity;
import com.booking.payload.request.ReviewRequest;
import com.booking.payload.request.roomResquest.RoomReviewRequest;

import java.util.List;

public interface IReviewService {
     List<ReviewEntity> getAll();
     ReviewEntity save(ReviewRequest reviewRequest);
     ReviewEntity update(Long id,ReviewRequest reviewRequest);
     void deleteById(Long id);
     ReviewEntity getById(Long id);
     List<ReviewEntity> saveAllByRoom(List<RoomReviewRequest> requests, Long roomId);
     void deleteByRoomId(Long roomId);
     List<ReviewEntity> getAllByRoomId(Long roomId);
     void deleteAll();
}
