package com.booking.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String fullName;
    private String email;
    private String role;

    public JwtResponse(String accessToken, Long id, String username, String email,String fullName, String role) {
        this.token = accessToken;
        this.id = id;
        this.username = username;
        this.email = email;
        this.fullName=fullName;
        this.role = role;
    }
}
