"use client"

import React, { useEffect, useState } from "react";
import styles from "./jobByIdCard.module.css";
import { JobById } from "@/type/jobGlobal";
import { Markup } from 'interweave';
import { timeElapsed, getValidString } from "@/lib/utils";

type JobByIdCardProps = {
  jobById: JobById;
};

const JobByIdCard = ({ jobById }: JobByIdCardProps) => {

  const [isMounted, setIsMounted] = useState(false);
  const {_id, company, info} = jobById

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <div className={styles.container}>
    <div className={styles.jobSection}>
      <h2>ID: {getValidString(_id)}</h2>  
      <p>Entreprise: {getValidString(company.name)}</p>
      <p>Poste: {getValidString(info.title)}</p>
      <p>{getValidString(info.city)} -  {getValidString(info.type)} - {getValidString(timeElapsed(jobById.created_date))}</p>
      <p>Description: <Markup content={getValidString(company.description)}/></p>
      </div>
    </div>
  );
};

export default JobByIdCard;
