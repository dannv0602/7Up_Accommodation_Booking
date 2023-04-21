package com.booking.converter;

import com.booking.entity.OrderEntity;
import com.booking.entity.RoomEntity;
import com.booking.entity.UserEntity;
import com.booking.payload.request.OrderRequest;
import com.booking.payload.response.OrderResponse;
import com.booking.payload.response.RoomResponse;
import com.booking.payload.response.order.OrderRoomResponse;
import com.booking.payload.response.order.OrderUserResponse;

public class OrderConverter {

    public static OrderEntity toEntity(OrderRequest request) {
        RoomEntity room = RoomEntity.builder().id(request.getRoomId()).build();
        UserEntity user = UserEntity.builder().id(request.getUserId()).build();
        return OrderEntity.builder()
                .roomEntity(room)
                .userEntity(user)
                .status(request.getStatus())
                .checkIn(request.getCheckIn())
                .checkOut(request.getCheckOut())
                .adults(request.getAdults())
                .child(request.getChild())
                .infants(request.getInfants())
                .taxPrice(request.getTaxPrice())
                .totalPrice(request.getTotalPrice())
                .paymentMethod(request.getPaymentMethod())
                .paidAt(request.getPaidAt())
                .refundAt(request.getRefundAt())
                .customerName(request.getCustomerName())
                .customerPhone(request.getCustomerPhone())
                .note(request.getNote())
                .build();

    }

    public static OrderResponse toResponse(OrderEntity entity) {

        OrderRoomResponse orderRoomResponse = entity.getRoomEntity() != null ? RoomConverter.toOrderRoomResponse(entity.getRoomEntity()) : null;
        OrderUserResponse orderUserResponse = entity.getUserEntity() != null ? UserConverter.toOrderUserResponse(entity.getUserEntity()) : null;
        return OrderResponse.builder()
                .id(entity.getId())
                .room(orderRoomResponse)
                .user(orderUserResponse)
                .status(entity.getStatus())
                .checkIn(entity.getCheckIn())
                .checkOut(entity.getCheckOut())
                .adults(entity.getAdults())
                .child(entity.getChild())
                .infants(entity.getInfants())
                .taxPrice(entity.getTaxPrice())
                .totalPrice(entity.getTotalPrice())
                .paymentMethod(entity.getPaymentMethod())
                .paidAt(entity.getPaidAt())
                .refundAt(entity.getRefundAt())
                .customerName(entity.getCustomerName())
                .customerPhone(entity.getCustomerPhone())
                .note(entity.getNote())
                .build();
    }

}
