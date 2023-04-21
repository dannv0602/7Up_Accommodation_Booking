package com.booking.converter;

import com.booking.entity.PasswordResetToken;
import com.booking.entity.UserEntity;
import com.booking.entity.VerifyUserEntity;

import java.util.Date;

public class VerifyUserConverter {
    public static VerifyUserEntity toEntity(String token, UserEntity user) {
        return VerifyUserEntity.builder()
                .token(token)
                .expiryDate(new Date(new Date().getTime()+VerifyUserEntity.EXPIRATION))
                .user(user)
                .build();
    }
}
