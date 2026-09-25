export interface Experience {
  id: string
  title: string
  org: string
  period: string
  location?: string
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
    id: "databricks-ai-pm",
    title: "AI Product Manager",
    org: "Databricks",
    period: "Jan 2026 - Present",
    bullets: [
      "Increased Agent Bricks adoption by 18% across 20+ enterprise engagements by owning product strategy, PRDs, customer discovery, and roadmap prioritization for RAG, agent orchestration, evals, and governance.",
      "Expanded governed AI into 8+ production workflows by defining user journeys, requirements, and acceptance criteria for Knowledge Assistant, Supervisor Agent, MCP integrations, and Unity Catalog controls.",
      "Improved GenAI release quality by 15% by establishing MLflow evals and KPIs for groundedness, relevance, hallucination, and human feedback, then turning failures into prioritized model and retrieval improvements.",
      "Drive latency and cost trade-offs across model selection, context size, token usage, and retrieval quality toward sub-3-second response targets.",
    ],
  },
  {
    id: "informative-web-pm",
    title: "Product Manager",
    org: "Informative Web Solutions",
    period: "Oct 2022 - Jul 2024",
    bullets: [
      "Delivered features 22% faster by owning the roadmap, backlog prioritization, user stories, and sprint planning in Jira across engineering, design, and QA.",
      "Improved checkout and onboarding completion by 18% through customer discovery, product analytics, A/B testing, journey mapping, and Figma prototypes.",
      "Directed 10+ client initiatives across web, mobile, CRM, and e-commerce, from discovery and requirements through launch and post-release optimization.",
    ],
  },
  {
    id: "infinite-infolab-mle",
    title: "Machine Learning Engineer",
    org: "Infinite Infolab",
    period: "Feb 2021 - Sep 2022",
    bullets: [
      "Improved prediction accuracy by 14% with classification and regression models built in Python, scikit-learn, XGBoost, and pandas on structured client datasets.",
      "Cut model training time by 25% through feature selection, hyperparameter tuning, cross-validation, and MLflow experiment tracking.",
      "Deployed models as Flask REST APIs in Docker, integrating inference into client applications and serving 10K+ monthly prediction requests.",
      "Automated data preparation and retraining workflows with Python, SQL, Airflow, and AWS, processing 500K+ records per cycle.",
    ],
  },
]

export const teachingExperience: Experience[] = [
  {
    id: "iu-research-data",
    label: "Research Data",
    title: "Data Analyst",
    org: "Indiana University Bloomington",
    period: "Oct 2025 - Present",
    bullets: [
      "Build Python ETL workflows and quality checks that turn messy experiment files into analysis-ready datasets.",
      "Built a variable-selection workflow with researchers for clean CSV exports used in SPSS and Excel.",
    ],
  },
  {
    id: "iu-instructor",
    label: "Instructor Support",
    title: "Graduate Associate Instructor - Data Science On Ramp",
    org: "Indiana University Luddy School",
    period: "Aug 2025 - Jan 2026",
    bullets: [
      "Supported students across Python, Spark, NLP, Tableau, and web scraping modules.",
      "Helped students debug assignments and see how each tool fits into a real data workflow.",
    ],
  },
  {
    id: "ta-environment-people",
    label: "Teaching Assistant",
    title: "Environment and People",
    org: "O'Neill School of Public and Environmental Affairs",
    period: "Aug 2025 - Dec 2025",
    bullets: [
      "Explained technical ideas clearly for students from non-technical backgrounds.",
    ],
  },
]

