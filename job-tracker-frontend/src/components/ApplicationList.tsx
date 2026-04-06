import type { JobApplication } from '../types/JobApplication'

interface Props {
  applications: JobApplication[]
  onDelete: (id: string) => void
  onStatusChange: (id: string, application: JobApplication) => void
}

function ApplicationList({ applications, onDelete, onStatusChange }: Props) {
  if (applications.length === 0) {
    return <p>No applications yet. Add one above!</p>
  }

  return (
    <ul>
      {applications.map((app) => (
        <li key={app.id}>
          <strong>{app.companyName}</strong> — {app.jobTitle}
          <select
            value={app.status}
            onChange={(e) =>
              onStatusChange(app.id!, {
                ...app,
                status: e.target.value as JobApplication['status']
              })
            }
          >
            <option value="APPLIED">Applied</option>
            <option value="INTERVIEW">Interview</option>
            <option value="OFFER">Offer</option>
            <option value="REJECTED">Rejected</option>
          </select>
          <span>{app.appliedDate}</span>
          <p>{app.notes}</p>
          <button onClick={() => onDelete(app.id!)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ApplicationList