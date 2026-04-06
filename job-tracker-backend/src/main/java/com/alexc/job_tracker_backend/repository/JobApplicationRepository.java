package com.alexc.job_tracker_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.alexc.job_tracker_backend.model.JobApplication;

@Repository
public interface JobApplicationRepository 
    extends MongoRepository<JobApplication, String> {
}