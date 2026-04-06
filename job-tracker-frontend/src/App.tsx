import { useEffect, useState } from 'react'
import type { JobApplication } from './types/JobApplication'
import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication
} from './services/applicationService'
import ApplicationForm from './components/ApplicationForm'
import ApplicationList from './components/ApplicationList'

function App() {
  const [applications, setApplications] = useState<JobApplication[]>([])

  useEffect(() => {
    getApplications().then(setApplications)
  }, [])

  const handleCreate = async (application: JobApplication) => {
    const created = await createApplication(application)
    setApplications([...applications, created])
  }

  const handleDelete = async (id: string) => {
    await deleteApplication(id)
    setApplications(applications.filter((app) => app.id !== id))
  }

  const handleStatusChange = async (id: string, updated: JobApplication) => {
    const result = await updateApplication(id, updated)
    setApplications(applications.map((app) => (app.id === id ? result : app)))
  }

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <ApplicationForm onSubmit={handleCreate} />
      <ApplicationList
        applications={applications}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  )
}

export default App