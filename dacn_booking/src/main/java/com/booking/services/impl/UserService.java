package com.booking.services.impl;

import com.booking.converter.UserConverter;
import com.booking.entity.PasswordResetToken;
import com.booking.entity.RoleEntity;
import com.booking.entity.UserEntity;
import com.booking.entity.VerifyUserEntity;
import com.booking.payload.request.*;
import com.booking.payload.response.UserResponse;
import com.booking.repository.RoleRepository;
import com.booking.repository.UserRepository;
import com.booking.services.IUserService;
import com.booking.services.email.FormMail;
import com.booking.services.email.MailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private MailService mailService;

    @Autowired
    PasswordResetTokenService passwordResetTokenService;
    @Autowired
    VerifyUserService verifyUserService;

    @Override
    public Boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public Boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public List<UserEntity> getAll() {

        return userRepository.findAll();
    }

    @Override
    public UserEntity findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Not found by id: " + id));
    }


    public UserEntity getById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Not found by id:" + id));
    }

    @Override
    public UserResponse save(UserRequest request) {
        RoleEntity role = roleRepository.findByName("USER");
        if (request.getRoleId() == null) request.setRoleId(role.getId());
        String hash_password = encoder.encode(request.getPassword());
        request.setPassword(hash_password);
        UserEntity rawEntity = UserConverter.toEntity(request);
        UserEntity entity = userRepository.save(rawEntity);
        String token = UUID.randomUUID().toString();
        verifyUserService.save(token, entity);
        mailService.sendMail(entity.getEmail(), "Verify account", FormMail.verifyAccount(entity.getId(), token));
        return UserConverter.toResponse(entity);
    }

    @Override
    public UserResponse verifyUser(VerifyRequest request) {
        UserEntity rawEntity = userRepository.findById(request.getId())
                .orElseThrow(() -> new IllegalArgumentException("User is not exist"));
        if (verifyUserService.checkVerifyUser(request)) {
            rawEntity.setVerified(true);
            UserEntity entity = userRepository.save(rawEntity);
           VerifyUserEntity verifyUserEntity= verifyUserService.findByToken(request.getToken());
           verifyUserService.delete(verifyUserEntity);
            return UserConverter.toResponse(entity);
        }
        return null;

    }

    @Override
    public UserEntity update(Long id, UserRequest request) {
        String hash_password = encoder.encode(request.getPassword());
        request.setPassword(hash_password);
        UserEntity entity = UserConverter.toEntity(request);
        entity.setId(id);
        return userRepository.save(entity);
    }

    @Override
    public void deleteById(Long id) {
        UserEntity entity = getById(id);
        userRepository.delete(entity);
    }

    @Override
    public Boolean checkVerify(LoginRequest loginRequest) {
        UserEntity entity = userRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("Wrong Username and password"));
        if (!entity.isVerified()) return false;
        return true;
    }

//    @Override
//    @Transactional
//    public List<UserResponse> findAllWithNoVerify() {
//        List<UserEntity> entities=userRepository.getUserEntitiesByIsNotVerify(false);
//        List<UserResponse> responses = entities.stream().map(
//                u->UserConverter.toResponse(u)
//        ).collect(Collectors.toList());
//        return responses;
//    }


    public void forgotPassword(String email) {
        UserEntity userEntity = userRepository.findByEmail(email).orElseThrow(
                () -> new IllegalArgumentException("Email is not existed " + email));
        String token = UUID.randomUUID().toString();
        passwordResetTokenService.createPasswordResetTokenForUser(userEntity, token);
        mailService.sendMail(email, "Reset password", FormMail.forgotPassword(userEntity.getId(), token));
    }


    @Transactional
    public boolean resetPassword(ResetPasswordRequest request) {
        boolean validation = passwordResetTokenService.validatePasswordResetToken(request.getToken());
        if (validation) {
            String hash_password = encoder.encode(request.getNewPassword());
            userRepository.updatePasswordById(request.getId(), hash_password);
            passwordResetTokenService.deleteByToken(request.getToken());
            return true;
        } else {
            return false;
        }
    }

    public boolean checkPasswordResetToken(CheckPasswordResetTokenRequest request) {
        PasswordResetToken passwordResetToken = passwordResetTokenService.findByTokenAndUserId(request.getToken(), request.getId());
        System.out.println(request);
        if (passwordResetToken != null) return true;
        return false;
    }


}
