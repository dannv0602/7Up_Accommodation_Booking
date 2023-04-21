package com.booking.payload.response.order;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OrderUserResponse {
    private String name;
    private String email;
}