export const education: Education[] = [
  {
    id: "iu-ms-cs",
    degree: "MS in Computer Science",
    school: "Indiana University Bloomington",
    gpa: "3.75/4",
    period: "Aug 2024 - May 2026",
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
    period: "Aug 2019 - Jun 2023",
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
    id: "find-use-case",
    title: "Find the real use case",
    description: "Talk to users and define the job the AI needs to do.",
  },
  {
    id: "choose-approach",
    title: "Choose the approach",
    description:
      "Decide whether a model, RAG system, agent, or simpler solution fits, and what success means.",
  },
  {
    id: "build-into-workflow",
    title: "Build it into the workflow",
    description: "Connect the AI to the product, APIs, and people who will actually use it.",
  },
  {
    id: "push-past-demo",
    title: "Push past the demo",
    description: "Test answer quality, failure cases, speed, safeguards, and cost.",
  },
  {
    id: "ship-learn-improve",
    title: "Ship, learn, improve",
    description: "Watch how it performs in use, listen to feedback, and decide what to improve next.",
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-product-delivery",
    title: "AI Product, Discovery and Delivery",
    caption: "Working out which customer problem is worth solving, then getting it shipped.",
    skills: [
      "Product Strategy",
      "Customer Discovery",
      "PRDs",
      "Roadmap Prioritization",
      "Product Analytics",
      "A/B Testing",
      "User Stories",
      "Go-to-Market",
      "Launch Management",
      "Stakeholder Management",
      "Agile",
      "Jira",
      "Figma",
    ],
  },
  {
    id: "genai-agents-eval",
    title: "GenAI, RAG, Agents and Evaluation",
    caption: "Building LLM systems and checking that they are grounded, governed, and worth the cost.",
    skills: [
      "RAG",
      "Agent Orchestration",
      "AI Evaluation",
      "MCP",
      "AI Governance",
      "Groundedness and Hallucination Evals",
      "Human-in-the-Loop",
      "Retrieval Optimization",
      "Model Selection",
      "Token and Inference Cost",
      "Unity Catalog",
      "LangChain",
      "OpenAI API",
    ],
  },
  {
    id: "ml-mlops",
    title: "Machine Learning, Deployment and MLOps",
    caption: "Training models, measuring them properly, and serving them behind real APIs.",
    skills: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "MLflow",
      "Feature Engineering",
      "Classification and Regression",
      "Hyperparameter Tuning",
      "Cross-Validation",
      "Model Deployment",
      "Model Retraining",
      "Real-Time Inference",
      "Flask",
      "Docker",
      "PyTorch",
    ],
  },
  {
    id: "data-eng-cloud",
    title: "Data Engineering, Pipelines and Cloud",
    caption: "Moving and cleaning the data that models and products depend on.",
    skills: [
      "SQL",
      "Apache Airflow",
      "AWS",
      "ETL Pipelines",
      "REST APIs",
      "pandas",
      "Data Validation",
      "Snowflake",
      "PostgreSQL",
      "MongoDB",
      "Kubernetes",
      "Git",
    ],
  },
]

/** Smaller cards shown after the four core groups. Each skill appears only once across both lists. */
export const supportingSkillGroups: SkillGroup[] = [
  {
    id: "databases-dev-tools",
    title: "Databases, Cloud and Dev Tools",
    caption: "Storing, testing, and shipping the data and apps behind the work.",
    skills: [
      "MySQL",
      "SQLite",
      "Oracle",
      "Firebase",
      "AWS EC2",
      "AWS S3",
      "GitHub",
      "Postman",
      "Linux Command Line",
      "Vercel",
      "Streamlit",
    ],
  },
  {
    id: "analytics-bi",
    title: "Data, Analytics and BI",
    caption: "Turning cleaned data into dashboards and answers people can act on.",
    skills: [
      "Power BI",
      "Tableau",
      "Excel",
      "NumPy",
      "R",
      "SAS",
      "MATLAB",
      "Data Cleaning",
      "Data Visualization",
      "Dashboards",
      "Reporting",
      "KPI Analysis",
    ],
  },
  {
    id: "web-product",
    title: "Web and Product Development",
    caption: "Turning a working idea into an app someone can open and use.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "FastAPI",
      "Spring Boot",
      "HTML",
      "CSS",
      "Responsive UI",
      "SaaS",
    ],
  },
  {
    id: "research-data-tools",
    title: "Research Data Tools",
    caption: "Taking fragmented research data and making it analysis-ready.",
    skills: [
      "SPSS",
      "Research Data Cleaning",
      "Data Quality Checks",
      "Variable Selection",
      "Dataset Preparation",
      "CSV Processing",
      "Data Export Tools",
      "Research Dashboards",
    ],
  },
  {
    id: "ai-assisted-dev",
    title: "AI-Assisted Development",
    caption: "Tools I use day to day to move faster without losing track of the code.",
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
      "Badminton keeps me active and helps me reset after a long day of work or study.",
  },
  {
    id: "cooking",
    title: "Cooking",
    description: "I like trying different cuisines and cooking something new when I have the time.",
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
      "I share bits of my interests and everyday life, keeping it simple and creative.",
  },
]
