package com.booking.controller;

import com.booking.common.Response;
import com.booking.converter.DistrictConverter;
import com.booking.converter.ProvinceConverter;
import com.booking.entity.DistrictEntity;
import com.booking.entity.ProvinceEntity;
import com.booking.exception.ExceptionControllerHandle;
import com.booking.payload.request.DistrictRequest;
import com.booking.payload.response.DistrictResponse;
import com.booking.payload.response.ProvinceResponse;
import com.booking.services.impl.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;
import java.util.List;

@RestController
@RequestMapping("/api/v1/districts")
@CrossOrigin
public class DistrictController extends ExceptionControllerHandle {
    @Autowired
    private DistrictService districtService;

    @PostMapping
    public ResponseEntity<?> save(@RequestBody DistrictRequest request){
        DistrictEntity entity = districtService.save(request);
        DistrictResponse response = DistrictConverter.toResponse(entity);
        return ResponseEntity.ok(Response.success("Insert district successfully",response));


    }
    @GetMapping
    public ResponseEntity<?> getAll(){
        List<DistrictResponse> responses = districtService.getAll()
                .stream().map(district->DistrictConverter.toResponse(district))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all district successfully",responses));

    }
    @GetMapping("/province/{id}")
    public ResponseEntity<?> getByProvinceId(@PathVariable Long id){
        List<DistrictResponse> responses = districtService.getByProvinceId(id)
                .stream().map(district->DistrictConverter.toResponse(district))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all district successfully",responses));
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){

            DistrictEntity entity = districtService.getById(id);
            DistrictResponse response = DistrictConverter.toResponse(entity);
            return ResponseEntity.ok(Response.success("Get district by id successfully", response));
    }

}
