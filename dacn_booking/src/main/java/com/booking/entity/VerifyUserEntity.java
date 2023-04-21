package com.booking.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class VerifyUserEntity {
    public static final int EXPIRATION = 1000*60*60;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @OneToOne(targetEntity = UserEntity.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private UserEntity user;
    private String token;
    private Date expiryDate;
}
