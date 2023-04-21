package com.booking.controller.admin;

import com.booking.common.Response;
import com.booking.converter.RoleConverter;
import com.booking.entity.RoleEntity;
import com.booking.exception.ExceptionControllerHandle;
import com.booking.payload.request.RoleRequest;
import com.booking.payload.response.RoleResponse;
import com.booking.services.impl.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/roles")
public class RoleController extends ExceptionControllerHandle {
    @Autowired
    private RoleService roleService;

    @GetMapping
    public ResponseEntity<?> getAll() {
        List<RoleResponse> roleResponseList = roleService.getAll().stream().map(role -> RoleConverter.toResponse(role))
                .collect(Collectors.toList());
        return ResponseEntity.ok(Response.success("Get all role successfully", roleResponseList));
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody RoleRequest roleRequest) {
        RoleEntity entity = roleService.save(roleRequest);
        RoleResponse roleResponse = RoleConverter.toResponse(entity);
        return ResponseEntity.ok(Response.success("Create role successfully", roleResponse));

    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody RoleRequest roleRequest) {
        RoleEntity roleEntity = roleService.update(id, roleRequest);
        RoleResponse roleResponse = RoleConverter.toResponse(roleEntity);
        return ResponseEntity.ok(Response.success("Update role successfully", roleResponse));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        roleService.deleteById(id);
        return ResponseEntity.ok(Response.success("Delete role with id " + id + " successfully", null));
    }


}
