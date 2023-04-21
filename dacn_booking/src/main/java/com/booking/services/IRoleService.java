package com.booking.services;

import com.booking.constant.ERole;
import com.booking.entity.RoleEntity;
import com.booking.payload.request.RoleRequest;

import java.util.List;
import java.util.Optional;

public interface IRoleService {
    List<RoleEntity> getAll();

    RoleEntity getById(Long id);

    RoleEntity save(RoleRequest roleRequest);

    RoleEntity update(Long id, RoleRequest roleRequest);

    void deleteById(Long id);

    RoleEntity findByName(String name);
}
