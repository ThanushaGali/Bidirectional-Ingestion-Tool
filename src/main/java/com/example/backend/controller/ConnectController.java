package com.example.backend.controller;

import com.example.backend.model.ConnectionRequest;
import com.example.backend.service.ConnectionRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/api/connection-requests")
public class ConnectController {

    @Autowired
    private ConnectionRequestService service;

    @PostMapping
    public ConnectionRequest createRequest(@RequestBody ConnectionRequest request) {
        return service.save(request);
    }
}
