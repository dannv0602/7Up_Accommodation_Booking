package com.booking.converter;

import com.booking.entity.DistrictEntity;
import com.booking.entity.ProvinceEntity;
import com.booking.payload.request.DistrictRequest;
import com.booking.payload.request.ProvinceRequest;
import com.booking.payload.response.DistrictResponse;
import com.booking.payload.response.ProvinceResponse;
import com.booking.payload.response.addressResponse.AddressDistrictResponse;
import com.booking.payload.response.addressResponse.AddressProvinceResponse;

public class DistrictConverter {
    public static DistrictEntity toEntity(DistrictRequest request){
        return DistrictEntity.builder()
                .name(request.getName())
                .slug(request.getSlug())
                .nameWithType(request.getNameWithType())
                .type(request.getType())
                .path(request.getPath())
                .pathWithType(request.getPathWithType())

                .build();
    }

    public static DistrictResponse toResponse(DistrictEntity entity){
        return DistrictResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .nameWithType(entity.getNameWithType())
                .slug(entity.getSlug())
                .type(entity.getType())
                .path(entity.getPath())
                .pathWithType(entity.getPathWithType())
                .build();
    }
    public static AddressDistrictResponse toAddressResponse(DistrictEntity entity) {
        return AddressDistrictResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .nameWithType(entity.getNameWithType())
                .pathWithType(entity.getPathWithType())
                .build();
    }
}
