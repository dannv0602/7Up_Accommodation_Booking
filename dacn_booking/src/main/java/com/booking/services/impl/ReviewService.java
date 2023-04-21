package com.booking.services.impl;

import com.booking.converter.ReviewConverter;
import com.booking.entity.ReviewEntity;
import com.booking.entity.RoomEntity;
import com.booking.payload.request.ReviewRequest;
import com.booking.payload.request.roomResquest.RoomReviewRequest;
import com.booking.payload.response.ReviewResponse;
import com.booking.repository.ReviewRepository;
import com.booking.services.IReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReviewService implements IReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
@Override
    public List<ReviewEntity> getAll(){
        return reviewRepository.findAll();
    }
    @Override
    public ReviewEntity save(ReviewRequest reviewRequest){
        ReviewEntity review = ReviewConverter.toEntity(reviewRequest);
        return reviewRepository.save(review);
    }
    @Override
    public ReviewEntity update(Long id,ReviewRequest reviewRequest){
        ReviewEntity review =ReviewConverter.toEntity(reviewRequest);
        review.setId(id);
        return reviewRepository.save(review);
    }
    @Override
    public void deleteById(Long id){
        ReviewEntity entity = getById(id);
        reviewRepository.delete(entity);
    }
    @Override
    public ReviewEntity getById(Long id){
        return reviewRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("Review with id: "+id+"is not exist"));

    }
    @Override
    public List<ReviewEntity> saveAllByRoom(List<RoomReviewRequest> requests, Long roomId){
        List<ReviewEntity> reviews = requests.stream().map(review ->{
           ReviewEntity entity= ReviewConverter.toEntity(review);
           entity.setRoom(RoomEntity.builder().id(roomId).build());
           return entity;
        }).collect(Collectors.toList());
       return reviewRepository.saveAll(reviews);
    }

    @Override
    @Transactional
    public void deleteByRoomId(Long roomId) {
        reviewRepository.deleteByRoomId(roomId);
    }

    @Override
    public List<ReviewEntity> getAllByRoomId(Long roomId) {
        List<ReviewEntity> entities=reviewRepository.findAllByRoomId(roomId);
        return entities;
    }

    @Override
    public void deleteAll() {
        reviewRepository.deleteAll();
    }
}
