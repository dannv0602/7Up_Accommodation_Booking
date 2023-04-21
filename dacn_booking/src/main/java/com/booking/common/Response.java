package com.booking.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Data
@AllArgsConstructor
public class Response<T>{
    private boolean success;
    private String message;
    private T data;
    public static <T> Response success(String message, T data){
        return new Response(true,message,data);
    }
    public static <T> Response fail(String message){
        return new Response(false,message,null);
    }
}
