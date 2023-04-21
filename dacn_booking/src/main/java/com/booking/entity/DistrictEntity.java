package com.booking.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="districts")
@Data
@Builder
public class DistrictEntity {
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
    @JoinColumn(name = "province_id",nullable = false)
    ProvinceEntity province;
    @OneToMany(fetch = FetchType.LAZY,mappedBy = "district")
    List<WardEntity> wards;
}
