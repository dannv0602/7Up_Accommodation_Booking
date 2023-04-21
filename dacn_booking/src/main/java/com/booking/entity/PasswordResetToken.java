package com.booking.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class PasswordResetToken {
    //1 hour expiry
    public static final int EXPIRATION = 1000*60*60;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String token;
    @OneToOne(targetEntity = UserEntity.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private UserEntity user;
    private Date expiryDate;

}
