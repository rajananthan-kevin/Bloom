"use client"

import { Job } from '@/type/jobGlobal'
import React, { useEffect, useState } from 'react'
import styles from "./jobCard.module.css";
import Link from 'next/link';
import { Markup } from 'interweave';
import {timeElapsed,truncateText} from '@/lib/utils';

const JobCard = ({job}: {job: Job}) => {

  const [isMounted, setIsMounted] = useState(false);
  const {_id, company, info, created_date} = job

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
   <div className={styles.container}>
      <h2>{company.name}</h2>
      <p className={styles.boldTitle}>{info.title}</p>
      <p>{info.city} - {info.type} - {timeElapsed(created_date)} </p>
      <Markup className={styles.description} content={truncateText(company.description,200)}/>
      <Link href={`/job/${_id}`}>Voir plus</Link>
   </div>
  )
}

export default JobCard