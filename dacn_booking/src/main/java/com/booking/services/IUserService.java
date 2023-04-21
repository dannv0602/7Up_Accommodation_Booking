package com.booking.services;

import com.booking.entity.UserEntity;
import com.booking.payload.request.LoginRequest;
import com.booking.payload.request.UserRequest;
import com.booking.payload.request.VerifyRequest;
import com.booking.payload.response.UserResponse;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    List<UserEntity> getAll();

    UserEntity findById(Long id);

    UserResponse save(UserRequest request);

    UserResponse verifyUser(VerifyRequest request);

    UserEntity update(Long id,UserRequest request);

    void deleteById(Long id);

    Boolean checkVerify(LoginRequest loginRequest);
    
}
