export interface Experience {
  id: string
  title: string
  org: string
  period: string
  location: string
  bullets: string[]
  label?: string
}

export interface Education {
  id: string
  degree: string
  school: string
  gpa: string
  period: string
  location: string
  coursework?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  githubUrl: string
  demoUrl?: string
  proof: {
    problem: string
    built: string
    impact: string
  }
}

export interface SkillGroup {
  id: string
  title: string
  caption: string
  skills: string[]
}

export interface RecruiterRoleProfile {
  id: string
  label: string
  matchingExperience: string
  matchingProjects: string[]
  topSkills: string[]
}

export interface WorkflowStep {
  id: string
  title: string
  description: string
}

export const experiences: Experience[] = [
  {
    id: "iu-psych-data-analyst",
    title: "Data Analyst",
    org: "Indiana University Department of Psychological and Brain Sciences",
    period: "Sep 2025 — Present",
    location: "Bloomington, IN, United States",
    bullets: [
      "Clean and organize research datasets so they are ready for analysis instead of needing manual fixing.",
      "Build dashboards and web-based tools that help researchers select variables, export clean CSVs, and understand their data faster.",
    ],
  },
  {
    id: "kintsugi-ai-ml",
    title: "AI & ML Intern",
    org: "Kintsugi Global",
    period: "Jul 2025 — Dec 2025",
    location: "Remote",
    bullets: [
      "Worked on recommendation and user-data workflows where the goal was to make model output useful for real product behavior.",
      "Cleaned user data, explored patterns, and supported ML workflows used for generating and evaluating recommendations.",
    ],
  },
  {
    id: "project990-research",
    title: "Data Analyst",
    org: "Project 990 Inc.",
    period: "Sep 2024 — Jul 2025",
    location: "Bloomington, IN, United States",
    bullets: [
      "Built a unified data pipeline that combined multiple source files into one clean reporting structure, reducing preprocessing time by approximately 30%.",
      "Cleaned and transformed inconsistent datasets so the data could be used reliably for analysis, reporting, and dashboard development.",
      "Created Power BI-style dashboards to help stakeholders understand patterns, compare results, and make faster decisions.",
    ],
  },
  {
    id: "hudl-data-analyst",
    title: "Data Analyst",
    org: "Hudl",
    period: "Jan 2024 — Jul 2024",
    location: "Mumbai, India",
    bullets: [
      "Reviewed performance datasets using Excel, SQL, and Python to find recurring patterns, missing information, and inconsistent metrics.",
      "Automated recurring analysis reports and helped reduce repeated manual reporting work.",
    ],
  },
  {
    id: "verzeo-ai-engineer",
    title: "Artificial Intelligence Engineer",
    org: "Verzeo",
    period: "Apr 2023 — Aug 2023",
    location: "Bengaluru, India",
    bullets: [
      "Built and tested ML prototypes in Python using NumPy, pandas, and scikit-learn.",
      "Cleaned datasets, improved data quality, tuned model inputs, and tested model outputs before deployment.",
    ],
  },
  {
    id: "tcr-android",
    title: "Android Developer Intern",
    org: "TCR Innovation",
    period: "Aug 2022 — Nov 2022",
    location: "India",
    bullets: [
      "Built and tested Android app features using Kotlin and native Android tools.",
      "Fixed bugs and supported documentation for mobile application development.",
    ],
  },
]

export const teachingExperience: Experience[] = [
  {
    id: "iu-instructor",
    label: "Instructor Support",
    title: "Graduate Associate Instructor - Data Science On Ramp",
    org: "Indiana University Luddy School",
    period: "Aug 2025 — Jan 2026",
    location: "United States",
    bullets: [
      "Supported students across Python, Spark, NLP, Tableau, and web scraping modules.",
      "Helped students debug assignments and understand how each tool fits into a real data workflow.",
    ],
  },
  {
    id: "ta-environment-people",
    label: "Teaching Assistant",
    title: "Environment and People",
    org: "O'Neill School of Public and Environmental Affairs",
    period: "Aug 2025 — Dec 2025",
    location: "United States",
    bullets: [
      "Helped students with assignments, course material, and technical questions related to data and public affairs.",
      "Explained technical ideas in a clear way for students from non-technical backgrounds.",
    ],
  },
]

