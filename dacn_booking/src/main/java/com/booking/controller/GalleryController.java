package com.booking.controller;

import com.booking.common.Response;
import com.booking.converter.GalleryConverter;
import com.booking.converter.ReviewConverter;
import com.booking.entity.GalleryEntity;
import com.booking.exception.ExceptionControllerHandle;
import com.booking.payload.request.GalleryRequest;
import com.booking.payload.response.GalleryResponse;
import com.booking.payload.response.ReviewResponse;
import com.booking.services.impl.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/galleries")
public class GalleryController extends ExceptionControllerHandle {

    @Autowired
    private GalleryService galleryService;

    @GetMapping()
    public ResponseEntity<?> getAll() {
        List<GalleryResponse> responses = galleryService.getAll()
                .stream().map(gallery -> GalleryConverter.toResponse(gallery))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all gallery successfully", responses));
    }

    @GetMapping("/room/{id}")
    public ResponseEntity<?> getAllByRoomId(@PathVariable Long id) {
        List<GalleryResponse> responses = galleryService.getAllByRoomId(id)
                .stream().map(gallery -> GalleryConverter.toResponse(gallery))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all gallery successfully", responses));
    }

    @PostMapping()
    public ResponseEntity<?> save(@RequestBody GalleryRequest request) {
        GalleryEntity entity = galleryService.save(request);
        GalleryResponse response = GalleryConverter.toResponse(entity);
        return ResponseEntity.ok(Response.success("Create a gallery successfully", response));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
            galleryService.deleteById(id);
            return ResponseEntity.ok(Response.success("Delete gallery with id:"+id+" successfully",null));
    }

    @DeleteMapping("/room/{id}")
    public ResponseEntity<?> deleteAllByRoomId(@PathVariable Long id) {
        galleryService.deleteByRoomId(id);
        return ResponseEntity.ok(Response.success("Delete all gallery by room id successfully", null));
    }

    @DeleteMapping("/all")
    public ResponseEntity<?> deleteAll() {
        galleryService.deleteAll();
        return ResponseEntity.ok(Response.success("Delete all gallery successfully",null));
    }


}
