import Image from "next/image";
import styles from "./page.module.css";
import JobService from "@/api/jobServices";
import JobCard from "./components/jobCard";
import PaginationSection from "./components/pagination";
import { redirect } from "next/navigation";

export default async function Jobs({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  let currentPage = Number(searchParams?.page) || 1;

  const jobs = await JobService.getAllJobs(currentPage);

  if (currentPage > jobs.pages) {
    console.log(jobs.pages)
    redirect(`?page=1`);
  }

  return (
    <main className={styles.main}>
      {jobs.data.length > 0 &&
        jobs.data.map((job, index) => <JobCard key={job._id} job={job} />)}
      {jobs.data.length === 0 && <p>Pas de jobs disponible</p>}
      <PaginationSection totalPages={jobs.pages} />
    </main>
  );
}
