package com.booking.payload.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GalleryRequest {
    String url;
    Long roomId;
}
