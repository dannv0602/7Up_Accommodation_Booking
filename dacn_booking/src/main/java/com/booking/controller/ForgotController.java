package com.booking.controller;

import com.booking.common.Response;
import com.booking.exception.ExceptionControllerHandle;
import com.booking.payload.request.CheckPasswordResetTokenRequest;
import com.booking.payload.request.ForgotRequest;
import com.booking.payload.request.ResetPasswordRequest;
import com.booking.services.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users-forgot")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ForgotController extends ExceptionControllerHandle {
    @Autowired
    UserService userService;

    @PostMapping("/forgot")
    public ResponseEntity<?> forgot(@RequestBody ForgotRequest forgotRequest) {
        userService.forgotPassword(forgotRequest.getEmail());
        return ResponseEntity.ok(Response.success("Please check your mail, your token is sent", null));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> forgot(@RequestBody ResetPasswordRequest request) {
        boolean isSuccess = userService.resetPassword(request);
        if (isSuccess)
            return ResponseEntity.ok(Response.success("Reset password successfully, please login", null));
        else
            return ResponseEntity.ok(Response.fail("Please try again"));
    }


    @PostMapping("/check-pass-word-reset-token")
    public ResponseEntity<?> checkPasswordResetToken(@RequestBody CheckPasswordResetTokenRequest request){
        if(userService.checkPasswordResetToken(request)) {
            return ResponseEntity.ok(Response.success("Please fill your new password", null));
        }else{
            return ResponseEntity.ok(Response.fail("Token is expiry"));
        }
    }
}
