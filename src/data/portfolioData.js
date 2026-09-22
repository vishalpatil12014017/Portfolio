import Traveltech from '../img/blogs/Traveltech.png';
import zoomcar from '../img/blogs/zoomcar.png';
import Discovery from '../img/blogs/3.png';
import SQL from '../img/blogs/sql.jpeg';
import InbuiltFeatures from '../img/blogs/mysql.jpeg';
import mysqlPartition from '../img/blogs/mysqlPartition.png';
import mysqlTransactions from '../img/blogs/mysqlTransactions.jpeg';
import mysqlStoredProceduresAndFunctions from '../img/blogs/mysqlStoredProceduresAndFunctions.png';
import mysqlTriggers from '../img/blogs/mysqlTriggers.jpeg';
import mysqlReplication from '../img/blogs/mysqlReplication.jpeg';

import p1 from '../img/portImages/1.png';
import p2 from '../img/portImages/2.png';
import p3 from '../img/portImages/3.png';

export const personalDetails = {
  name: "Vishal Patil",
  title: "Lead Software Engineer",
  tagline: "Software Engineer | Node.js | Backend & AI Systems",
  location: "Pune, India (Open to Relocation)",
  email: "patil120140@gmail.com",
  phone: "+91 797 231 8018",
  phoneRaw: "+917972318018",
  whatsappUrl: "https://wa.me/917972318018?text=Hi%20Vishal,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!",
  callUrl: "tel:+917972318018",
  linkedin: "https://linkedin.com/in/vishal-patil17",
  github: "https://github.com/vishalpatil12014017",
  medium: "https://medium.com/@Vishal_Patil",
  resumeUrl: `${process.env.PUBLIC_URL || ""}/Vishal_Patil.pdf`,
  summary:
    "Performance-driven Software Engineer with 4+ years of experience architecting scalable backend systems, AI-powered automation, and microservices for high-growth healthcare-tech platforms. Deep expertise in Node.js, MySQL, and AWS, spanning enterprise API gateway design, real-time conversational voice AI, multi-provider IVR systems, and payment orchestration — with a consistent record of delivering high-uptime, high-scale production systems.",
  status: "Available for Lead Backend & AI Engineering Roles",
};

export const keyAchievements = [
  {
    metric: "738+",
    sub: "Endpoints / 19 Microservices",
    label: "API Gateway Scale",
    desc: "Central gateway handling EHR, Scheduler, Payment, CMS, VMS with JWT & RBAC covering 20+ user roles.",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },
  {
    metric: "36% → 72%",
    sub: "+36% Pickup Surge",
    label: "Call Pickup Rate",
    desc: "Engineered outbound dialer platform with slot-based calling, campaign queues, and DNP lifecycle management.",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  },
  {
    metric: "85%",
    sub: "Automation Reduction",
    label: "Finance Workload Reduced",
    desc: "Streamlined financial reconciliation via automated background jobs syncing payment status with Zoho CRM every 5 mins.",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  },
  {
    metric: "13% → 22%",
    sub: "+17% Relative Conversion",
    label: "IPD Conversion Rate",
    desc: "Voice AI qualification, dynamic lead prioritization, and multi-provider IVR fallback logic.",
    gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
  },
  {
    metric: "~73%",
    sub: "Automated Precision",
    label: "Lead Qualification Rate",
    desc: "Deterministic 15+ node XState state machine with real-time Pinecone RAG FAQ resolution and VAD turn-taking.",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
  },
  {
    metric: "99.9%",
    sub: "Zero Disruptions",
    label: "System Production Uptime",
    desc: "Built security layer with intelligent rate limiting (120 req/min), progressive IP blocking, and Winston observability.",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
  },
];

