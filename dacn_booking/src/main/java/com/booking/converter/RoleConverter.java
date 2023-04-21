package com.booking.converter;

import com.booking.entity.RoleEntity;
import com.booking.payload.request.RoleRequest;
import com.booking.payload.response.RoleResponse;

public class RoleConverter {

    public static RoleResponse toResponse(RoleEntity entity){
        return RoleResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .build();
    }
    public static RoleEntity toEntity(RoleRequest entity){
        return RoleEntity.builder()
                .name(entity.getName())
                .build();
    }
}
