package com.booking.payload.response;

import com.booking.constant.ERole;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RoleResponse {
    Long id;
    String name;
}
