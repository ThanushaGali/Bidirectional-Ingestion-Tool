package com.example.backend.repository;

import com.example.backend.model.ConnectionRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConnectionRequestRepository extends JpaRepository<ConnectionRequest, Long> {
    // You can add custom query methods here if needed
}
