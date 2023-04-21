package com.booking.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "wards")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class WardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    String type;
    String slug;
    String nameWithType;
    String path;
    String pathWithType;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "district_id",nullable = false)
    DistrictEntity district;
}
