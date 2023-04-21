package com.booking.services;

import com.booking.entity.Address;
import com.booking.payload.request.AddressRequest;
import com.booking.payload.response.AddressResponse;

import java.util.List;

public interface IAddressService {


    List<Address> getAll();

    Address getById(Long id);

    Address save(AddressRequest addressRequest);

    Address update(Long id, AddressRequest addressRequest);

    void deleteById(Long id);

    void deleteAll();
}
