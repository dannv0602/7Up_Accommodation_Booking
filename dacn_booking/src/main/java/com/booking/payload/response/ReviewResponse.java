package com.booking.payload.response;

import com.booking.entity.RoomEntity;
import lombok.Builder;
import lombok.Data;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
@Builder
public class ReviewResponse {
    Long id;
    String name;
    String comment;
    int rating;
    Long roomId;
}
