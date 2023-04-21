package com.booking.controller;

import com.booking.common.Response;
import com.booking.converter.DistrictConverter;
import com.booking.converter.ProvinceConverter;
import com.booking.entity.DistrictEntity;
import com.booking.entity.ProvinceEntity;
import com.booking.exception.ExceptionControllerHandle;
import com.booking.payload.request.DistrictRequest;
import com.booking.payload.request.ProvinceRequest;
import com.booking.payload.response.DistrictResponse;
import com.booking.payload.response.ProvinceResponse;
import com.booking.services.impl.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/provinces")
@CrossOrigin
public class ProvinceController extends ExceptionControllerHandle {
    @Autowired
    private ProvinceService provinceService;

    @GetMapping
    public ResponseEntity<?> getAll(){
        List<ProvinceResponse> responses = provinceService.getAll()
                .stream().map(district-> ProvinceConverter.toResponse(district))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all province successfully",responses));

    }
    @PostMapping
    public ResponseEntity<?> save(@RequestBody ProvinceRequest request){
        ProvinceEntity entity = provinceService.save(request);
        ProvinceResponse response = ProvinceConverter.toResponse(entity);
        return ResponseEntity.ok(Response.success("Insert province successfully",response));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
            ProvinceEntity entity = provinceService.getById(id);
            ProvinceResponse response = ProvinceConverter.toResponse(entity);
            return ResponseEntity.ok(Response.success("Get province by id successfully", response));

    }

}
