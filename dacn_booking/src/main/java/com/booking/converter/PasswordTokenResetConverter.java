package com.booking.converter;

import com.booking.entity.PasswordResetToken;
import com.booking.entity.UserEntity;

import java.util.Calendar;
import java.util.Date;

public class PasswordTokenResetConverter {
    public static PasswordResetToken toEntity(String token, UserEntity user) {
        return PasswordResetToken.builder()
                .token(token)
                .expiryDate(new Date(new Date().getTime()+PasswordResetToken.EXPIRATION))
                .user(user)
                .build();
    }
}
