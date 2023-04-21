package com.booking.repository;

import com.booking.entity.VerifyUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerifyUserRepository extends JpaRepository<VerifyUserEntity,Long> {
    VerifyUserEntity findByToken(String token);

    Boolean existsByUserId(Long id);
    Boolean existsByToken(String token);
}
