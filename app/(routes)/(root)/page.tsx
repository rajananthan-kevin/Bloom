import styles from "./page.module.css";
import JobService from "@/api/jobServices";
import JobCard from "./components/jobCard";
import PaginationSection from "./components/pagination";
import { redirect } from "next/navigation";
import { JobObject } from "@/type/jobGlobal";
import SearchBar from "./components/searchBar";

export default async function Jobs({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    job?: string;
    location?: string;
  };
}) {
  let currentPage = Number(searchParams?.page) || 1;
  let job = searchParams?.job || "";
  let location = searchParams?.location || "";
  let isJobOrLocationParams = location != "" || location != "" ? true : false;
  const jobs = await JobService.getAllJobs({ currentPage, job, location });

  if (currentPage > (jobs.pages || 1)) {
    console.log(jobs.pages);
    redirect(`?page=1`);
  }

  return (
    <>
      <div className={styles.jobSection}>
        <SearchBar />
        <JobList jobs={jobs} />
        {!isJobOrLocationParams && (
          <PaginationSection totalPages={jobs.pages} />
        )}
      </div>
    </>
  );
}

function JobList({ jobs }: { jobs: JobObject }) {
  return (
    <>
      <div className={styles.textContainer}>
        <p>{jobs.total} postes</p>
        <p>Offres Bloom</p>
      </div>
      {jobs.data.length > 0 &&
        jobs.data.map((job, index) => <JobCard key={job._id} job={job} />)}
      {jobs.data.length === 0 && <p>Pas de jobs disponible</p>}
    </>
  );
}
