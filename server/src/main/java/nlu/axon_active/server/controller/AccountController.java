package nlu.axon_active.server.controller;

import nlu.axon_active.server.dto.request.AccountRequest;
import nlu.axon_active.server.dto.request.HostRequest;
import nlu.axon_active.server.dto.request.RoomRequest;
import nlu.axon_active.server.dto.response.AccountResponse;
import nlu.axon_active.server.dto.response.RoomResponse;
import nlu.axon_active.server.entity.Host;
import nlu.axon_active.server.service.AccountService;
import nlu.axon_active.server.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/accounts")
public class AccountController {
    @Autowired
    public AccountService accountService;

    @GetMapping("/login")
    public ResponseEntity<AccountResponse> login(@RequestParam String username,@RequestParam String password) {
        return new ResponseEntity<>(accountService.login(username,password), HttpStatus.OK);
    }
    @PostMapping("/register")
    public ResponseEntity<AccountResponse> register(@RequestBody AccountRequest request) {
        return new ResponseEntity<>(accountService.register(request), HttpStatus.OK);
    }
    @GetMapping("/search/{username}")
    public ResponseEntity<AccountResponse> search(@PathVariable String username) {
        return new ResponseEntity<>(accountService.getByUsername(username), HttpStatus.OK);
    }
    @PostMapping("registerHost/{accountId}")
    public ResponseEntity<AccountResponse> registerHost(@RequestBody HostRequest hostRequest,@PathVariable Long accountId){
        return new ResponseEntity<>(accountService.registerHost(hostRequest,accountId),HttpStatus.OK);
    }
    @DeleteMapping("delete/{hostId}")
    public ResponseEntity<?> deleteHost(@PathVariable Long hostId){
        accountService.deleteHost(hostId);
        return ResponseEntity.noContent().build();
    }
}
