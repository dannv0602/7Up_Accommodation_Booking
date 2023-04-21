package com.booking.services.impl;

import com.booking.converter.VerifyUserConverter;
import com.booking.entity.PasswordResetToken;
import com.booking.entity.UserEntity;
import com.booking.entity.VerifyUserEntity;
import com.booking.payload.request.VerifyRequest;
import com.booking.repository.VerifyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;

@Service
public class VerifyUserService {
    @Autowired
    VerifyUserRepository verifyUserRepository;

    public VerifyUserEntity findByToken(String token) {
        return verifyUserRepository.findByToken(token);
    }

    public VerifyUserEntity save(String token, UserEntity user) {
        VerifyUserEntity entity = VerifyUserConverter.toEntity(token, user);
        return verifyUserRepository.save(entity);
    }
    private boolean isTokenExpired(VerifyUserEntity entity) {
        final Calendar cal = Calendar.getInstance();
        return entity.getExpiryDate().before(cal.getTime());
    }
    public boolean checkVerifyUser(VerifyRequest request) {
        System.out.println(verifyUserRepository.existsByUserId(request.getId())&&verifyUserRepository.existsByToken(request.getToken()));
        if(verifyUserRepository.existsByUserId(request.getId())&&verifyUserRepository.existsByToken(request.getToken())){
            VerifyUserEntity entity =verifyUserRepository.findByToken(request.getToken());
            if(isTokenExpired(entity)) return false;
            else return true;
        }
        return false;
    }

    public void delete(VerifyUserEntity entity){
        verifyUserRepository.delete(entity);
    }

}
