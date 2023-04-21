package com.booking.payload.response.roomRespsonse;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RoomReviewResponse {
    String name;
    String comment;
    int rating;
}
