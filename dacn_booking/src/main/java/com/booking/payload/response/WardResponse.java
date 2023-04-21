package com.booking.payload.response;

import com.booking.entity.WardEntity;
import lombok.Builder;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@Builder
public class WardResponse {
    Long id;
    String name;
    String type;
    String slug;
    String nameWithType;
    String path;
    String pathWithType;
}
