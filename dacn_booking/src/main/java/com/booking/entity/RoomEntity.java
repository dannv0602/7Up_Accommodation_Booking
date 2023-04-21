package com.booking.entity;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rooms")
@Builder
@JsonSerialize
public class RoomEntity extends AbstractEntity<String> {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long id;
    String name;
    String shortDescription;
    String description;
    double price;
    int rating=0;
    int numRating=0;
    boolean status=true;
    @ManyToOne(fetch = FetchType.LAZY)
           @JoinColumn(name = "addressId",nullable = false)
    Address address;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoryId",nullable = false)
    CategoryEntity category;
    @OneToMany(fetch = FetchType.LAZY,mappedBy = "room")
    List<ReviewEntity> reviews;
    @OneToMany(fetch = FetchType.EAGER,mappedBy = "room")
    List<GalleryEntity> images;
}
