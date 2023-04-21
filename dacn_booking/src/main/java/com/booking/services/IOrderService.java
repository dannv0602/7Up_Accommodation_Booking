package com.booking.services;

import com.booking.entity.OrderEntity;
import com.booking.payload.request.OrderRequest;
import com.booking.payload.response.OrderResponse;

import javax.transaction.Transactional;
import java.util.List;

public interface IOrderService {
    @Transactional
    OrderResponse create(OrderRequest request);

    List<OrderResponse> getAll();

    OrderResponse getOrderById(Long id);

    OrderResponse updateById(Long id, OrderRequest request);

    List<OrderResponse> findByUserEntityId(Long id);


}
