package com.booking.payload.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CategoryResponse {
    Long id;
    String name;
    String code;
}
