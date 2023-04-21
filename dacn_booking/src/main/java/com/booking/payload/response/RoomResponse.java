package com.booking.payload.response;

import com.booking.entity.*;
import com.booking.payload.response.roomRespsonse.RoomGalleryResponse;
import com.booking.payload.response.roomRespsonse.RoomReviewResponse;
import com.booking.payload.response.roomRespsonse.RoomUserResponse;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder

public class RoomResponse {
    Long id;
    String name;
    String shortDescription;
    String description;
    double price;
    int rating;
    int numRating;
    boolean status;
    AddressResponse address;
    CategoryResponse category;
    List<RoomReviewResponse> reviews;
    List<RoomGalleryResponse> images;
}
