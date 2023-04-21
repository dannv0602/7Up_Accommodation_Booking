package com.booking.services;

import com.booking.entity.ProvinceEntity;
import com.booking.payload.request.ProvinceRequest;

import java.util.List;

public interface IProvinceService {
    List<ProvinceEntity> getAll();

    ProvinceEntity save(ProvinceRequest request);

    ProvinceEntity getById(Long id);
}
