import JobService from "@/api/jobServices";
import React from "react";
import JobByIdCard from "./components/jobByIdCard";
import styles from "./page.module.css";

type PageProps = {
  params: { id: string };
};

const JobById = async ({ params }: PageProps) => {

  const jobById = await JobService.getJobById(params.id);
  
  return (
    <>
      <div className={styles.jobSection}>
        <JobByIdCard jobById={jobById.data} />
      </div>
    </>
  );
};

export default JobById;
