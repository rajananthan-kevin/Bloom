This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Job Listing Display Project

## Introduction
This project is a web application built with Next.js, designed to display job listings on one page and show the details of a specific job on another page. This project uses Next.js's AppRouter for navigation between pages.

## Project Structure
The project is organized as follows:

- **api/**
  - **jobServices.ts**: Contains all API calls.

- **app/routes/**
  - **root/**: Main page displaying the list of job offers and the components used on the page.
  - **job/**: Detail page displaying information about a specific job offer and the components used on the page.
  - **redux**: Example of Redux setup.
  - **layout.tsx**: Layout applied throughout the project.
  - **loading.tsx**: Loading component applied throughout the project.
  - **not-found.tsx**: 404 page.

- **components/**: Components used on multiple pages of the project.

- **public/**: Contains static files like images and styles.

- **lib/**: Various functions used in the project.

- **styles/**: Contains CSS style files.

- **redux/**: Redux configuration.

- **.env**: Environment variables.

## Thought Process

### Before Development
Before starting development, I defined the key features of the application:
- Display a list of job offers, with pagination and the ability to search for a job.
- Allow clicking on a job offer to see the details.
- Use Next.js routing features for navigation between pages.

### During Development
During development, I followed these steps:
- Created a **routes** folder containing a route for the job listing page and another route (the **job** folder) for viewing a specific job.
- Passed data via the URL: I chose not to use Redux for state management. Data is passed via the URL (the job offer ID), simplifying information sharing between pages.

### After Development
After completing development, I performed the following tests:
- Navigation tests: Verified that you can correctly navigate between the job list and the details of a job, and also view them.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
