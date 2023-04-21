package com.booking.payload.request.roomResquest;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoomReviewRequest {
    String name;
    String comment;
    int rating;
}
