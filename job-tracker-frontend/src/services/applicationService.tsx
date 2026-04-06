
import type { JobApplication } from "../types/JobApplication"

// Use the API URL from environment variables, with a fallback to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/applications'

// Fetch all job applications from the backend
export const getApplications = async (): Promise<JobApplication[]> => {
  const response = await fetch(API_URL)
    if (!response.ok) {
        throw new Error('Failed to fetch applications')
    }
    return response.json()
}

// Create a new job application
export const createApplication = async (application: JobApplication): Promise<JobApplication> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(application)
  })
  if (!response.ok) {
    throw new Error('Failed to create application')
  }
  return response.json()
}

// Update an existing application
export const updateApplication = async (id: string, application: JobApplication): Promise<JobApplication> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(application)
    })
    if (!response.ok) {
        throw new Error('Failed to updated application')
    }
    return response.json()
}

// Delete an application
export const deleteApplication = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
  if (!response.ok) {
    throw new Error('Failed to delete application')
  }
}