interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    title: "Intern",
    company: "Principal Global Services",
    location: "Hyderabad, India",
    period: "January 2026 - May 2026",
    type: "Internship",
    description: [
      "Developed the Process in the development environment using Python and AWS cloud services.",
      "Implemented Infrastructure as Code (IaC) using AWS SAM templates to create and manage cloud resources",
      "Designed AWS Step Functions and Lambda functions to automate workflow execution and business logic processing",
      "Built an ETL process to transform raw input files received from external vendors and store processed outputs in Amazon S3"
    ],
    technologies: ["Python", "AWS", "Git"]
  },
];
