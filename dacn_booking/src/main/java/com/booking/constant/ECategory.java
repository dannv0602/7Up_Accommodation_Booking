package com.booking.constant;

public enum ECategory {
    VILLA("Villa","villa"),
    HOMESTAY("HomeStay","home-stay"),
    RESORT("Resort","sort"),
    HOTEL("Hotel","hotel");

    private String name;
    private String code;
    private ECategory(String name,String code){
        this.name=name;
        this.code=code;
    }


}
