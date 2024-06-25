"use client"

import { Job } from '@/type/jobGlobal'
import React from 'react'
import styles from "./jobCard.module.css";
import Link from 'next/link';


const JobCard = ({job}: {job: Job}) => {

  return (
   <div className={styles.container}>
      <h2>{job.company.name}</h2>
      <p>{job.company.description}</p>
      <p>{job.info.title}</p>
      <p>{job.info.city ? job.info.city : "-" }</p>
      <p>{job.info.type}</p>
      <Link href={`/job/${job._id}`}>Voir plus</Link>
   </div>
  )
}

export default JobCard