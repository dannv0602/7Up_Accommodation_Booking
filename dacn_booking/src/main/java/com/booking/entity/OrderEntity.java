package com.booking.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
@Builder
@ToString
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity userEntity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "room_id", nullable = false)
    private RoomEntity roomEntity;

    private int adults;

    private int child;

    private int infants;

    @Temporal(TemporalType.TIMESTAMP)
    private Date checkIn;

    @Temporal(TemporalType.TIMESTAMP)
    private Date checkOut;

    private String note;

    private String status;

    private String paymentMethod;

    private double taxPrice;

    private double totalPrice;

    @Temporal(TemporalType.TIMESTAMP)
    private Date paidAt;

    @Temporal(TemporalType.TIMESTAMP)
    private Date refundAt;

    private String customerName;

    private String customerPhone;


}
