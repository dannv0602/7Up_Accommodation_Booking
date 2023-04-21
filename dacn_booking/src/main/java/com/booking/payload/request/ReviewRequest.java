package com.booking.payload.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReviewRequest {
    String name;
    String comment;
    int rating;
    Long roomId;
}
