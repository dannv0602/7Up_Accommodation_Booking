package com.booking.services;

import com.booking.entity.RoomEntity;
import com.booking.payload.request.RoomRequest;
import com.booking.payload.response.RoomResponse;

import java.util.List;

public interface IRoomService {

    List<RoomEntity> getAll();

    RoomEntity save(RoomRequest roomRequest);

    RoomEntity update(Long id, RoomRequest roomRequest);

    void delete(Long id);

    RoomEntity getById(Long id);

    List<RoomEntity> saveAll(List<RoomRequest> requests);

    void deleteAll();

    List<RoomEntity> getByProvinceId(Long id);

}
