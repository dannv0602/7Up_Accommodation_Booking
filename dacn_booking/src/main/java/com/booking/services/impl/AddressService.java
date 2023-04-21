package com.booking.services.impl;

import com.booking.converter.AddressConverter;
import com.booking.entity.Address;
import com.booking.payload.request.AddressRequest;
import com.booking.payload.response.AddressResponse;
import com.booking.repository.AddressRepository;
import com.booking.services.IAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddressService implements IAddressService {
    @Autowired
    private AddressRepository addressRepository;

    @Override
    public List<Address> getAll() {
        return addressRepository.findAll();
    }

    @Override
    public Address getById(Long id) {
        Address entity = addressRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("Not found address with id:"+id));

        return entity;
    }

    @Override
    public Address save(AddressRequest addressRequest) {
        Address entity = AddressConverter.toEntity(addressRequest);
        return addressRepository.save(entity);

    }

    @Override
    public Address update(Long id, AddressRequest addressRequest) {
        Address entity = addressRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("Not found Address by id:"+id));
        Address newAddress=AddressConverter.toEntity(addressRequest);
        newAddress.setId(id);
        return addressRepository.save(newAddress);
    }

    @Override
    public void deleteById(Long id) {
        Address entity = addressRepository.findById(id)
                        .orElseThrow(()->new IllegalArgumentException("Address with id:"+id+" is not exist"));
        addressRepository.delete(entity);
    }

    @Override
    public void deleteAll() {
        addressRepository.deleteAll();
    }
}
