package com.booking.payload.response;

import com.booking.entity.RoomEntity;
import lombok.Builder;
import lombok.Data;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Data
@Builder
public class GalleryResponse {
    Long id;
    String url;
    Long roomId;
}
