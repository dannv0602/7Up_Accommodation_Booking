package com.booking.payload.response;

import com.booking.entity.DistrictEntity;
import lombok.Builder;
import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Data
@Builder
public class ProvinceResponse {
    Long id;
    String name;
    String type;
    String slug;
    String nameWithType;
    List<DistrictResponse> districts;
}
