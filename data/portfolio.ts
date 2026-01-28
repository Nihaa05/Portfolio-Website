// Portfolio Data File - Single source of truth for all portfolio content
// Update this file to customize the portfolio

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  lookingFor: string;
  resumeUrl: string;
  profileImage: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProofChip {
  text: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  proficiency: number; // 0-100
  color: string;
}

export interface PipelineStage {
  name: string;
  icon: string;
  description: string;
  tools: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  outcome: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  caseStudy: {
    problem: string;
    approach: string;
    architecture: ArchitectureBlock[];
    results: string[];
    improvements: string[];
  };
}

export interface ArchitectureBlock {
  name: string;
  type: 'source' | 'ingestion' | 'storage' | 'processing' | 'serving' | 'monitoring';
  connections?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  badgeUrl: string;
  description: string;
}

// ========== PERSONAL INFO ==========
export const personalInfo: PersonalInfo = {
  name: "Niharika Pendem",
  title: "Data Engineer | Azure Data Engineer | Power Apps",
  tagline: "I build reliable data pipelines and automation solutions. I focus on practical patterns, clean transformations, and systems that work at scale.",
  email: "niharika.pendem@email.com",
  location: "United States",
  lookingFor: "Data Engineer, Azure Data Engineer, or Power Apps Developer roles where I can build scalable data solutions and drive automation.",
  resumeUrl: "/resume",
  profileImage: "/images/profile.jpg",
};

// ========== SOCIAL LINKS ==========
export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/niharika-pendem",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/niharika-pendem",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:niharika.pendem@email.com",
    icon: "mail",
  },
];

// ========== PROOF CHIPS ==========
export const proofChips: ProofChip[] = [
  {
    text: "Microsoft Certified: Fabric Data Engineer Associate",
    icon: "award",
  },
  {
    text: "ETL + Warehousing",
    icon: "database",
  },
  {
    text: "Power Platform Automation",
    icon: "zap",
  },
];

// ========== SKILLS ==========
export const skillCategories: SkillCategory[] = [
  {
    name: "Azure Data Engineering",
    skills: ["Azure Data Factory", "Synapse Analytics", "ADLS Gen2", "Databricks", "Event Hubs", "Key Vault", "Azure SQL"],
    proficiency: 90,
    color: "#0078D4",
  },
  {
    name: "Microsoft Fabric",
    skills: ["Lakehouse", "Dataflows Gen2", "Pipelines", "Warehouse", "Semantic Models", "OneLake"],
    proficiency: 85,
    color: "#742774",
  },
  {
    name: "Data Engineering",
    skills: ["SQL", "Python", "Apache Spark", "Data Modeling", "ETL/ELT", "Orchestration", "Delta Lake"],
    proficiency: 92,
    color: "#10B981",
  },
  {
    name: "Power Platform",
    skills: ["Power Apps", "Power Automate", "Dataverse", "SharePoint Integration", "Canvas Apps", "Model-Driven Apps"],
    proficiency: 80,
    color: "#742774",
  },
  {
    name: "DevOps & Quality",
    skills: ["Git/GitHub", "CI/CD Basics", "Testing Mindset", "Logging", "Monitoring", "Documentation"],
    proficiency: 75,
    color: "#F59E0B",
  },
  {
    name: "Visualization",
    skills: ["Power BI", "DAX Basics", "Report Design"],
    proficiency: 65,
    color: "#EF4444",
  },
];

// ========== DATA ENGINEER PIPELINE ==========
export const pipelineStages: PipelineStage[] = [
  {
    name: "Source",
    icon: "database",
    description: "Connect to diverse data sources",
    tools: ["APIs", "Databases", "Files", "Event Streams", "SaaS Connectors"],
  },
  {
    name: "Ingest",
    icon: "download",
    description: "Reliable data ingestion patterns",
    tools: ["ADF Pipelines", "Event Hubs", "Dataflows Gen2", "Batch & Streaming"],
  },
  {
    name: "Transform",
    icon: "shuffle",
    description: "Clean, validate, and enrich data",
    tools: ["Spark/Python", "SQL Transformations", "Data Quality Checks", "Medallion Architecture"],
  },
  {
    name: "Model",
    icon: "layers",
    description: "Design efficient data models",
    tools: ["Star Schema", "Dimensional Modeling", "Semantic Layers", "Delta Tables"],
  },
  {
    name: "Serve",
    icon: "share-2",
    description: "Deliver data to consumers",
    tools: ["Synapse Serverless", "Lakehouse SQL", "Power BI", "APIs"],
  },
  {
    name: "Monitor",
    icon: "activity",
    description: "Ensure reliability and performance",
    tools: ["Pipeline Alerts", "Data Quality SLAs", "Cost Monitoring", "Lineage Tracking"],
  },
];

