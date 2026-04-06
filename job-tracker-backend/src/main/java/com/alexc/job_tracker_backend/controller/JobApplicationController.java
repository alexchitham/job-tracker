package com.alexc.job_tracker_backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alexc.job_tracker_backend.model.JobApplication;
import com.alexc.job_tracker_backend.service.JobApplicationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
public class JobApplicationController {

    private final JobApplicationService service;

    @GetMapping
    public List<JobApplication> getAll() {
        return service.getAllApplications();
    }

    @PostMapping
    public ResponseEntity<JobApplication> create(@Valid @RequestBody JobApplication application) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.createApplication(application));
    }

    @PutMapping("/{id}")
    public ResponseEntity<JobApplication> update(@PathVariable String id, @Valid @RequestBody JobApplication application) {
        return ResponseEntity.ok(service.updateApplication(id, application));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.deleteApplication(id);
        return ResponseEntity.noContent().build();
    }
}