package com.booking.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.Set;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequest {
    private String username;
    private String password;
    private String email;
    private String fullName;
    private String phoneNumber;
    private String sex;
    private Date dateOfBirth;
    private String address;
}

