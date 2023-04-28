package nlu.axon_active.server.controller;

import nlu.axon_active.server.dto.request.RoomRequest;
import nlu.axon_active.server.dto.response.AccountResponse;
import nlu.axon_active.server.dto.response.RoomResponse;
import nlu.axon_active.server.service.AccountService;
import nlu.axon_active.server.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {
    @Autowired
    public AccountService accountService;

    @GetMapping("/login")
    public ResponseEntity<AccountResponse> login(@RequestParam String username,@RequestParam String password) {
        return new ResponseEntity<>(accountService.login(username,password), HttpStatus.OK);
    }
}