// ========== EXPERIENCE ==========
export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Data Engineer",
    company: "State of Nevada",
    location: "Carson City, NV, USA",
    startDate: "Jul 2025",
    endDate: "Present",
    highlights: [
      "Architect and maintain enterprise data pipelines processing 50M+ records daily using Azure Data Factory and Synapse Analytics",
      "Lead migration of legacy data warehouse to Microsoft Fabric Lakehouse, reducing query times by 60%",
      "Implement medallion architecture (Bronze/Silver/Gold) for improved data quality and governance",
      "Collaborate with cross-functional teams to define data contracts and SLAs for critical state reporting",
      "Develop Power BI dashboards enabling real-time decision-making for department leadership",
    ],
  },
  {
    id: "exp-2",
    role: "Data Engineer (Graduate Assistant)",
    company: "Texas A&M University",
    location: "Corpus Christi, TX, USA",
    startDate: "May 2024",
    endDate: "May 2025",
    highlights: [
      "Built automated ETL pipelines for research data using Python, SQL, and Azure Data Factory",
      "Designed and implemented data quality framework catching 95% of data issues before production",
      "Created Power Apps solution for research project tracking, reducing manual data entry by 40%",
      "Developed reusable Spark notebooks for large-scale oceanographic data processing",
      "Mentored undergraduate students on data engineering best practices and version control",
    ],
  },
  {
    id: "exp-3",
    role: "Application Development Analyst",
    company: "Accenture Plc",
    location: "India",
    startDate: "Aug 2021",
    endDate: "Jul 2023",
    highlights: [
      "Delivered 10+ enterprise applications using Power Platform, reducing client operational costs by 30%",
      "Built end-to-end Power Automate workflows integrating Dataverse, SharePoint, and external APIs",
      "Led technical design sessions and code reviews ensuring consistent quality across team deliverables",
      "Optimized SQL queries and stored procedures, improving application performance by 45%",
      "Received 'Star Performer' recognition for consistent delivery excellence and client satisfaction",
    ],
  },
];

