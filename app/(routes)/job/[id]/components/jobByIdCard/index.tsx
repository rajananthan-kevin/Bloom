import React from "react";
import styles from "./jobByIdCard.module.css";
import { JobById } from "@/type/jobGlobal";
import { Markup } from 'interweave';
import { timeElapsed, getValidString } from "@/lib/utils";

type JobByIdCardProps = {
  jobById: JobById;
};

const JobByIdCard = ({ jobById }: JobByIdCardProps) => {

  const {_id, company, info} = jobById
  
  return (
    <div className={styles.container}>
      <h2>ID: {getValidString(_id)}</h2>  
      <p>Entreprise: {getValidString(company.name)}</p>
      <p>Poste: {getValidString(info.title)}</p>
      <p>{getValidString(info.city)} -  {getValidString(info.type)} - {getValidString(timeElapsed(jobById.created_date))} </p>
      <p><Markup content={getValidString(company.description)}/></p>
      <p>Description: {getValidString(company.description)}</p>
    </div>
  );
};

export default JobByIdCard;