export const education: Education[] = [
  {
    id: "iu-ms-cs",
    degree: "MS in Computer Science",
    school: "Indiana University Bloomington",
    gpa: "3.75/4",
    period: "Aug 2024 — May 2026",
    location: "Bloomington, IN, United States",
    coursework: [
      "Software Engineering",
      "Applied Machine Learning",
      "Advanced Database Technology",
      "Information Visualization",
      "Applied Algorithms",
      "Computer Networks",
      "Fundamentals of Speech Processing",
    ],
  },
  {
    id: "mumbai-bit",
    degree: "Bachelor in Information Technology",
    school: "University of Mumbai",
    gpa: "3.81/4",
    period: "Aug 2019 — Jun 2023",
    location: "Mumbai, India",
  },
]

export const projects: Project[] = [
  {
    id: "papertrail",
    title: "PaperTrail Study Tool",
    description:
      "A study tool for finding research papers, saving notes, comparing papers, and turning paper ideas into project plans.",
    tech: ["Python", "Streamlit", "OpenAI", "NLP"],
    githubUrl: "https://github.com/ManaliRathod9/papertrail-study-tool.git",
    demoUrl: "https://papertrail-study-tool.streamlit.app/",
    proof: {
      problem: "Research reading was scattered and hard to turn into action.",
      built: "A paper workflow with notes, comparison, and idea planning.",
      impact: "Makes research faster to organize and reuse.",
    },
  },
  {
    id: "ai-water-tracker",
    title: "AI Water Tracker",
    description:
      "An AI-based hydration tracker that gives personalized water intake guidance using local and cloud reasoning.",
    tech: ["Python", "Llama3", "Agentic AI"],
    githubUrl: "https://github.com/ManaliRathod9/AI-Water-Tracker.git",
    proof: {
      problem: "Hydration advice is usually generic and easy to ignore.",
      built: "An AI tracker with more personalized water guidance.",
      impact: "Shows how AI can turn everyday data into useful nudges.",
    },
  },
  {
    id: "bates-iu-tool",
    title: "Bates IU Research Data Tool",
    description: "A research data tool for variable selection, data organization, and clean CSV export.",
    tech: ["React", "JavaScript", "CSV", "Research Data"],
    githubUrl: "https://github.com/ManaliRathod9/bates-iu-research-data-tool.git",
    proof: {
      problem: "Research data was hard to select and export.",
      built: "A variable selection and clean CSV export tool.",
      impact: "Helps researchers prepare usable files faster.",
    },
  },
  {
    id: "balancebite",
    title: "BalanceBite",
    description:
      "A 21-day routine tracker for meals, sleep, stress, focus, and daily patterns.",
    tech: ["React", "JavaScript", "LocalStorage"],
    githubUrl: "https://github.com/ManaliRathod9/balancebite-21-day-routine-reset.git",
    demoUrl: "https://balancebite-21-day-routine-reset.vercel.app/",
    proof: {
      problem: "Daily wellness patterns are hard to notice consistently.",
      built: "A lightweight tracker for routines and habit signals.",
      impact: "Turns small daily inputs into patterns people can use.",
    },
  },
  {
    id: "car-sales-dashboard",
    title: "Car Sales Dashboard",
    description:
      "A Power BI dashboard for analyzing car sales, revenue trends, customer preferences, and vehicle performance.",
    tech: ["Power BI", "DAX", "Data Visualization"],
    githubUrl: "https://github.com/ManaliRathod9/car-sales-dashboard.git",
    proof: {
      problem: "Sales trends were buried across disconnected views.",
      built: "A Power BI dashboard for revenue and customer insights.",
      impact: "Gives decision-makers a faster read on performance.",
    },
  },
  {
    id: "brain-tumor-dashboard",
    title: "Brain Tumor Analytics Dashboard",
    description:
      "A healthcare analytics dashboard for exploring brain tumor data, patient patterns, and key insights.",
    tech: ["Power BI", "Healthcare Data", "Data Visualization"],
    githubUrl: "https://github.com/ManaliRathod9/brain-tumor-analytics-dashboard.git",
    proof: {
      problem: "Clinical data patterns were difficult to review quickly.",
      built: "A dashboard for exploring patient and tumor insights.",
      impact: "Makes healthcare data easier to interpret at a glance.",
    },
  },
]

