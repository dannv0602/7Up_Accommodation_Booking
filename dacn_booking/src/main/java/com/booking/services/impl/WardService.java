package com.booking.services.impl;

import com.booking.converter.WardConverter;
import com.booking.entity.DistrictEntity;
import com.booking.entity.WardEntity;
import com.booking.payload.request.WardRequest;
import com.booking.repository.WardRepository;
import com.booking.services.IWardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WardService implements IWardService {
    @Autowired
    private WardRepository wardRepository;

    @Override
    public List<WardEntity> getAll() {
        return wardRepository.findAll();
    }

    @Override
    public WardEntity save(WardRequest request) {
        DistrictEntity districtEntity = DistrictEntity
                .builder()
                .id(request.getDistrictId())
                .build();

        WardEntity wardEntity = WardConverter.toEntity(request);
        wardEntity.setDistrict(districtEntity);
        return wardRepository.save(wardEntity);
    }

    @Override
    public List<WardEntity> getByDistrictId(Long id) {
        return wardRepository.findAllByDistrictId(id);
    }

    @Override
    public WardEntity getById(Long id) {
        return wardRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("Not found ward with id = "+id));
    }

}
