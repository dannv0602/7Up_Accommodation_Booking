package com.booking.services;

import com.booking.entity.WardEntity;
import com.booking.payload.request.DistrictRequest;
import com.booking.payload.request.WardRequest;

import java.util.List;

public interface IWardService {
    List<WardEntity> getAll();

    WardEntity save(WardRequest request);

    List<WardEntity> getByDistrictId(Long id);

    WardEntity getById(Long id);
}
