package com.booking.payload.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CategoryRequest {
    String name;
    String code;
}
