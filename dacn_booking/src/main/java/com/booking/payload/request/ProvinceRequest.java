package com.booking.payload.request;

import lombok.Builder;
import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Builder
public class ProvinceRequest {
    String name;
    String type;
    String slug;
    String nameWithType;
}
