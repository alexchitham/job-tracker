package com.alexc.job_tracker_backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "applications")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobApplication {

    @Id
    private String id;

    @NotBlank(message = "Company name is required")
    private String companyName;

    @NotBlank(message = "Job title is required")
    private String jobTitle;

    @NotBlank(message = "Status is required")
    @Pattern(regexp = "APPLIED|INTERVIEW|OFFER|REJECTED", message = "Status must be one of: APPLIED, INTERVIEW, OFFER, REJECTED")
    private String status;

    @NotBlank(message = "Applied date is required")
    @Pattern(regexp = "\\d{4}-\\d{2}-\\d{2}", message = "Applied date must be in YYYY-MM-DD format")
    private String appliedDate;

    private String notes;
}