// ========== PROJECTS ==========
export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "fabric-lakehouse-modernization",
    title: "Fabric Lakehouse Modernization for Operational Analytics",
    shortDescription: "Unified disparate datasets into a modern Lakehouse architecture for real-time operational insights.",
    outcome: "Unified 15+ datasets, reduced refresh time by 70%, improved data reliability from 85% to 99.5%",
    tags: ["Fabric", "Lakehouse", "Dataflows Gen2", "SQL", "Power BI"],
    githubUrl: "https://github.com/placeholder/fabric-lakehouse-project",
    demoUrl: "https://example.com/demo/fabric-lakehouse",
    caseStudy: {
      problem: "The organization had 15+ siloed data sources across different departments, leading to inconsistent reporting, duplicate data maintenance efforts, and 4+ hour refresh times for critical dashboards. Business users lacked trust in the data due to frequent discrepancies.",
      approach: "Designed a Microsoft Fabric Lakehouse solution implementing medallion architecture. Used Dataflows Gen2 for incremental data ingestion, implemented data quality checkpoints at each layer, and created a unified semantic model for consistent business definitions.",
      architecture: [
        { name: "Source Systems", type: "source", connections: ["Dataflows Gen2"] },
        { name: "Dataflows Gen2", type: "ingestion", connections: ["Bronze Layer"] },
        { name: "Bronze Layer", type: "storage", connections: ["Silver Layer"] },
        { name: "Silver Layer", type: "processing", connections: ["Gold Layer"] },
        { name: "Gold Layer", type: "storage", connections: ["Semantic Model"] },
        { name: "Semantic Model", type: "serving", connections: ["Power BI Reports"] },
        { name: "Power BI Reports", type: "serving" },
      ],
      results: [
        "Reduced data refresh time from 4+ hours to 45 minutes (70% improvement)",
        "Achieved 99.5% data reliability (up from 85%)",
        "Eliminated 80% of duplicate data maintenance efforts",
        "Enabled self-service analytics for 50+ business users",
      ],
      improvements: [
        "Implement real-time streaming for time-sensitive metrics",
        "Add ML-powered anomaly detection for data quality",
        "Expand semantic model to include predictive analytics",
      ],
    },
  },
  {
    id: "proj-2",
    slug: "azure-etl-orchestration",
    title: "Azure ETL Orchestration with ADF + Synapse (Medallion Architecture)",
    shortDescription: "Automated end-to-end data pipeline with medallion architecture for enterprise analytics.",
    outcome: "Automated ingestion of 100+ tables, reduced manual work by 90%, implemented smart partitioning",
    tags: ["ADF", "Synapse", "ADLS Gen2", "SQL", "Python"],
    githubUrl: "https://github.com/placeholder/adf-synapse-etl",
    demoUrl: "https://example.com/demo/adf-synapse",
    caseStudy: {
      problem: "Legacy ETL processes were manual, error-prone, and took 8+ hours daily. Data engineers spent 60% of time on maintenance rather than new development. Lack of proper partitioning caused slow query performance and high storage costs.",
      approach: "Built a modular ADF pipeline framework with parameterized datasets and linked services. Implemented medallion architecture in ADLS Gen2 with proper partitioning strategy. Used Synapse Serverless for ad-hoc queries and Dedicated SQL Pool for curated datasets.",
      architecture: [
        { name: "On-Prem DB", type: "source", connections: ["Self-Hosted IR"] },
        { name: "Cloud APIs", type: "source", connections: ["ADF Pipelines"] },
        { name: "Self-Hosted IR", type: "ingestion", connections: ["ADF Pipelines"] },
        { name: "ADF Pipelines", type: "ingestion", connections: ["ADLS Gen2 Bronze"] },
        { name: "ADLS Gen2 Bronze", type: "storage", connections: ["Synapse Notebooks"] },
        { name: "Synapse Notebooks", type: "processing", connections: ["ADLS Gen2 Silver"] },
        { name: "ADLS Gen2 Silver", type: "storage", connections: ["Synapse SQL"] },
        { name: "Synapse SQL", type: "serving" },
      ],
      results: [
        "Reduced daily ETL runtime from 8 hours to 45 minutes",
        "Automated ingestion for 100+ tables with zero manual intervention",
        "Decreased storage costs by 40% through smart partitioning",
        "Freed up 60% of engineering time for new development",
      ],
      improvements: [
        "Add data lineage tracking with Purview integration",
        "Implement CDC for real-time incremental loads",
        "Build self-service data quality dashboard",
      ],
    },
  },
  {
    id: "proj-3",
    slug: "realtime-stream-processing",
    title: "Real-Time Stream Processing on Azure (Event Hubs → Spark → Delta)",
    shortDescription: "Near real-time metrics pipeline with streaming analytics and alerting.",
    outcome: "Achieved <5 minute data latency, enabled real-time dashboards, reduced incident response by 60%",
    tags: ["Event Hubs", "Databricks", "Spark", "Delta", "Monitoring"],
    githubUrl: "https://github.com/placeholder/realtime-streaming",
    demoUrl: "https://example.com/demo/streaming",
    caseStudy: {
      problem: "Business-critical metrics had 2+ hour delays due to batch processing. Operations team couldn't respond to incidents in real-time, leading to SLA breaches and customer complaints. No automated alerting system existed.",
      approach: "Implemented streaming architecture using Event Hubs for ingestion, Structured Streaming in Databricks for processing, and Delta Lake for storage with ACID transactions. Built alerting logic within the stream processing layer.",
      architecture: [
        { name: "IoT Devices", type: "source", connections: ["Event Hubs"] },
        { name: "Application Logs", type: "source", connections: ["Event Hubs"] },
        { name: "Event Hubs", type: "ingestion", connections: ["Databricks Streaming"] },
        { name: "Databricks Streaming", type: "processing", connections: ["Delta Lake", "Alert Service"] },
        { name: "Delta Lake", type: "storage", connections: ["Synapse Serverless"] },
        { name: "Alert Service", type: "monitoring" },
        { name: "Synapse Serverless", type: "serving" },
      ],
      results: [
        "Reduced data latency from 2+ hours to under 5 minutes",
        "Enabled real-time operational dashboards for 3 departments",
        "Decreased incident response time by 60%",
        "Achieved 99.9% stream processing uptime",
      ],
      improvements: [
        "Add ML-based anomaly detection in stream",
        "Implement backpressure handling for spike scenarios",
        "Build replay capability for historical analysis",
      ],
    },
  },
  {
    id: "proj-4",
    slug: "power-apps-case-management",
    title: "Power Apps + Dataverse Case Management App (End-to-End Workflow)",
    shortDescription: "Full-featured case management system with automated workflows and approvals.",
    outcome: "Reduced manual work by 65%, enforced data validation, automated 100% of approval workflows",
    tags: ["Power Apps", "Dataverse", "Power Automate", "SharePoint"],
    githubUrl: "https://github.com/placeholder/power-apps-case-mgmt",
    demoUrl: "https://example.com/demo/case-management",
    caseStudy: {
      problem: "Case management was handled via spreadsheets and email, leading to lost cases, inconsistent data, and no visibility into case status. Approvals took 5+ days on average due to manual routing.",
      approach: "Built a model-driven Power App on Dataverse with proper data validation, business rules, and role-based security. Implemented Power Automate flows for multi-level approvals, notifications, and SLA tracking. Integrated with SharePoint for document management.",
      architecture: [
        { name: "Power Apps UI", type: "source", connections: ["Dataverse"] },
        { name: "Dataverse", type: "storage", connections: ["Power Automate", "SharePoint"] },
        { name: "Power Automate", type: "processing", connections: ["Approvers", "Notifications"] },
        { name: "SharePoint", type: "storage", connections: ["Document Library"] },
        { name: "Approvers", type: "serving" },
        { name: "Notifications", type: "monitoring" },
        { name: "Document Library", type: "storage" },
      ],
      results: [
        "Reduced manual data entry by 65%",
        "Decreased average approval time from 5 days to 8 hours",
        "Achieved 100% workflow automation for standard cases",
        "Zero lost cases since implementation",
      ],
      improvements: [
        "Add AI Builder for intelligent case routing",
        "Implement customer self-service portal",
        "Build predictive SLA breach alerts",
      ],
    },
  },
  {
    id: "proj-5",
    slug: "data-quality-framework",
    title: "Data Quality Framework in Python (Checks + Logs + SLAs)",
    shortDescription: "Reusable framework for data validation, quality scoring, and SLA monitoring.",
    outcome: "Prevented 95% of bad data loads, generated automated quality scorecards, reduced debugging time by 70%",
    tags: ["Python", "Great Expectations", "CI/CD", "Reporting"],
    githubUrl: "https://github.com/placeholder/data-quality-framework",
    demoUrl: "https://example.com/demo/data-quality",
    caseStudy: {
      problem: "Bad data regularly made it to production, causing report failures and eroding user trust. Data engineers spent 30% of time debugging data issues with no systematic approach to identify root causes.",
      approach: "Built a Python framework inspired by Great Expectations patterns. Implemented schema validation, null checks, referential integrity tests, and statistical anomaly detection. Created automated quality scorecards and integrated with CI/CD for pre-deployment checks.",
      architecture: [
        { name: "Source Data", type: "source", connections: ["Validation Engine"] },
        { name: "Validation Engine", type: "processing", connections: ["Pass", "Fail"] },
        { name: "Pass", type: "serving", connections: ["Target Tables"] },
        { name: "Fail", type: "monitoring", connections: ["Alert + Log"] },
        { name: "Target Tables", type: "storage" },
        { name: "Alert + Log", type: "monitoring", connections: ["Quality Scorecard"] },
        { name: "Quality Scorecard", type: "serving" },
      ],
      results: [
        "Prevented 95% of bad data from reaching production",
        "Reduced debugging time by 70% with detailed error logs",
        "Achieved consistent quality SLA of 99%+ across all datasets",
        "Enabled proactive issue detection before business impact",
      ],
      improvements: [
        "Add ML-based data profiling for automatic rule generation",
        "Implement data lineage integration",
        "Build self-healing capabilities for common issues",
      ],
    },
  },
  {
    id: "proj-6",
    slug: "azure-cost-optimization",
    title: "Cost & Performance Tuning Playbook for Azure Data Pipelines",
    shortDescription: "Best practices implementation for optimizing Azure data pipeline costs and performance.",
    outcome: "Reduced monthly Azure costs by 45%, improved pipeline performance by 60%, documented reusable patterns",
    tags: ["Azure", "Optimization", "Partitioning", "Best Practices"],
    githubUrl: "https://github.com/placeholder/azure-optimization",
    demoUrl: "https://example.com/demo/optimization",
    caseStudy: {
      problem: "Azure data platform costs were growing 20% monthly with no visibility into cost drivers. Pipeline runtimes varied unpredictably, and there were no established patterns for new development.",
      approach: "Conducted comprehensive audit of all Azure data resources. Implemented proper partitioning strategies, right-sized compute resources, optimized Spark configurations, and established caching patterns. Created documented playbook for team adoption.",
      architecture: [
        { name: "Cost Analysis", type: "monitoring", connections: ["Recommendations"] },
        { name: "Recommendations", type: "processing", connections: ["Compute Sizing", "Partitioning", "Caching"] },
        { name: "Compute Sizing", type: "processing", connections: ["Optimized Pipelines"] },
        { name: "Partitioning", type: "processing", connections: ["Optimized Pipelines"] },
        { name: "Caching", type: "processing", connections: ["Optimized Pipelines"] },
        { name: "Optimized Pipelines", type: "serving", connections: ["Cost Dashboard"] },
        { name: "Cost Dashboard", type: "monitoring" },
      ],
      results: [
        "Reduced monthly Azure costs by 45% ($15K/month savings)",
        "Improved average pipeline performance by 60%",
        "Created reusable optimization playbook adopted by 3 teams",
        "Established cost governance process preventing future bloat",
      ],
      improvements: [
        "Implement automated cost anomaly detection",
        "Add auto-scaling policies based on workload patterns",
        "Build cost forecasting model",
      ],
    },
  },
];

