package com.booking.services;

import com.booking.entity.CategoryEntity;
import com.booking.payload.request.CategoryRequest;

import java.util.List;

public interface ICategoryService {

    List<CategoryEntity> getAll();

    CategoryEntity getById(Long id);

    CategoryEntity save(CategoryRequest request);

    CategoryEntity update(Long id, CategoryRequest request);

    void deleteById(Long id);


}
