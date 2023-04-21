package com.booking.payload.response.addressResponse;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AddressProvinceResponse {
    Long id;
    String name;
    String nameWithType;
}
