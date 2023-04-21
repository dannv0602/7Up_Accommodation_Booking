package com.booking.converter;

import com.booking.entity.CategoryEntity;
import com.booking.payload.request.CategoryRequest;
import com.booking.payload.response.CategoryResponse;

public class CategoryConverter {
    public static CategoryResponse toResponse(CategoryEntity entity){
        return CategoryResponse.builder()
                .id(entity.getId())
                .code(entity.getCode())
                .name(entity.getName())
                .build();
    }
    public static CategoryEntity toEntity(CategoryRequest categoryRequest){
        return CategoryEntity.builder()
                .name(categoryRequest.getName())
                .code(categoryRequest.getCode())
                .build();
    }
}
