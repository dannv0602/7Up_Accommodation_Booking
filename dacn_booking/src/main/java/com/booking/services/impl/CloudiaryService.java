package com.booking.services.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.Singleton;
import com.cloudinary.utils.ObjectUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@Service
public class CloudiaryService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private final Cloudinary cloudinary = Singleton.getCloudinary();

    public String upload(MultipartFile file) {
            try {
                Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap( "folder", "images/homestay/"));
                String publicId = uploadResult.get("public_id").toString();
                logger.info(" successfully uploaded the file: " + publicId);
                return publicId;
            } catch (Exception ex) {
                logger.error(" failed to load to Cloudinary the image file: " + file.getName());
                logger.error(ex.getMessage());
                return null;
            }

    }
}
