package com.booking.payload.response.roomRespsonse;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RoomUserResponse {
    Long id;
    String fullName;
}