// ========== CERTIFICATIONS ==========
export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Microsoft Certified: Fabric Data Engineer Associate",
    issuer: "Microsoft",
    date: "2024",
    badgeUrl: "/images/fabric-badge.png",
    description: "Validates expertise in designing and implementing enterprise-scale data solutions using Microsoft Fabric. Demonstrates practical skills in Lakehouse architecture, data pipelines, and modern data engineering patterns.",
  },
];

// ========== ABOUT SECTION ==========
export const aboutContent = {
  intro: "I'm a Data Engineer who believes the best solutions are the ones that just work—reliably, efficiently, and without constant firefighting.",
  paragraphs: [
    "My focus is on building data pipelines and automation systems that teams can trust. I've worked across the Azure data stack (ADF, Synapse, Databricks, Fabric) and the Power Platform, always prioritizing practical patterns over complexity for its own sake.",
    "What drives me: clean transformations, proper testing, and systems designed for the engineers who'll maintain them next. I document what I build and optimize for clarity.",
    "Currently exploring: streaming architectures, Fabric's unified analytics capabilities, and ways to make data quality less of an afterthought.",
  ],
};

// ========== NAV ITEMS ==========
export const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

// ========== FILTER TAGS FOR PROJECTS ==========
export const projectFilterTags = [
  "All",
  "Azure",
  "Fabric",
  "Power Apps",
  "ETL",
  "Streaming",
  "Analytics",
];
