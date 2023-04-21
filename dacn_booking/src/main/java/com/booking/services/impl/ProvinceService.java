package com.booking.services.impl;

import com.booking.converter.ProvinceConverter;
import com.booking.entity.ProvinceEntity;
import com.booking.payload.request.ProvinceRequest;
import com.booking.repository.ProvinceRepository;
import com.booking.services.IProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProvinceService implements IProvinceService {
    @Autowired
    private ProvinceRepository provinceRepository;

    @Override
    public List<ProvinceEntity> getAll() {
        return provinceRepository.findAll();
    }

    @Override
    public ProvinceEntity save(ProvinceRequest request) {
        ProvinceEntity entity = ProvinceConverter.toEntity(request);
        return provinceRepository.save(entity);
    }

    @Override
    public ProvinceEntity getById(Long id) {
        return provinceRepository
                .findById(id)
                .orElseThrow(()->new IllegalArgumentException("Not found province with id = "+id));
    }
}
