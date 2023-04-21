package com.booking.controller;

import com.booking.common.Response;
import com.booking.payload.request.OrderRequest;
import com.booking.payload.response.OrderResponse;
import com.booking.services.impl.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok().body(Response.success("Get all orders success", orderService.getAll()));
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@RequestBody OrderRequest request) {
        OrderResponse response = orderService.create(request);
        System.out.println(request);
        return ResponseEntity.ok().body(Response.success("Create order successfully ", response));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        return ResponseEntity.ok().body(Response.success("Get order by id successfully", orderService.getOrderById(id)));
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getByUserId(@PathVariable Long id) {
        return ResponseEntity.ok().body(Response.success("Get order by id successfully", orderService.findByUserEntityId(id)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody OrderRequest request) {
        OrderResponse response = orderService.updateById(id, request);
        return ResponseEntity.ok().body(Response.success("Update order by id successfully", response));
    }
}

