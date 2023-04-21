package com.booking.services.impl;

import com.booking.converter.PasswordTokenResetConverter;
import com.booking.entity.PasswordResetToken;
import com.booking.entity.UserEntity;
import com.booking.repository.PasswordResetTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Calendar;

@Service
public class PasswordResetTokenService {
    @Autowired
    PasswordResetTokenRepository passwordTokenRepository;

    public void createPasswordResetTokenForUser(UserEntity user, String token) {
        PasswordResetToken myToken = PasswordTokenResetConverter.toEntity(token,user);
        passwordTokenRepository.save(myToken);
    }

    public boolean validatePasswordResetToken(String token) {
        PasswordResetToken passToken = passwordTokenRepository.findByToken(token);
        if(isTokenFound(passToken)&&!isTokenExpired(passToken)) return true;
        return false;
    }
    private boolean isTokenFound(PasswordResetToken passToken) {
        return passToken != null;
    }

    private boolean isTokenExpired(PasswordResetToken passToken) {
        final Calendar cal = Calendar.getInstance();
        return passToken.getExpiryDate().before(cal.getTime());
    }
    public PasswordResetToken findByTokenAndUserId(String token,Long id){
        return passwordTokenRepository.findByTokenAndUserId(token,id).orElseThrow(
                ()-> new IllegalArgumentException("Not found")
        );
    }
    public void deleteByToken(String token){
        passwordTokenRepository.deleteByToken(token);
    }

}
