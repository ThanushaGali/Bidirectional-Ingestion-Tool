package com.example.backend.controller;

import com.example.backend.model.ConnectionRequest;
import com.example.backend.service.ConnectionRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/connection-requests")
public class ConnectionRequestController {

    @Autowired
    private ConnectionRequestService service;

    // Create a new connection request
    @PostMapping
    public ConnectionRequest createRequest(@RequestBody ConnectionRequest request) {
        return service.save(request);
    }

    // Get all connection requests
    @GetMapping
    public List<ConnectionRequest> getAllRequests() {
        return service.findAll();
    }

    // Get a connection request by ID
    @GetMapping("/{id}")
    public ConnectionRequest getRequestById(@PathVariable Long id) {
        return service.findById(id);
    }
}
