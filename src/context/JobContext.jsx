import { createContext, useContext, useState, useEffect } from 'react';
import { initialJobs } from '../data/jobData';

const JobContext = createContext();

const STORAGE_KEY = 'hercules_jobs_data';

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load jobs from localStorage:', e);
    }
    return initialJobs;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
    } catch (e) {
      console.error('Failed to save jobs to localStorage:', e);
    }
  }, [jobs]);

  const addJob = (job) => {
    const newJob = {
      ...job,
      id: `job-${Date.now()}`,
      postedAt: new Date().toISOString().split('T')[0]
    };
    setJobs((prevJobs) => [newJob, ...prevJobs]);
    return newJob;
  };

  const updateJob = (id, updatedFields) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === id ? { ...job, ...updatedFields } : job))
    );
  };

  const deleteJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  const resetToDefaultJobs = () => {
    setJobs(initialJobs);
  };

  const clearAllJobs = () => {
    setJobs([]);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        addJob,
        updateJob,
        deleteJob,
        resetToDefaultJobs,
        clearAllJobs
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
}
