import { z } from "zod";

//Jobs request (GET ALL)

const companySchema = z.object({
    name: z.string(),
    entityId: z.string(),
    description: z.string(),
});
const infoSchema = z.object({
    title: z.string(),
    city: z.string().optional(),
    type: z.string().optional(),
});

const jobSchema = z.object({
    info:infoSchema,
    company: companySchema,
    _id: z.string(),
    updated_date: z.string(),
    created_date: z.string(),
    
});

export const jobObject = z.object({
   data: z.array(jobSchema),
   total: z.number(),
   pages: z.number(),
})


export type Job = z.infer<typeof jobSchema>;


//JobID request (GETBYID)

export const jobByIdObject = z.object({
    data: jobSchema,
 })

 export type JobById = z.infer<typeof jobSchema>;
