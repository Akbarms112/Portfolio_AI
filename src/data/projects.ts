export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface ProjectArchitecture {
  summary: string;
  points: string[];
}

export interface Project {
  id: number;
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  img: string;
  desc: string;
  fullOverview: string;
  bullets: string[];
  year: string;
  stack: string[];
  type: string;
  live?: string;
  github?: string;
  glowColor: string;
  cornerColor: string;
  features?: ProjectFeature[];
  architecture?: ProjectArchitecture;
  achievements?: string[];
}

export const projects: Project[] = [
  {
    id: 0,
    slug: "retrivo-rag-agent",
    num: "01",
    title: "RETRIVO — MULTI-TENANT RAG & AUTONOMOUS AGENT",
    subtitle: "Enterprise Hybrid RAG & Autonomous Multi-Agent AI Assistant",
    img: "/project1.jpg",
    desc: "Autonomous multi-tenant RAG chatbot powered by LangGraph that dynamically decides whether to search vector stores, browse the web, or trigger 20+ MCP external tools. Built with parent-child chunking & two-stage reranking (Qdrant + Cross-Encoder) for zero context loss.",
    fullOverview: "Retrivo is an enterprise-grade Multi-Tenant Hybrid RAG & Autonomous Multi-Agent AI Assistant powered by LangGraph, Qdrant Cloud, MongoDB Atlas, Redis Caching, Nango MCP Integrations, and Multi-Engine LLM Inference (Groq, Google Gemini, OpenAI). The system provides strict per-tenant data isolation across vector search, session cache, database records, and OAuth credentials.",
    bullets: [
      "Multi-Tenant Parent-Child RAG Pipeline: Dense child vector search (256 tokens) mapped to parent context passages (1000 tokens) in Qdrant Payload, eliminating context loss.",
      "Two-Stage Retrieval Engine: Combines Qdrant dense vector similarity search with CPU Cross-Encoder reranking (ms-marco-MiniLM-L-6-v2) for top N=3 authoritative context extraction.",
      "Autonomous ReAct Decision Engine: LangGraph agent evaluates user intent dynamically—deciding between document RAG, live web search (Tavily), external OAuth tools, or conversation memory without manual tool picking.",
      "Dynamic Nango MCP Gateway: Single dynamic tool proxies 20+ external integrations including GitHub (repos, issues, code), Google Workspace (Drive, Calendar, Forms), Slack, and AWS.",
      "Dual-Header Network Gateway: Axios client sends X-Session-Token (Redis) and Authorization Bearer (Hugging Face Private Space Gatekeeper) for secure API routing.",
      "Production Multi-Engine Inference: Supports runtime model toggling across Groq LPUs (Qwen-2.5 32B, Llama 3.3 70B), Google Gemini (1.5 Pro/Flash), and OpenAI (GPT-4o)."
    ],
    year: "2025",
    stack: ["Python", "FastAPI", "LangGraph", "Qdrant", "MongoDB", "Redis", "Nango MCP", "Groq", "Gemini", "React 19", "Vercel"],
    type: "Production RAG AI Agent",
    live: "https://rag-project-azure-xi.vercel.app/",
    github: "https://github.com/Akbarms112",
    glowColor: "rgba(0, 212, 255, 0.35)",
    cornerColor: "#00d4ff",
    features: [
      { title: "Parent-Child Vector Search", desc: "Indexes 256-token child chunks for ultra-sharp search precision while retrieving 1000-token parent passages to preserve full context." },
      { title: "Autonomous Tool Chaining", desc: "LangGraph ReAct orchestrator chains multi-step tools across turns (e.g. fetching GitHub issues then querying internal fix docs)." },
      { title: "Strict Multi-Tenant Isolation", desc: "Payload-level tenant filters in Qdrant, scoped Redis session keys, and connection-isolated Nango OAuth tokens guarantee zero cross-tenant leaks." },
      { title: "Multi-Engine LLM Runtime", desc: "Frontend toggle allows seamless model switching between Groq, Google Gemini, and OpenAI on a per-query basis." }
    ],
    architecture: {
      summary: "Microservice RAG architecture deployed on Hugging Face Spaces (FastAPI Backend) and Vercel (React 19 Frontend) with multi-database persistence.",
      points: [
        "Frontend: React 19 SPA hosted on Vercel with Markdown rendering and dynamic MCP directory.",
        "Backend Gateway: FastAPI REST backend hosted on Hugging Face Private Space with Redis session authentication.",
        "Vector Store: Qdrant Cloud Cluster with 768-dim multilingual-e5-base embeddings.",
        "Cache & DB: Redis Cloud (<2ms TTL session cache) and MongoDB Atlas (persistent chat history & user accounts)."
      ]
    },
    achievements: [
      "Deploys live in production with 100% per-tenant vector and DB data isolation",
      "Reranking pipeline improves search relevancy precision by over 40%",
      "20+ active external tool connectors integrated via Nango MCP"
    ]
  },
  {
    id: 1,
    slug: "ai-voice-saas-platform",
    num: "02",
    title: "AI VOICE AGENT SAAS PLATFORM",
    subtitle: "Real-Time WebRTC Multi-Agent Voice Communication Engine",
    img: "/project2.jpg",
    desc: "Multi-agent AI voice platform built on Pipecat and WebRTC. Features Cloudflare R2 context retrieval pipelines, Composio tool execution, FastAPI backend microservices, and a no-code drag-and-drop voice agent creation UI.",
    fullOverview: "A production-grade multi-agent AI voice platform engineered entirely on the Pipecat framework. It powers real-time bidirectional voice conversations over WebRTC with sub-second response times, integrated RAG knowledge pipelines via Cloudflare R2, and automated tool invocation using Composio.",
    bullets: [
      "Built a multi-agent AI voice platform entirely on the Pipecat framework, handling real-time voice communication via WebRTC.",
      "Developed end-to-end RAG pipelines using Cloudflare R2, enabling context-aware knowledge retrieval from enterprise data sources.",
      "Built document ingestion and preprocessing pipelines to clean and index unstructured data for real-time retrieval.",
      "Integrated Composio for external tool and API integrations, allowing agents to interact with third-party applications and automate actions.",
      "Used PostgreSQL to manage conversation history, agent configurations, and session data.",
      "Built the FastAPI backend and React.js frontend for agent management and a no-code voice agent creation interface."
    ],
    year: "2025",
    stack: ["Python", "FastAPI", "Pipecat", "WebRTC", "Composio", "Cloudflare R2", "PostgreSQL", "React.js"],
    type: "Voice AI Platform",
    github: "https://github.com/Akbarms112",
    glowColor: "rgba(108, 99, 255, 0.35)",
    cornerColor: "#6c63ff",
    features: [
      { title: "Real-Time WebRTC Audio", desc: "Sub-second bidirectional audio streaming built on WebRTC and Pipecat framework." },
      { title: "Cloudflare R2 Context Retrieval", desc: "High-speed object storage RAG pipeline indexing unstructured enterprise knowledge." },
      { title: "No-Code Agent Builder", desc: "React.js drag-and-drop dashboard for configuring agent prompts, voices, and Composio tools." },
      { title: "Composio Tool Automation", desc: "Empowers voice agents to trigger external API actions and workflows during live calls." }
    ],
    achievements: [
      "Engineered real-time WebRTC voice agent pipelines supporting multi-party sessions",
      "Implemented RAG search over Cloudflare R2 storage for instant context retrieval",
      "Full no-code web builder for non-technical users to build and deploy custom voice bots"
    ]
  },
  {
    id: 2,
    slug: "multilingual-voice-ai",
    num: "03",
    title: "MULTILINGUAL AI VOICE ASSISTANT",
    subtitle: "Sub-2s Low-Latency Voice Bot across Tamil, English, Hindi & Telugu",
    img: "/project3.jpg",
    desc: "High-performance voice assistant supporting Tamil, English, Hindi, and Telugu. Implements Speech-to-Text (STT), Text-to-Speech (TTS), and Voice Activity Detection (VAD) with pipeline latency optimized from 12s down to under 2 seconds.",
    fullOverview: "An advanced multilingual voice AI system capable of real-time speech recognition, natural language understanding, and voice synthesis in 4 major languages. The inference pipeline was optimized to slash end-to-end response latency from 10–12 seconds down to less than 2 seconds.",
    bullets: [
      "Built multilingual AI voice agents in Python using FastAPI and Pipecat with real-time voice communication via WebRTC.",
      "Supported 4 regional languages: Tamil, English, Hindi, and Telugu with specialized Speech-To-Text (STT), Text-To-Speech (TTS), and Voice Activity Detection (VAD).",
      "Fine-tuned open-source LLMs via Hugging Face Transformers for domain-specific voice tasks and evaluated model performance.",
      "Reduced response latency from 10–12 seconds to under 2 seconds through inference pipeline optimization and system performance tuning.",
      "Deployed AI services on AWS and RunPod, optimizing inference latency and managing scalable production workloads."
    ],
    year: "2025",
    stack: ["Python", "FastAPI", "Pipecat", "PyTorch", "Hugging Face", "WebRTC", "STT/TTS", "AWS", "RunPod", "Docker"],
    type: "Low-Latency Voice AI",
    github: "https://github.com/Akbarms112",
    glowColor: "rgba(255, 107, 107, 0.35)",
    cornerColor: "#ff6b6b",
    features: [
      { title: "Multilingual Support", desc: "Native voice recognition and synthesis in Tamil, English, Hindi, and Telugu." },
      { title: "Ultra-Low Latency (<2s)", desc: "Optimized STT-LLM-TTS streaming pipeline reducing latency by over 80%." },
      { title: "Open-Source Fine-Tuning", desc: "Domain-adapted open-source LLMs via Hugging Face Transformers." },
      { title: "RunPod & AWS GPU Scaling", desc: "Automated containerized GPU workloads on RunPod and AWS for peak traffic." }
    ],
    achievements: [
      "Slashed end-to-end voice response latency from 12s to under 2 seconds",
      "Seamless multi-language switching across Tamil, English, Hindi, and Telugu",
      "Fine-tuned Hugging Face models running on cost-optimized RunPod GPUs"
    ]
  },
  {
    id: 3,
    slug: "chit-fund-app",
    num: "04",
    title: "CHIT FUND WEB APPLICATION",
    subtitle: "Digitized Financial Chit Fund Ledger & Auction Platform",
    img: "/project5.jpg",
    desc: "Web application to digitize chit fund operations — reduced manual bookkeeping effort and improved transaction accuracy. Winner of Mini Hackathon at Bannari Amman Institute of Technology.",
    fullOverview: "A financial management web application built to digitize traditional chit fund savings and auction operations. Replaced manual paper ledgers with automated transaction logging, installment tracking, and auction bidding modules.",
    bullets: [
      "Web app to digitize chit fund operations — reduced manual effort and improved transaction accuracy.",
      "Automated monthly group installment calculation, dividend distribution, and member payout ledgers.",
      "Built real-time auction bidding module for chit subscribers with instant win notifications and record keeping.",
      "Won Mini Hackathon at Bannari Amman Institute of Technology for best real-world implementation."
    ],
    year: "2024",
    stack: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    type: "FinTech Web App",
    github: "https://github.com/Akbarms112",
    glowColor: "rgba(74, 222, 128, 0.35)",
    cornerColor: "#4ade80",
    features: [
      { title: "Digital Ledger & Payouts", desc: "Automated calculation of monthly installments, pool dividends, and member payouts." },
      { title: "Live Auction Module", desc: "Real-time bidding system for group members to bid on monthly chit funds." },
      { title: "Transaction Auditing", desc: "MySQL relational database design for error-free financial audit logs." }
    ],
    achievements: [
      "🏆 Won Mini Hackathon at Bannari Amman Institute of Technology",
      "Eliminated manual paper bookkeeping errors across active chit groups",
      "Built end-to-end full-stack PHP/MySQL app architecture"
    ]
  },
  {
    id: 4,
    slug: "ai-ticketing-platform",
    num: "05",
    title: "AI TICKETING & AUTOMATION SYSTEM",
    subtitle: "Enterprise Support Platform with Automated Routing",
    img: "/project4.jpg",
    desc: "Enterprise AI-driven ticketing and customer support platform featuring automated ticket routing, real-time status dashboards, REST API integrations, and scalable server infrastructure.",
    fullOverview: "Built as a freelance project at Smilodata, this application delivers responsive UI components and backend REST API integrations for an AI-based customer ticketing platform.",
    bullets: [
      "Built responsive UI components for an AI-based ticketing platform and integrated REST APIs for frontend-backend communication.",
      "Designed automated ticket categorization and routing based on customer query semantics.",
      "Led server deployment — handled environment setup, infrastructure configuration, and end-to-end go-live."
    ],
    year: "2025",
    stack: ["React.js", "JavaScript", "REST APIs", "Node.js", "Express", "AWS", "PostgreSQL"],
    type: "Enterprise Support AI",
    github: "https://github.com/Akbarms112",
    glowColor: "rgba(200, 160, 80, 0.35)",
    cornerColor: "#c8a050",
    features: [
      { title: "Automated Ticket Routing", desc: "AI semantic classification routing high-priority tickets to appropriate teams." },
      { title: "Responsive React UI", desc: "Modern dashboard with live ticket feeds, analytics, and status toggles." },
      { title: "Server & Go-Live Management", desc: "Configured AWS server environments and CI/CD deployment pipelines." }
    ],
    achievements: [
      "Successfully deployed client platform to production on AWS",
      "Built 100% responsive React.js interface integrated with REST backend APIs"
    ]
  }
];
