import JobService from "@/api/jobServices";
import React from "react";
import JobByIdCard from "./components/jobByIdCard";

type PageProps = {
  params: { id: string };
};

const JobById = async ({ params }: PageProps) => {

  const jobById = await JobService.getJobById(params.id);

  return (
    <>
      <JobByIdCard jobById={jobById.data} />
    </>
  );
};

export default JobById;
