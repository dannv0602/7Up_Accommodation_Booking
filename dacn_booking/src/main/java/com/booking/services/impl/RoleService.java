package com.booking.services.impl;

import com.booking.converter.RoleConverter;
import com.booking.constant.ERole;
import com.booking.entity.RoleEntity;
import com.booking.payload.request.RoleRequest;
import com.booking.repository.RoleRepository;
import com.booking.services.IRoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleService implements IRoleService {
    @Autowired
    private RoleRepository roleRepository;

    public List<RoleEntity> getAll() {
        return roleRepository.findAll();
    }

    @Override
    public RoleEntity getById(Long id) {
        return roleRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("Role with id :"+ id + "is not exist"));
    }

    @Override
    public RoleEntity save(RoleRequest roleRequest) {
        RoleEntity entity = RoleConverter.toEntity(roleRequest);
        return roleRepository.save(entity);

    }

    @Override
    public RoleEntity update(Long id, RoleRequest roleRequest) {
        RoleEntity entity = RoleConverter.toEntity(roleRequest);
        entity.setId(id);
        return roleRepository.save(entity);
    }

    @Override
    public void deleteById(Long id) {
        RoleEntity entity =roleRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("Role with id :"+ id + "is not exist"));
        roleRepository.delete(entity);
    }

    @Override
    public RoleEntity findByName(String name) {
        return roleRepository.findByName(name);
    }
}
