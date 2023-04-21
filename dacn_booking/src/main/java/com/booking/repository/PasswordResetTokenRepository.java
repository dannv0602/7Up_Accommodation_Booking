package com.booking.repository;

import com.booking.entity.PasswordResetToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PasswordResetTokenRepository  extends JpaRepository<PasswordResetToken,Long> {
    PasswordResetToken findByToken(String token);

    Optional<PasswordResetToken> findByTokenAndUserId(String token, Long id);


    void deleteByToken(String token);
}