export const experienceData = [
  {
    id: 1,
    company: "HexaHealth",
    role: "Lead Software Engineer",
    location: "India (Remote-friendly / Pune)",
    period: "Feb 2022 – Present",
    current: true,
    badges: ["Microservices", "Real-Time Voice AI", "API Gateway", "FinTech", "AWS"],
    highlights: [
      {
        title: "Enterprise API Gateway & Microservices Orchestration",
        points: [
          "Designed and shipped a central API Gateway managing 738+ endpoints across 19 microservices (EHR, Scheduler, Payment, Notifications, CMS, VMS) with a middleware pipeline for JWT authentication and RBAC covering 20+ user roles.",
          "Built a resilient security layer with intelligent rate limiting (120 req/min) and progressive IP blocking, maintaining 99.9% uptime while eliminating malicious traffic.",
          "Implemented full request observability using Winston and Morgan with auto-generated cURL commands, enabling 100% request traceability across all distributed services.",
        ],
      },
      {
        title: "Real-Time Conversational Voice AI & Campaign Automation",
        points: [
          "Built a real-time speech-to-speech orchestration server using WebSockets, integrating Deepgram (STT), ElevenLabs (TTS), and Google Vertex AI / Gemini for bilingual (Hindi/English) patient consultations and structured lead qualification.",
          "Crafted a deterministic conversation state machine (XState) with 15+ nodes, handling complex branching, interruption, FAQ via RAG pipeline, and voice activity detection (VAD) for natural turn-taking.",
          "Engineered a production RAG pipeline for real-time FAQ resolution during voice calls — chunked and embedded healthcare knowledge-base content using Google text-embedding models, indexed vectors in Pinecone, and performed low-latency semantic search.",
          "Established multi-provider IVR routing across Knowlarity, Acephone, and Xtremegen with dynamic provider selection based on performance averages, health checks, and intelligent fallback logic.",
          "Built an outbound dialer platform with slot-based calling, campaign queue strategies, priority-based retry, and DNP lifecycle management — lifted call pickup rate from 36% to 72% and achieved 73% lead qualification.",
        ],
      },
      {
        title: "FinTech & Payment Orchestration",
        points: [
          "Designed a production-grade Payment Microservice integrating Razorpay, supporting 15+ payment methods with end-to-end HMAC-SHA256-secured webhook verification.",
          "Built a dynamic pricing engine using complex MySQL stored procedures (300+ lines) supporting tiered (Gold/Silver/Bronze) and city-specific pricing overrides.",
        ],
      },
      {
        title: "Healthcare EHR, Document AI & Vendor Management",
        points: [
          "Built a scalable Electronic Health Record platform on AWS S3 + Lambda for serverless document processing (prescriptions, ID cards) with multi-resolution image generation.",
          "Integrated Google Gemini Vision for AI-driven medical bill parsing, extracting 20+ financial fields and accelerating insurance claim processing.",
          "Launched a multi-tenant Vendor Management System (VMS) with RBAC managing hospital-vendor agreements and rule-based revenue-sharing calculations across 50+ partners.",
          "Streamlined financial reconciliation via background jobs syncing payment status with Zoho CRM every 5 minutes, reducing manual finance workload by 85%.",
          "Expanded notification coverage with a unified multi-channel service (SMS, Email, WhatsApp, Push Notifications) supporting simultaneous delivery across all channels.",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Masai School",
    role: "Full Stack Developer Intern",
    location: "India",
    period: "Jun 2021 – Feb 2022",
    current: false,
    badges: ["Full Stack", "Data Structures & Algorithms", "React", "Node.js", "MongoDB"],
    highlights: [
      {
        title: "Software Engineering & Full Stack Development",
        points: [
          "Solved 800+ Data Structures and Algorithms problems in JavaScript, focusing on time and space complexity optimizations.",
          "Built production-quality full-stack website replicas (Discovery+, Zoomcar, TravelTech) using React, Node.js, Express, and MongoDB.",
          "Gained hands-on expertise in responsive UI design, Redux global state management, and robust RESTful API integrations.",
        ],
      },
    ],
  },
];

export const technicalSkills = [
  {
    category: "AI & Real-Time Voice Systems",
    icon: "ai",
    skills: [
      "Google Vertex AI / Gemini",
      "Gemini Vision",
      "Deepgram STT (Streaming)",
      "ElevenLabs TTS (Low-latency)",
      "XState (Conversation State Machine)",
      "WebSockets & SSE",
      "RAG Pipeline",
      "Google Text Embeddings",
      "Pinecone Vector DB",
      "Langfuse Observability",
    ],
  },
  {
    category: "Backend & Microservices",
    icon: "backend",
    skills: [
      "Node.js (Express.js)",
      "TypeScript & JavaScript (ES6+)",
      "API Gateway Architecture",
      "JWT & Role-Based Access Control (RBAC)",
      "Intelligent Rate Limiting",
      "HMAC-SHA256 Webhook Verification",
      "Microservices Orchestration",
      "Distributed Task Queues",
    ],
  },
  {
    category: "Databases & Caching",
    icon: "database",
    skills: [
      "MySQL (Stored Procedures 300+ lines)",
      "MySQL Partitioning & Replication",
      "MySQL Transactions & ACID",
      "MongoDB & Mongoose ORM",
      "Redis (Caching & Rate Limiting)",
      "Sequelize ORM",
      "Query Profiling & Indexing",
    ],
  },
  {
    category: "Cloud, DevOps & Observability",
    icon: "cloud",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Firebase Cloud Messaging (FCM)",
      "PM2 Process Management",
      "Winston & Morgan Observability",
      "cURL Auto-Generation & Traceability",
      "New Relic & Grafana",
      "Cron Job Automation & S3 Log Archival",
    ],
  },
  {
    category: "Third-Party & Telephony Integrations",
    icon: "integration",
    skills: [
      "Knowlarity Telephony",
      "Acephone IVR",
      "Xtremegen Outbound Calling",
      "Razorpay Payments (15+ Methods)",
      "Zoho CRM Automation",
      "Chat360 Conversational Bot",
      "CMercury Multi-channel Engine",
    ],
  },
  {
    category: "Frontend & UI Engineering",
    icon: "frontend",
    skills: [
      "React.js (Hooks, Context, Router)",
      "Redux & State Management",
      "Three.js (WebGL 3D Graphics)",
      "HTML5 & Modern CSS3",
      "Styled Components",
      "Framer Motion Animations",
      "Material-UI & Tailwind CSS",
    ],
  },
];

export const systemArchitectureNodes = [
  {
    id: "telephony",
    title: "Inbound / Outbound IVR",
    provider: "Knowlarity, Acephone, Xtremegen",
    role: "Telephony Layer",
    desc: "Dynamic multi-provider routing with health checks, slot-based calling, and automatic failover logic.",
    latency: "< 150ms handshake",
    color: "#38bdf8",
  },
  {
    id: "ws-gateway",
    title: "WebSocket Voice Server",
    provider: "Node.js + WebSockets / SSE",
    role: "Real-time Gateway",
    desc: "Bi-directional audio streaming gateway orchestrating STT, conversational state, and audio synthesis.",
    latency: "< 20ms frame dispatch",
    color: "#818cf8",
  },
  {
    id: "stt",
    title: "Streaming Speech-to-Text",
    provider: "Deepgram STT",
    role: "Audio Transcription",
    desc: "Real-time bilingual (Hindi/English) transcription with Voice Activity Detection (VAD) for natural turn-taking.",
    latency: "< 250ms streaming",
    color: "#a78bfa",
  },
  {
    id: "state-machine",
    title: "Deterministic State Machine",
    provider: "XState (15+ Nodes)",
    role: "Conversation Orchestrator",
    desc: "Handles deterministic branching, interruption handling, patient qualification, and dynamic transitions.",
    latency: "< 10ms execution",
    color: "#f472b6",
  },
  {
    id: "rag",
    title: "Semantic Vector RAG",
    provider: "Google Embeddings + Pinecone",
    role: "Real-Time Knowledge Base",
    desc: "Embedded healthcare FAQs and protocols retrieved via low-latency semantic search to eliminate hallucinations.",
    latency: "< 80ms vector query",
    color: "#34d399",
  },
  {
    id: "llm",
    title: "Intelligence Engine",
    provider: "Google Vertex AI / Gemini 1.5",
    role: "Cognitive Processing",
    desc: "Bilingual patient consultation reasoning, clinical intent classification, and structured response drafting.",
    latency: "< 350ms first-chunk",
    color: "#fbbf24",
  },
  {
    id: "tts",
    title: "Low-Latency Text-to-Speech",
    provider: "ElevenLabs Streaming TTS",
    role: "Audio Synthesis",
    desc: "Natural human-like Hindi/English voice synthesis streamed chunk-by-chunk directly into the telephony channel.",
    latency: "< 200ms chunk stream",
    color: "#fb7185",
  },
];

export const featuredProjects = [
  {
    id: 1,
    title: "Real-Time Conversational Voice AI Platform",
    tagline: "Speech-to-Speech Orchestration Engine for Patient Consultations",
    category: "AI & Voice",
    featured: true,
    image: null,
    metrics: "36% → 72% Pickup | 73% Qualification",
    description:
      "Engineered an end-to-end bilingual (Hindi & English) voice AI orchestration pipeline over WebSockets. Integrates Deepgram STT, Google Vertex AI / Gemini, Pinecone RAG for instantaneous FAQ retrieval, and ElevenLabs streaming TTS with an XState deterministic state machine handling natural turn-taking and interruptions.",
    tags: ["Node.js", "WebSockets", "Google Gemini", "Deepgram", "ElevenLabs", "XState", "Pinecone RAG"],
    links: {
      github: "https://github.com/vishalpatil12014017",
      demo: "#architecture",
    },
  },
  {
    id: 2,
    title: "Enterprise Healthcare API Gateway",
    tagline: "High-Throughput Central Gateway for 19 Microservices",
    category: "Backend Systems",
    featured: true,
    image: null,
    metrics: "738+ Endpoints | 99.9% Uptime",
    description:
      "Designed and deployed the central routing and security gateway managing 738+ endpoints across 19 microservices. Includes JWT authentication, RBAC covering 20+ user roles, progressive IP throttling (120 req/min), and complete request observability with Winston and auto-generated cURL commands.",
    tags: ["Node.js", "Express", "Microservices", "Redis", "JWT / RBAC", "Winston", "AWS"],
    links: {
      github: "https://github.com/vishalpatil12014017",
      demo: "#impact",
    },
  },
  {
    id: 3,
    title: "Document AI & Medical Bill Extractor",
    tagline: "Serverless Intelligent Bill Parsing Pipeline",
    category: "AI & Cloud",
    featured: true,
    image: null,
    metrics: "20+ Financial Fields | S3 + Lambda",
    description:
      "Built a serverless healthcare document processing platform leveraging AWS S3 and Lambda. Integrated Google Gemini Vision to accurately extract 20+ clinical and financial line items from unstructured hospital invoices, dramatically accelerating insurance pre-authorization and claims.",
    tags: ["AWS Lambda", "AWS S3", "Google Gemini Vision", "Node.js", "Healthcare EHR"],
    links: {
      github: "https://github.com/vishalpatil12014017",
      demo: "https://linkedin.com/in/vishal-patil17",
    },
  },
  {
    id: 4,
    title: "FinTech Dynamic Pricing & Payment Microservice",
    tagline: "Multi-Tiered Pricing Engine & Razorpay Orchestration",
    category: "Backend Systems",
    featured: true,
    image: null,
    metrics: "15+ Payment Methods | 85% Workload Cut",
    description:
      "Production-grade payment microservice supporting 15+ payment options via Razorpay with HMAC-SHA256 webhook signatures. Includes a dynamic pricing engine powered by 300+ line MySQL stored procedures supporting tiered (Gold/Silver/Bronze) rules and automated Zoho CRM reconciliation.",
    tags: ["Node.js", "MySQL Stored Procs", "Razorpay", "HMAC-SHA256", "Zoho CRM", "Redis"],
    links: {
      github: "https://github.com/vishalpatil12014017",
      demo: "https://linkedin.com/in/vishal-patil17",
    },
  },
  {
    id: 5,
    title: "EC2 Log Archival & Storage Automation",
    tagline: "Automated Disk Management & S3 Archival",
    category: "Cloud & DevOps",
    featured: false,
    image: null,
    metrics: "98 GiB → 18 GiB Disk Optimization",
    description:
      "Scheduled automated log rotation, compression, and S3 archival system with strict retention policies, preventing recurring server crashes and reducing EC2 disk consumption by 81%.",
    tags: ["AWS EC2", "AWS S3", "Bash", "Cron", "Node.js"],
    links: {
      github: "https://github.com/vishalpatil12014017",
      demo: "https://linkedin.com/in/vishal-patil17",
    },
  },
  {
    id: 6,
    title: "Discovery+ Platform Replica",
    tagline: "Production-Grade Video Streaming Web App",
    category: "Web Applications",
    featured: false,
    image: p3,
    metrics: "Full-Stack Media Architecture",
    description:
      "High-fidelity replica of the Discovery+ streaming platform featuring responsive video catalog browsing, filterable shows, authentication, and REST API backend.",
    tags: ["React.js", "Redux", "Material-UI", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/vishalpatil12014017/Discoveryplus.in",
      demo: "https://discoveryplusclone-in-vishal-patil.vercel.app/",
    },
  },
  {
    id: 7,
    title: "Zoomcar Web Platform Replica",
    tagline: "Self-Drive Car Rental Booking Engine",
    category: "Web Applications",
    featured: false,
    image: p1,
    metrics: "Car Booking & Fleet Workflow",
    description:
      "Full-stack car rental booking system with date-slot selection, pricing calculation, vehicle filtering, user authentication, and booking lifecycle management.",
    tags: ["HTML5", "CSS3", "JavaScript", "Express.js", "MongoDB", "EJS"],
    links: {
      github: "https://github.com/vishalpatil12014017/Zoomcar_backend",
      demo: "https://github.com/vishalpatil12014017/Zoomcar_backend",
    },
  },
  {
    id: 8,
    title: "TravelTech Exploration Portal",
    tagline: "Dynamic Tour & Travel Booking Experience",
    category: "Web Applications",
    featured: false,
    image: p2,
    metrics: "Interactive Booking Flow",
    description:
      "Modern travel booking application providing curated destination exploration, itinerary management, user accounts, and responsive UI.",
    tags: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    links: {
      github: "https://github.com/vishalpatil12014017/TravelTech",
      demo: "https://github.com/vishalpatil12014017/TravelTech",
    },
  },
];

export const mediumBlogs = [
  {
    id: 1,
    title: "Mysql Partitioning",
    desc: "Mastering horizontal and vertical partitioning in MySQL to optimize queries on multi-million row production tables.",
    date: "26 April 2023",
    src: "https://medium.com/@Vishal_Patil/partitioning-356411b0060a",
    image: mysqlPartition,
    tags: ["MySQL", "Database Architecture", "Performance Tuning"],
  },
  {
    id: 2,
    title: "Mysql Replication",
    desc: "Architecting master-slave topologies, binary log replication, read-scaling, and automated failover strategies.",
    date: "26 April 2023",
    src: "https://medium.com/@Vishal_Patil/mysql-replication-ecf664b35277",
    image: mysqlReplication,
    tags: ["MySQL", "Distributed Systems", "High Availability"],
  },
  {
    id: 3,
    title: "Transactions in MySQL",
    desc: "ACID principles, isolation levels (READ COMMITTED vs REPEATABLE READ), row-level locks, and avoiding deadlocks.",
    date: "26 April 2023",
    src: "https://medium.com/@Vishal_Patil/transactions-in-mysql-2bdc865bd560",
    image: mysqlTransactions,
    tags: ["MySQL", "ACID", "Concurrency"],
  },
  {
    id: 4,
    title: "Stored Procedures and MySQL Functions",
    desc: "Building high-performance server-side business logic and pricing calculators with parameterized MySQL routines.",
    date: "26 April 2023",
    src: "https://medium.com/@Vishal_Patil/stored-procedures-and-mysql-functions-96d0b82fbbef",
    image: mysqlStoredProceduresAndFunctions,
    tags: ["SQL", "Stored Procedures", "Backend Logic"],
  },
  {
    id: 5,
    title: "MySQL Triggers",
    desc: "Implementing event-driven audits, data integrity enforcement, and automated timestamp tracking using MySQL triggers.",
    date: "26 April 2023",
    src: "https://medium.com/@Vishal_Patil/mysql-triggers-274f20d539c8",
    image: mysqlTriggers,
    tags: ["MySQL", "Database Triggers", "Auditing"],
  },
  {
    id: 6,
    title: "MySQL Inbuilt Features",
    desc: "Leveraging native MySQL functions, query caching, diagnostic commands, and performance schema tools.",
    date: "26 April 2023",
    src: "https://medium.com/@Vishal_Patil/mysql-inbuilt-features-b055ad6d3d2",
    image: InbuiltFeatures,
    tags: ["MySQL", "Optimization", "Database Internals"],
  },
  {
    id: 7,
    title: "SQL Queries Masterclass",
    desc: "Deep dive into query execution plans, indexing strategies, subqueries vs joins, and analytical window functions.",
    date: "06 April 2022",
    src: "https://medium.com/@Vishal_Patil/sql-queries-b5a8f4ccd9a1",
    image: SQL,
    tags: ["SQL", "Query Optimization", "Indexing"],
  },
  {
    id: 8,
    title: "Building Clone of the Zoomcar Website",
    desc: "Designing the backend architecture, booking scheduler, fleet schema, and REST APIs for a car rental service.",
    date: "03 Oct 2021",
    src: "https://medium.com/@Vishal_Patil/cloning-of-zoomcar-com-website-using-backend-591429b313e3",
    image: zoomcar,
    tags: ["Node.js", "Express.js", "MongoDB", "System Design"],
  },
  {
    id: 9,
    title: "Building TravelTech Website",
    desc: "Constructing an interactive travel exploration application with React, responsive UI, and backend data flow.",
    date: "09 Nov 2021",
    src: "https://medium.com/@Vishal_Patil/vishal-patil-41854732ceff",
    image: Traveltech,
    tags: ["React", "Bootstrap", "Web Development"],
  },
  {
    id: 10,
    title: "Building Clone of the Discovery+ Website",
    desc: "Engineering a video streaming catalog interface with responsive layouts, modal players, and state handling.",
    date: "14 Dec 2021",
    src: "https://medium.com/@Vishal_Patil/discovery-cba046a0c2f9",
    image: Discovery,
    tags: ["React", "Redux", "Frontend Engineering"],
  },
];

export const educationData = [
  {
    institution: "Dr. Babasaheb Ambedkar Technological University, Lonere",
    degree: "Bachelor of Technology (B.Tech)",
    period: "Aug 2018 – Jun 2021",
    score: "CGPA: 8.95 / 10 (First Class with Distinction)",
    details: "Core focus on Computer Science, Distributed Systems, Algorithms, and Database Management.",
  },
  {
    institution: "Government Polytechnic, Miraj",
    degree: "Diploma in Engineering",
    period: "Aug 2015 – Jun 2018",
    score: "Percentage: 85.18% (First Class with Distinction)",
    details: "Foundations of Computer Engineering, Electronics, and Software Development.",
  },
];

export const languages = [
  { language: "English", proficiency: "Professional Working Proficiency" },
  { language: "Hindi", proficiency: "Native or Bilingual Proficiency" },
  { language: "Marathi", proficiency: "Native or Bilingual Proficiency" },
  { language: "German", proficiency: "Basic / Elementary Proficiency" },
];
