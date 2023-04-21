package com.booking.controller.admin;


import com.booking.common.Response;
import com.booking.converter.UserConverter;
import com.booking.entity.UserEntity;
import com.booking.exception.ExceptionControllerHandle;
import com.booking.payload.request.UserRequest;
import com.booking.payload.response.UserResponse;
import com.booking.services.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin
public class UserController extends ExceptionControllerHandle {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<?> getAllUsers() {
        List<UserResponse> responses = userService.getAll().stream().map(user->UserConverter.toResponse(user))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all users successfully",responses ));
    }

//    @GetMapping("/not-verify")
//    @RolesAllowed("ADMIN")
//    public ResponseEntity<?> getAllUsersWithNoVerify() {
//        List<UserResponse> responses = userService.findAllWithNoVerify();
//        return ResponseEntity.ok(Response.success("Get all users with no verify successfully",responses ));
//    }

    @GetMapping("/{id}")
    @RolesAllowed("ADMIN")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        UserEntity entity = userService.getById(id);
        UserResponse response = UserConverter.toResponse(entity);
        return ResponseEntity.ok(Response.success("Get user by id successfully", response));
    }

    @PostMapping("/")
    @RolesAllowed("ADMIN")
    public ResponseEntity<?> create(@RequestBody UserRequest userRequest) {
        UserResponse response = userService.save(userRequest);
        return ResponseEntity.ok(Response.success("Create user successfully", response));
    }

    @PutMapping("/{id}")
    @RolesAllowed("ADMIN")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody UserRequest request) {
        UserEntity entity = userService.update(id, request);
        UserResponse response = UserConverter.toResponse(entity);
        return ResponseEntity.ok(Response.success("Update user successfully", response));
    }

    @DeleteMapping("/{id}")
    @RolesAllowed("ADMIN")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        userService.deleteById(id);
        return ResponseEntity.ok(Response.success("Delete user successfully", null));
    }




}
