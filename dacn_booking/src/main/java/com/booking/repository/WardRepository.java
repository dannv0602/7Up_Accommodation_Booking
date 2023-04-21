package com.booking.repository;

import com.booking.entity.DistrictEntity;
import com.booking.entity.WardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WardRepository extends JpaRepository<WardEntity,Long> {
    List<WardEntity> findAllByDistrictId(Long id);
}
