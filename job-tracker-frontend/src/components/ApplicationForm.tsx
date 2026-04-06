import { useState } from 'react'
import type { JobApplication } from '../types/JobApplication'

interface ApplicationFormProps {
  onSubmit: (application: JobApplication) => void
}

function ApplicationForm({ onSubmit }: ApplicationFormProps) {
  const [formData, setFormData] = useState<JobApplication>({
    companyName: '',
    jobTitle: '',
    status: 'APPLIED',
    appliedDate: '',
    notes: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      companyName: '',
      jobTitle: '',
      status: 'APPLIED',
      appliedDate: '',
      notes: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        required
      />
      <input
        name="jobTitle"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
        required
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="APPLIED">Applied</option>
        <option value="INTERVIEW">Interview</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>
      <input
        name="appliedDate"
        type="date"
        value={formData.appliedDate}
        onChange={handleChange}
        required
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />
      <button type="submit">Add Application</button>
    </form>
  )
}

export default ApplicationForm