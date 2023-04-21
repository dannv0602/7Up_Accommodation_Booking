package com.booking.payload.response.addressResponse;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AddressWardResponse {
    Long id;
    String name;
    String nameWithType;
    String pathWithType;
}
