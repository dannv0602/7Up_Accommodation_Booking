package com.booking.services.impl;

import com.booking.converter.DistrictConverter;
import com.booking.entity.DistrictEntity;
import com.booking.entity.ProvinceEntity;
import com.booking.payload.request.DistrictRequest;
import com.booking.repository.DistrictRepository;
import com.booking.services.IDistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DistrictService implements IDistrictService {

    @Autowired
    private DistrictRepository  districtRepository;


    @Override
    public List<DistrictEntity> getAll() {
        return districtRepository.findAll();
    }

    @Override
    public DistrictEntity save(DistrictRequest request) {
        ProvinceEntity provinceEntity = ProvinceEntity.builder()
                .id(request.getProvinceId())
                .build();
        DistrictEntity districtEntity = DistrictConverter.toEntity(request);
        districtEntity.setProvince(provinceEntity);
        return districtRepository.save(districtEntity);
    }

    @Override
    public List<DistrictEntity> getByProvinceId(Long id) {
        return districtRepository.findAllByProvinceId(id);
    }

    @Override
    public DistrictEntity getById(Long id) {
        return districtRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("Not found district with id = "+id));
    }

}
