package com.booking.converter;

import com.booking.entity.ProvinceEntity;
import com.booking.payload.request.ProvinceRequest;
import com.booking.payload.response.DistrictResponse;
import com.booking.payload.response.ProvinceResponse;
import com.booking.payload.response.addressResponse.AddressProvinceResponse;

import java.util.stream.Collectors;
import java.util.List;

public class ProvinceConverter {
    public static ProvinceEntity toEntity(ProvinceRequest request) {
        return ProvinceEntity.builder()
                .name(request.getName())
                .slug(request.getSlug())
                .nameWithType(request.getNameWithType())
                .type(request.getType())
                .build();
    }

    public static ProvinceResponse toResponse(ProvinceEntity entity) {
    List<DistrictResponse> districtResponses= entity.getDistricts() != null ?
            (entity.getDistricts()
                    .stream().map(district -> DistrictConverter.toResponse(district))
                    .collect(Collectors.toList()))
            : null;
        return ProvinceResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .nameWithType(entity.getNameWithType())
                .slug(entity.getSlug())
                .type(entity.getType())
                .districts(districtResponses)
                .build();
    }
    public static AddressProvinceResponse toAddressResponse(ProvinceEntity entity) {
        return AddressProvinceResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .nameWithType(entity.getNameWithType())
                .build();
    }
}
