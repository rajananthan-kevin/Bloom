import React from "react";
import styles from "./jobByIdCard.module.css";
import { JobById } from "@/type/jobGlobal";

type JobByIdParams = {
  jobById: JobById;
};

const JobByIdCard = ({ jobById }: JobByIdParams) => {
  return (
    <div className={styles.container}>
      <h1>{jobById._id}</h1>  
      <h2>{jobById.info.title}</h2>
      <h3>{jobById.company.name}</h3>
      <p>{jobById.company.description}</p>
      <p>{jobById.info.city}</p>
    </div>
  );
};

export default JobByIdCard;
