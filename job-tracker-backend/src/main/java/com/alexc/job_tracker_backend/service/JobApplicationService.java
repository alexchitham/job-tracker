package com.alexc.job_tracker_backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alexc.job_tracker_backend.model.JobApplication;
import com.alexc.job_tracker_backend.repository.JobApplicationRepository;

import java.util.NoSuchElementException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JobApplicationService {

    private final JobApplicationRepository repository;

    public List<JobApplication> getAllApplications() {
        return repository.findAll();
    }

    public JobApplication createApplication(JobApplication application) {
        return repository.save(application);
    }

    public JobApplication updateApplication(String id, JobApplication updated) {
        if (!repository.existsById(id)) {
            throw new NoSuchElementException("Job application not found with id: " + id);
        }
        updated.setId(id);
        return repository.save(updated);
    }

    public void deleteApplication(String id) {
        if (!repository.existsById(id)) {
            throw new NoSuchElementException("Job application not found with id: " + id);
        }
        repository.deleteById(id);
    }
}