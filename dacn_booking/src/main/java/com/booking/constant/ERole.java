package com.booking.constant;

import javax.persistence.Enumerated;

public enum ERole {
    USER("USER"),
    ADMIN("ADMIN");

    private String name;

    ERole(String name){
        this.name=name;
    }

}

