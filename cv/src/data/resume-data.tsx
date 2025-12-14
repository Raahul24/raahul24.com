import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Raahul Saravanan",
  initials: "RS",
  location: "Chennai, India",
  about: "DataCamp-certified Data Analyst with Engineering Background",
  summary:
    "DataCamp-certified Data Analyst with an engineering background and 1+ year of co-founder experience in a tech startup, seeking entry-level roles. Skilled in SQL, databases, Python, Power BI, and Excel to design data solutions and translate complex information into clear, actionable insights. Experienced in analyzing customer behavior, building interactive dashboards, and improving product engagement to solve business problems and optimize performance.",
  // avatarUrl: "https://raahulsaravanan.com/profile.jpg",
  avatarUrl: "/raahul24.png",
  personalWebsiteUrl: "https://raahul24.com",
  resumeUrl: "/Raahul_Saravanan_Resume.pdf",
  extendedBio: `
## About Me

I'm a DataCamp-certified Data Analyst with a passion for transforming data into actionable insights. With an engineering background in Electronics and Communication and hands-on experience as a co-founder, I bring a unique blend of technical skills and business acumen to data analysis.

## My Journey

During my time at Licaverse Eco Pvt Ltd, I wore multiple hats - from analyzing user behavior in PostHog to streamlining workflows and growing our community. This experience taught me the value of data-driven decision making in a fast-paced startup environment.

I've completed comprehensive certifications in SQL, Power BI, Excel, and Statistics through DataCamp, along with Google's Data Analytics courses. These have equipped me with the tools to tackle real-world business problems through data.

## What I Do

I specialize in:
- Building interactive dashboards and reports in Power BI
- Writing efficient SQL queries for data analysis
- Performing exploratory data analysis to uncover insights
- Creating data visualizations that tell compelling stories
- Analyzing customer behavior and business metrics

## Let's Connect

I'm actively seeking entry-level Data Analyst roles where I can apply my skills to solve meaningful business problems. Feel free to reach out if you'd like to discuss data, analytics, or potential opportunities!
`,
  contact: {
    email: "raahulsd24@gmail.com",
    // tel: "+91 XXXXXXXXXX",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/raahulsaravanan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raahul-saravanan/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/raahul_saravanan",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Nandha Engineering College",
      degree: "Bachelor of Engineering in Electronics and Communication Engineering (B.E ECE)",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Licaverse Eco Pvt Ltd",
      link: "https://www.licaverse.com",
      badges: ["On Site"],
      title: "Co-founder & Head of Business Ops",
      start: "January 2024",
      end: "March 2025",
      description:
        "Contributed to the Vel Tech TBI incubation program by helping shape and iterate on data-driven product strategies. Acted as the primary student user advocate, sharing insights that led to a 10% improvement in core feature usability. Analyzed beta user behaviour in PostHog, driving a 7% increase in feature engagement. Streamlined internal workflows, accelerating project delivery by 10%, and grew the LinkedIn community to 120+ followers, boosting brand visibility and outreach.",
    },
  ],
  skills: [
    "Data Analysis & Manipulation: SQL (Joins, CTEs, Window Functions, Aggregate Functions, Query Optimization), Python (Pandas, NumPy), Excel (Power Query, XLOOKUP, Pivot Tables, Data Cleaning, Filtering & Sorting)",
    "Data Visualization & Reporting: Power BI (Interactive Dashboards & Reports, DAX, Custom Visuals), Python (Matplotlib, Seaborn), Excel and Google Sheets (Charts & Conditional Formatting)",
    "ETL & Data Processing: Power Query (Power BI & Excel), ELT Processes, Data Transformation & Modeling",
    "Statistical Analysis: Descriptive Statistics (Mean, Median, Mode, Variance, Standard Deviation), Exploratory Data Analysis (EDA), Outlier Detection (Z-score, IQR)",
    "Development Tools: Jupyter Notebook, Git, GitHub",
    "Databases: PostgreSQL, MySQL, MongoDB, Firebase",
  ],
  researchProjects: [],
  open_source: [],
  projects: [
    {
      title: "Telecom Customer Churn Analysis",
      techStack: ["Power BI", "DAX", "Data Modeling", "Spreadsheets"],
      description:
        "Analyzed 6,687 customer records in Power BI to uncover churn patterns, achieving 26.86% identification accuracy and pinpointing month-to-month contracts (46.3%) plus high charges as top drivers. Built interactive churn dashboards by demographics, region, and contract type, enhancing visibility into retention drivers. Delivered targeted, data-driven recommendations to improve customer satisfaction and decision-making.",
      link: {
        label: "github.com",
        href: "https://github.com/raahulsaravanan/telecom-churn-analysis",
      },
    },
    {
      title: "Y Combinator Companies Ecosystem Analysis",
      techStack: ["Power BI", "DAX", "Power Pivot", "Data Modeling"],
      description:
        "Analyzed 5,404 YC-funded startups (2005–Aug 2025) using Power BI, data modeling, DAX, and Power Pivot to uncover industry, regional, and funding success trends. Identified that B2B (49%), Consumer (15%), and Healthcare (11%) sectors dominate the YC ecosystem, alongside a 20% YoY decline in 2025 and 22.9% growth in AI-focused startups. Built interactive dashboards visualizing company survival patterns, acquisition rates, and global funding distributions to support ecosystem-level decision-making.",
      link: {
        label: "github.com",
        href: "https://github.com/raahulsaravanan/yc-ecosystem-analysis",
      },
    },
    {
      title: "Exploratory Data Analysis of Sales Dataset",
      techStack: ["PostgreSQL", "SQL", "DataLab", "Data Analysis"],
      description:
        "Performed end-to-end exploratory data analysis on multi-table sales datasets (25K+ rows) in PostgreSQL to uncover business trends and anomalies. Used SQL joins, aggregations, and window functions to generate KPIs and reveal performance patterns across products, regions, and time. Reviewed schema design and optimized queries to strengthen data accuracy, normalization, and processing efficiency for analytics use.",
      link: {
        label: "github.com",
        href: "https://github.com/raahulsaravanan/sales-eda-sql",
      },
    },
  ],
  extraCurricular: [
    {
      title: "DataCamp Certifications",
      description:
        "Completed comprehensive certifications in SQL Associate, Power BI, Excel, Statistics, EDA, and ChatGPT.",
    },
    {
      title: "Google Certifications",
      description:
        "Earned certifications in Prompting Essentials, AI Essentials, and Data Analytics on Google Cloud (Intro).",
    },
    {
      title: "Microsoft Power Platform",
      description:
        "Achieved Power Up Champ certification for Power Apps development.",
    },
  ],
  publications: [],
  achievements: [],
  blogs: [],
} as const;
