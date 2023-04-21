package com.booking.controller;

import com.booking.common.Response;
import com.booking.services.impl.CloudiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/uploads")
@CrossOrigin
public class CloudiaryController {
    @Autowired
    CloudiaryService cloudiaryService;
    @PostMapping("/multi-images")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file) {
        String url =cloudiaryService.upload(file);
        return ResponseEntity.ok(Response.success("Upload file succesfully",url));
    }
}
