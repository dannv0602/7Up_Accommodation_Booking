package com.booking.controller;

import com.booking.common.Response;
import com.booking.converter.WardConverter;
import com.booking.entity.WardEntity;
import com.booking.exception.ExceptionControllerHandle;
import com.booking.payload.request.WardRequest;
import com.booking.payload.response.WardResponse;
import com.booking.services.impl.WardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/wards")
@CrossOrigin
public class WardController extends ExceptionControllerHandle {
    @Autowired
    private WardService wardService;

    @PostMapping
    public ResponseEntity<?> save(@RequestBody WardRequest request){
        WardEntity entity = wardService.save(request);
        WardResponse response = WardConverter.toResponse(entity);
        return ResponseEntity.ok(Response.success("Insert ward successfully",response));


    }
    @GetMapping
    public ResponseEntity<?> getAll(){
        List<WardResponse> responses = wardService.getAll()
                .stream().map(ward->WardConverter.toResponse(ward))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all ward successfully",responses));

    }
    @GetMapping("/district/{id}")
    public ResponseEntity<?> getByDistrictId(@PathVariable Long id){
        List<WardResponse> responses = wardService.getByDistrictId(id)
                .stream().map(ward->WardConverter.toResponse(ward))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all ward successfully",responses));
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
            WardEntity entity = wardService.getById(id);
            WardResponse response = WardConverter.toResponse(entity);
            return ResponseEntity.ok(Response.success("Insert ward by id successfully", response));
    }

}
