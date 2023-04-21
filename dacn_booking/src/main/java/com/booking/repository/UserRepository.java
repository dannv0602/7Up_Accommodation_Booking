package com.booking.repository;

import com.booking.entity.UserEntity;
import com.booking.payload.request.LoginRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUsername(String username);

//    @Modifying
//    @Transactional
//    @Query("SELECT UserEntity from  UserEntity   u where u.isVerified=:is")
//    List<UserEntity> getUserEntitiesByIsNotVerify(@Param("is") boolean isVerify);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    Boolean existsByPassword(String password);

    Optional<UserEntity> findByEmail(String email);

    @Modifying
    @Query("update UserEntity u set u.password=:password where u.id=:id")
    void updatePasswordById(@Param("id") Long id, @Param("password") String password);


}