export const recruiterRoleProfiles: RecruiterRoleProfile[] = [
  {
    id: "data-analyst",
    label: "Data Analyst",
    matchingExperience:
      "Indiana University and Project 990 work focused on cleaning messy datasets, shaping reporting data, and building dashboards people could actually use.",
    matchingProjects: ["Car Sales Dashboard", "Brain Tumor Analytics Dashboard", "Bates IU Research Data Tool"],
    topSkills: ["SQL", "Python", "Data Cleaning", "Power BI", "Dashboards"],
  },
  {
    id: "ai-ml-builder",
    label: "AI/ML Builder",
    matchingExperience:
      "Kintsugi Global and Verzeo work centered on model workflows, user-data patterns, data quality, and making ML output more useful in practice.",
    matchingProjects: ["PaperTrail Study Tool", "AI Water Tracker"],
    topSkills: ["Machine Learning", "Python", "NLP", "Model Evaluation", "LLMs"],
  },
  {
    id: "power-bi-developer",
    label: "Power BI Developer",
    matchingExperience:
      "Project 990 experience included building Power BI-style dashboards from cleaned reporting structures so stakeholders could compare results faster.",
    matchingProjects: ["Car Sales Dashboard", "Brain Tumor Analytics Dashboard"],
    topSkills: ["Power BI", "DAX", "Data Visualization", "KPI Analysis", "Reporting"],
  },
  {
    id: "research-data-tools",
    label: "Research Data Tools",
    matchingExperience:
      "At Indiana University, I build tools and dataset workflows that help researchers choose variables, export clean CSVs, and get analysis-ready files faster.",
    matchingProjects: ["Bates IU Research Data Tool", "PaperTrail Study Tool"],
    topSkills: ["Research Data Cleaning", "Variable Selection", "CSV Processing", "Dataset Preparation", "React"],
  },
  {
    id: "agentic-ai",
    label: "Agentic AI",
    matchingExperience:
      "My recent AI work combines data prep, reasoning workflows, and practical interfaces so AI output is more usable than a simple demo.",
    matchingProjects: ["AI Water Tracker", "PaperTrail Study Tool"],
    topSkills: ["Agentic AI", "AI Agents", "OpenAI API", "Prompt Engineering", "LangChain"],
  },
]

