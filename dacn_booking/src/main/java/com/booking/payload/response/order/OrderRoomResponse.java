package com.booking.payload.response.order;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OrderRoomResponse {
    private String name;
    private double price;
}
