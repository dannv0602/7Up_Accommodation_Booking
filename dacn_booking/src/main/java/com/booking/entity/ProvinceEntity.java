package com.booking.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import javax.persistence.*;

@Table(name = "provinces")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ProvinceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    String type;
    String slug;
    String nameWithType;
    @OneToMany(mappedBy = "province",fetch = FetchType.LAZY)
    List<DistrictEntity> districts;
}