export const workflowSteps: WorkflowStep[] = [
  {
    id: "messy-data",
    title: "Messy Data",
    description: "Start with scattered files, inconsistent labels, or unclear inputs.",
  },
  {
    id: "clean-structure",
    title: "Clean Structure",
    description: "Validate, transform, and shape the data into something reliable.",
  },
  {
    id: "analysis",
    title: "Analysis",
    description: "Look for patterns, edge cases, and what actually matters.",
  },
  {
    id: "dashboard-or-ai-tool",
    title: "Dashboard or AI Tool",
    description: "Turn the output into a dashboard, export tool, or AI workflow.",
  },
  {
    id: "useful-decision",
    title: "Useful Decision",
    description: "End with something a person can trust and act on quickly.",
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-ml-agentic",
    title: "AI, ML and Agentic AI",
    caption:
      "I use these to build models and agents, evaluate them honestly, and turn outputs into something a workflow can actually use.",
    skills: [
      "Python",
      "Machine Learning",
      "NLP",
      "LLMs",
      "RAG",
      "Agentic AI",
      "AI Agents",
      "MLOps",
      "Prompt Engineering",
      "Model Evaluation",
      "Recommendation Systems",
      "LangChain",
      "OpenAI API",
      "Llama3",
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "spaCy",
      "NLTK",
    ],
  },
  {
    id: "data-analytics-bi",
    title: "Data, Analytics and BI",
    caption:
      "I use these to turn messy spreadsheets and datasets into dashboards and answers people can act on.",
    skills: [
      "SQL",
      "Python",
      "SAS",
      "R",
      "MATLAB",
      "Oracle",
      "pandas",
      "NumPy",
      "Excel",
      "Power BI",
      "Tableau",
      "SPSS",
      "Data Cleaning",
      "Data Validation",
      "Data Visualization",
      "Dashboards",
      "Reporting",
      "KPI Analysis",
    ],
  },
  {
    id: "research-data-tools",
    title: "Research Data Tools",
    caption: "I use these to take fragmented research data and make it analysis-ready.",
    skills: [
      "SPSS",
      "CSV Processing",
      "Data Quality Checks",
      "Variable Selection",
      "Research Data Cleaning",
      "Dataset Preparation",
      "Data Export Tools",
      "Research Dashboards",
    ],
  },
  {
    id: "web-product",
    title: "Web and Product Development",
    caption: "I use these to turn a working idea into an app someone can actually open and use.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive UI",
      "FastAPI",
      "Flask",
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "SaaS",
    ],
  },
  {
    id: "databases-cloud-devtools",
    title: "Databases, Cloud and Dev Tools",
    caption: "I use these to store, ship, and keep track of the data and apps behind everything above.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
      "SQLite",
      "Snowflake",
      "Oracle",
      "Docker",
      "Kubernetes",
      "AWS",
      "AWS EC2",
      "AWS S3",
      "Git",
      "GitHub",
      "Postman",
      "Jira",
      "Linux Command Line",
      "Vercel",
      "Streamlit",
    ],
  },
  {
    id: "ai-assisted-dev",
    title: "AI-Assisted Development",
    caption: "I use these day to day to move faster without losing track of what the code is doing.",
    skills: ["Claude Code", "Cursor", "ChatGPT", "GitHub Copilot"],
  },
]

export interface LifeItem {
  id: string
  title: string
  description: string
}

export const lifeItems: LifeItem[] = [
  {
    id: "badminton",
    title: "Badminton",
    description:
      "I like playing badminton because it keeps me active and helps me reset after long work or study days.",
  },
  {
    id: "cooking",
    title: "Cooking",
    description: "I like trying different cuisines and cooking new dishes whenever I get time.",
  },
  {
    id: "travel",
    title: "Travel",
    description:
      "I enjoy traveling, exploring new places, and noticing how food, people, and culture change from place to place.",
  },
  {
    id: "gym",
    title: "Gym",
    description: "Going to the gym helps me stay disciplined, active, and mentally fresh.",
  },
  {
    id: "social-media",
    title: "Social Media",
    description:
      "I like sharing parts of my interests and day-to-day life in a simple and creative way.",
  },
]

export interface ValueProp {
  id: string
  title: string
  description: string
}

export const valueProps: ValueProp[] = [
  {
    id: "messy-data",
    title: "I work well with messy data",
    description:
      "I enjoy cleaning, organizing, and understanding messy datasets so they become easier to use and easier to trust.",
  },
  {
    id: "useful-output",
    title: "I turn analysis into something useful",
    description:
      "I like taking insights beyond analysis and turning them into dashboards, tools, and outputs that people can actually use.",
  },
  {
    id: "ai-and-analytics",
    title: "I can work across data and AI",
    description:
      "My work sits across analytics, dashboards, research tools, machine learning, and Agentic AI projects.",
  },
  {
    id: "learn-by-building",
    title: "I learn by building",
    description:
      "The best way I learn is by building real things, testing them, fixing what breaks, and improving them step by step.",
  },
  {
    id: "practical-thinking",
    title: "I care about practical outcomes",
    description:
      "I do not just focus on whether something works technically. I also care whether it is useful, clear, and easy for others to use.",
  },
]
