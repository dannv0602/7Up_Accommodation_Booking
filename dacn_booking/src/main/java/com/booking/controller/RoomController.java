package com.booking.controller;

import com.booking.common.Response;
import com.booking.converter.RoomConverter;
import com.booking.entity.RoomEntity;
import com.booking.exception.ExceptionControllerHandle;
import com.booking.payload.request.RoomRequest;
import com.booking.payload.response.RoomResponse;
import com.booking.services.impl.RoomService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/rooms")
@CrossOrigin
public class RoomController extends ExceptionControllerHandle {
    @Autowired
    private RoomService roomService;

    @GetMapping
    public ResponseEntity<?> getAll() {
        List<RoomResponse> responses = roomService.getAll()
                .stream().map((room)->RoomConverter.toResponse(room))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all room successfully", responses));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        RoomResponse response = RoomConverter.toResponse(roomService.getById(id));
        return ResponseEntity.ok(Response.success("Get room by id successfully", response));
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody RoomRequest request) {
        RoomResponse response = RoomConverter.toResponse(roomService.save(request));
        return ResponseEntity.ok(Response.success("Create a room successfully", response));
    }

    @PutMapping("/{id}")
    @RolesAllowed("ADMIN")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody RoomRequest request) {
        RoomResponse response = RoomConverter.toResponse(roomService.update(id, request));
        return ResponseEntity.ok(Response.success("Update room with id: " + id + " successfully", response));
    }

    @DeleteMapping("/{id}")
    @RolesAllowed("ADMIN")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        roomService.delete(id);
        return ResponseEntity.ok(Response.success("Delete by id:" + id + " successfully", null));
    }

    @PostMapping("/all")
    public ResponseEntity<?> saveAll(@RequestBody List<RoomRequest> requests){
        List<RoomResponse> responses=roomService.saveAll(requests)
                .stream().map(room->RoomConverter.toResponse(room))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Save all room successfully",responses));
    }
    @DeleteMapping("/all")
    public ResponseEntity<?> deleteAll() {
        roomService.deleteAll();
        return ResponseEntity.ok(Response.success("Delete all room successfully", null));
    }

    @GetMapping("/province/{id}")
    public ResponseEntity<?> getAllByProvinceId(@PathVariable Long id){
        List<RoomResponse> responses = roomService.getByProvinceId(id)
                .stream().map(room->RoomConverter.toResponse(room))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all by province sucessfully",responses));
    }
}
