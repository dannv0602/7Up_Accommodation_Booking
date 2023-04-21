package com.booking.payload.request;

import com.booking.constant.ERole;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RoleRequest {
    String name;
}
