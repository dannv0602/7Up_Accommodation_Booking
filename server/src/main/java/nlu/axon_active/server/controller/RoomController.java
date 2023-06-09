package nlu.axon_active.server.controller;

import nlu.axon_active.server.dto.request.RoomRequest;
import nlu.axon_active.server.dto.response.RoomResponse;
import nlu.axon_active.server.entity.Room;
import nlu.axon_active.server.repo.RoomRepository;
import nlu.axon_active.server.service.BaseService;
import nlu.axon_active.server.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/rooms")

public class RoomController {
    @Autowired
    public RoomService roomService;

    @PostMapping("create/{createBy}")
    public ResponseEntity<RoomResponse> createRoom(@RequestBody RoomRequest request,@PathVariable Long createBy){
        return new ResponseEntity<>(roomService.create(request,createBy), HttpStatus.OK);
    }
    @GetMapping()
    public List<RoomResponse> getAllRooms() {
        return roomService.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<RoomResponse> getRoomById(@PathVariable Long id) {
        RoomResponse room = roomService.getById(id);
        return ResponseEntity.ok().body(room);
    }


}
