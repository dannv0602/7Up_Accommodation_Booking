package com.booking.services.impl;

import com.booking.converter.OrderConverter;
import com.booking.entity.OrderEntity;
import com.booking.entity.UserEntity;
import com.booking.payload.request.OrderRequest;
import com.booking.payload.response.OrderResponse;
import com.booking.repository.OrderRepository;
import com.booking.repository.UserRepository;
import com.booking.services.IOrderService;
import com.booking.services.email.FormMail;
import com.booking.services.email.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private MailService mail;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FormMail formMail;
    @Autowired
    RoomService roomService;
    @Autowired
    UserService userService;

    @Override
    @Transactional
    public OrderResponse create(OrderRequest request) {
        UserEntity user = userRepository.findById(request.getUserId()).orElseThrow(
                () -> new IllegalArgumentException("Not found User by id : " + request.getUserId())
        );

        OrderEntity orderSaved = orderRepository.save(OrderConverter.toEntity(request));
        orderSaved.setRoomEntity(roomService.getById(request.getRoomId()));
        orderSaved.setUserEntity(userService.getById(request.getUserId()));
        OrderResponse response = OrderConverter.toResponse(orderSaved);
        String toMail = user.getEmail();
        String subject = "Invoice Order room " + response.getUser().getName();
        String text = formMail.createOrder(toMail, response);
        mail.sendMail(toMail, subject, text);

        return response;
    }

    @Override
    public List<OrderResponse> getAll() {
        List<OrderEntity> entityList = orderRepository.findAll();
        List<OrderResponse> orderResponses = new ArrayList<>();
        for (OrderEntity order : entityList) {
            orderResponses.add(OrderConverter.toResponse(order));
        }
        return orderResponses;
    }

    @Override
    public OrderResponse getOrderById(Long id) {
        OrderEntity order = orderRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("Not found Order by id : " + id)
        );
        return OrderConverter.toResponse(order);
    }

    @Override
    public OrderResponse updateById(Long id, OrderRequest request) {

        OrderEntity order = orderRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("Not found Order by id : " + id)
        );

        order.setAdults(request.getAdults());
        order.setCheckIn(request.getCheckIn());
        order.setCheckOut(request.getCheckOut());
        order.setChild(request.getChild());
        order.setInfants(request.getInfants());
        order.setNote(request.getNote());
        order.setPaymentMethod(request.getPaymentMethod());
        order.setTaxPrice(request.getTaxPrice());
        order.setTotalPrice(request.getTotalPrice());
        order.setPaidAt(request.getPaidAt());
        order.setRefundAt(request.getRefundAt());
        order.setCustomerName(request.getCustomerName());
        order.setCustomerPhone(request.getCustomerPhone());
        return OrderConverter.toResponse(orderRepository.save(order));
    }

    @Override
    public List<OrderResponse> findByUserEntityId(Long id) {
        List<OrderResponse> responses= orderRepository.findByUserEntityId(id)
                .stream().map(o-> OrderConverter.toResponse(o))
                .collect(Collectors.toList());
        return responses;
    }


}
