package com.booking.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "address")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String country;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "provinceId",nullable = false)
    private ProvinceEntity province;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "districtId",nullable = false)
    private DistrictEntity district;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "wardId",nullable = false)
    private WardEntity ward;
    private String street;
    private String googleAddress;

}
