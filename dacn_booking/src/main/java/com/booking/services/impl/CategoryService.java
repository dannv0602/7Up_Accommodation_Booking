package com.booking.services.impl;

import com.booking.converter.CategoryConverter;
import com.booking.entity.CategoryEntity;
import com.booking.payload.request.CategoryRequest;
import com.booking.repository.CategoryRepository;
import com.booking.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public List<CategoryEntity> getAll() {
        return categoryRepository.findAll();
    }
    @Override
    public CategoryEntity save(CategoryRequest categoryRequest) {
        CategoryEntity entity = CategoryConverter.toEntity(categoryRequest);
        return categoryRepository.save(entity);
    }
    @Override
    public CategoryEntity update(Long id, CategoryRequest categoryRequest) {
        CategoryEntity entity = CategoryConverter.toEntity(categoryRequest);
        return categoryRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("Category with id: "+id+" is not exist"));
    }
    @Override
    public void deleteById(Long id) {
       CategoryEntity entity = categoryRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("Category with id: "+id+" is not exist"));
        categoryRepository.delete(entity);
    }
    @Override
    public CategoryEntity getById(Long id) {
        CategoryEntity entity = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Category with id: "+id+" is not exist"));
        return entity;
    }
}
