package com.booking.payload.response;

import com.booking.payload.response.addressResponse.AddressDistrictResponse;
import com.booking.payload.response.addressResponse.AddressProvinceResponse;
import com.booking.payload.response.addressResponse.AddressWardResponse;
import lombok.Builder;
import lombok.Data;

@Data
//@AllArgsConstructor
//@NoArgsConstructor
@Builder
public class AddressResponse {
    private Long id;
    private String country;
    private AddressProvinceResponse province;
    private AddressDistrictResponse district;
    private AddressWardResponse ward;
    private String street;
    private String googleAddress;
}
