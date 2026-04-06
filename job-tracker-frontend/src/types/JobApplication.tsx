
export interface JobApplication {
  id?: string
  companyName: string
  jobTitle: string
  status: 'APPLIED' | 'INTERVIEW' | 'OFFER' | 'REJECTED'
  appliedDate: string
  notes?: string
}