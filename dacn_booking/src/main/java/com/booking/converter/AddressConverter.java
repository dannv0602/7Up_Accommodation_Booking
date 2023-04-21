package com.booking.converter;

import com.booking.entity.Address;
import com.booking.entity.DistrictEntity;
import com.booking.entity.ProvinceEntity;
import com.booking.entity.WardEntity;
import com.booking.payload.request.AddressRequest;
import com.booking.payload.response.AddressResponse;

public class AddressConverter {

    public static AddressResponse toResponse(Address entity) {
        return AddressResponse.builder()
                .id(entity.getId())
                .country(entity.getCountry())
                .province(ProvinceConverter.toAddressResponse(entity.getProvince()))
                .district(DistrictConverter.toAddressResponse(entity.getDistrict()))
                .ward(WardConverter.toAddressResponse(entity.getWard()))
                .street(entity.getStreet())
                .googleAddress(entity.getGoogleAddress())
                .build();
    }

    public static Address toEntity(AddressRequest request) {
        ProvinceEntity province=ProvinceEntity.builder().id(request.getProvince()).build();
        DistrictEntity district=DistrictEntity.builder().id(request.getDistrict()).build();
        WardEntity ward=WardEntity.builder().id(request.getWard()).build();
        return Address.builder()
                .country(request.getCountry())
                .province(province)
                .district(district)
                .ward(ward)
                .street(request.getStreet())
                .googleAddress(request.getGoogleAddress())
                .build();
    }
}
