import { jobObject, jobByIdObject } from "@/type/jobGlobal";

const JobService = {
  async getAllJobs({
    currentPage,
    job,
    location,
  }: {
    currentPage: number;
    job: string;
    location: string;
  }) {
    let isLimit = job !== "" || location !== "" ? false : true;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/offers/public?page=${currentPage}${
        isLimit ? "&limit=10" : ""
      }`
    );
    const jobs = await res.json();
    let parsedJobs = jobObject.parse(jobs);
    const { data } = parsedJobs;
    if (data.length === 0) {
      return parsedJobs;
    }
    const filterArrayWithParams = data.filter((jobValue) => {
      if (
        job !== "" &&
        location !== "" &&
        jobValue.info.title &&
        jobValue.info.city
      ) {
        return (
          jobValue.info.title.toLowerCase().includes(job.toLowerCase()) &&
          jobValue.info.city.toLowerCase().includes(location.toLowerCase())
        );
      } else if (job !== "" && jobValue.info.title) {
        return jobValue.info.title.toLowerCase().includes(job.toLowerCase());
      } else if (location !== "" && jobValue.info.city) {
        return jobValue.info.city
          .toLowerCase()
          .includes(location.toLowerCase());
      }
      return jobValue;
    });

    parsedJobs = { ...parsedJobs, data: filterArrayWithParams };
    return parsedJobs;
  },

  async getJobById(id: string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/offers/single?offerId=${id}`
    );
    const jobById = await res.json();
    const parsedJobById = jobByIdObject.parse(jobById);
    return parsedJobById;
  },
};

export default JobService;
