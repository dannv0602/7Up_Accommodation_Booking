package com.booking.payload.response;

import com.booking.entity.ProvinceEntity;
import com.booking.entity.WardEntity;
import lombok.Builder;
import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Data
@Builder
public class DistrictResponse {
    Long id;
    String name;
    String type;
    String slug;
    String nameWithType;
    String path;
    String pathWithType;
    List<WardResponse> wards;
}
