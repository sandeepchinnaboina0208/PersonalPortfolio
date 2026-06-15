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
    title: "Full Stack Developer Intern",
    company: "Tech Solutions Pvt Ltd",
    location: "Hyderabad, India",
    period: "May 2024 - July 2024",
    type: "Internship",
    description: [
      "Developed and maintained web applications using React.js and Node.js",
      "Collaborated with the design team to implement responsive UI components",
      "Participated in code reviews and contributed to improving code quality",
      "Worked on RESTful API development and database optimization"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Git"]
  },
  {
    title: "Web Development Intern",
    company: "StartupHub",
    location: "Remote",
    period: "Jan 2024 - Apr 2024",
    type: "Internship",
    description: [
      "Built responsive landing pages and dashboard interfaces",
      "Implemented user authentication and authorization features",
      "Optimized website performance and improved loading times by 40%",
      "Collaborated with cross-functional teams in an Agile environment"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"]
  },
  {
    title: " freelance Web Developer",
    company: "Self-Employed",
    location: "Nellore, India",
    period: "2023 - Present",
    type: "Freelance",
    description: [
      "Designed and developed websites for local businesses",
      "Created e-commerce solutions with payment integration",
      "Provided ongoing maintenance and support services",
      "Managed client relationships and project deliverables"
    ],
    technologies: ["React", "Django", "PostgreSQL", "Tailwind CSS"]
  }
];
