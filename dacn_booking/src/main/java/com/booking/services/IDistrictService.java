package com.booking.services;

import com.booking.entity.DistrictEntity;
import com.booking.payload.request.DistrictRequest;


import java.util.List;

public interface IDistrictService {

    List<DistrictEntity> getAll();

    DistrictEntity save(DistrictRequest request);

    List<DistrictEntity> getByProvinceId(Long id);

    DistrictEntity getById(Long id);
}
