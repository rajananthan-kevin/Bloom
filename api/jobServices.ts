import { jobObject, jobByIdObject } from "@/type/jobGlobal";

const JobService = {
    async getAllJobs(currentPage: number) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers/public?page=${currentPage}&limit=10`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
        });
        const jobs = await res.json();
        const parsedJobs = jobObject.parse(jobs);
        return parsedJobs;
    },

    async getJobById(id: string) {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers/single?offerId=${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
        });
        const jobById = await res.json();
        const parsedJobById = jobByIdObject.parse(jobById);
        return parsedJobById;
    },
}

export default JobService;
