package com.booking.repository;

import com.booking.entity.GalleryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface GalleryRepository extends JpaRepository<GalleryEntity,Long> {
    List<GalleryEntity> findAllByRoomId(Long id);
    void deleteByRoomId(Long id);

}
