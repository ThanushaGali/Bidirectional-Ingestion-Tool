package com.example.backend.service;

import com.example.backend.model.ConnectionRequest;
import com.example.backend.repository.ConnectionRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConnectionRequestService {

    @Autowired
    private ConnectionRequestRepository repository;

    public ConnectionRequest save(ConnectionRequest request) {
        return repository.save(request);
    }

    public List<ConnectionRequest> findAll() {
        return repository.findAll();
    }

    public ConnectionRequest findById(Long id) {
        Optional<ConnectionRequest> request = repository.findById(id);
        return request.orElse(null);
    }
}
