package com.booking.payload.request;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class OrderRequest {

    private Long userId;

    private Long roomId;

    private int adults;

    private int child;

    private int infants;

    private Date checkIn;

    private Date checkOut;

    private String note;

    private String status;

    private String paymentMethod;

    private double taxPrice;

    private double totalPrice;

    private Date paidAt;

    private Date refundAt;

    private String customerName;

    private String customerPhone;

}
