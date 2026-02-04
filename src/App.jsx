import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  Code, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Award,
  ChevronRight,
  Activity,
  Server,
  Zap,
  CheckCircle,
  ShieldCheck,
  X,
  FileCheck,
  Hash,
  Maximize2,
  GraduationCap,
  Copy,
  Check,
  Bot,
  BrainCircuit,
  Network,
  GitGraph,
  Box,
  Workflow,
  Container,
  Download,
  FileText
} from 'lucide-react';

// --- Data Structure ---
const DATA = {
  name: "Roopesh Rokade",
  role: "AI Engineer | Enterprise Automation Architect",
  location: "Hyderabad, India",
  email: "roopeshrokade4@gmail.com",
  linkedin: "https://www.linkedin.com/in/roopesh-rokade-277526173",
  // ACTION: Replace with actual resume PDF path (e.g., in public folder)
  resumeUrl: "https://drive.google.com/file/d/1t8wi1MYFQDDogA-FboToKQJCYKnyMuH1/view?usp=drivesdk", 
  summary: "I build production-grade AI systems that solve actual business problems. Specializing in Agentic Frameworks, MCP, and RAG pipelines that move beyond 'chatbots' to full workflow automation.",
  metrics: [
    { label: "Workflow Automation", value: "80%", desc: "Reduction in manual ops" },
    { label: "Team Scaling", value: "2 → 16", desc: "Engineers mentored" },
    { label: "Deployment", value: "Production", desc: "Enterprise-grade reliability" },
  ],
  // New Structured Architecture Data
  architecture: [
    {
      layer: "L5: Agentic Intelligence",
      icon: BrainCircuit,
      color: "emerald",
      skills: ["CrewAI", "LangGraph", "AutoGen", "MCP", "LLM Orchestration"],
      desc: "Autonomous multi-agent systems and high-level decision logic."
    },
    {
      layer: "L4: Application & Retrieval",
      icon: Cpu,
      color: "blue",
      skills: ["FastAPI", "Python", "LangChain", "RAG Pipelines", "LlamaIndex"],
      desc: "High-performance inference services and context retrieval engines."
    },
    {
      layer: "L3: Data & Memory",
      icon: Database,
      color: "purple",
      skills: ["Vector DBs", "PostgreSQL", "Neo4j", "Knowledge Graphs"],
      desc: "Persistent state, semantic search, and relational storage."
    },
    {
      layer: "L2: Observability & Evaluation", 
      icon: Activity,
      color: "pink",
      skills: ["OpenTelemetry", "Langfuse", "MLflow", "Arize Phoenix", "Tracing"],
      desc: "LLM evaluation pipelines, tracing, and production monitoring."
    },
    {
      layer: "L1: Infrastructure & Runtime", 
      icon: Container, 
      color: "slate",
      skills: ["Docker", "Celery", "RabbitMQ", "Redis", "Microservices"], 
      desc: "Containerized environments and distributed task queues for async workflows."
    }
  ],
  experience: [
    {
      company: "CGI",
      role: "Software Engineer (AI / GenAI)",
      period: "April 2024 - Present",
      type: "Current",
      highlights: [
        "Architected an IP-backed GenAI platform automating 80% of manual cybersecurity workflows.",
        "Designed MCP-based architectures for multi-agent orchestration.",
        "Scaled the engineering team from 2 to 16, establishing Agile AI practices.",
        "Recipient of the CGI Gold Award for high-impact automation."
      ]
    },
    {
      company: "IBM",
      role: "Application Developer",
      period: "Feb 2024 - April 2024",
      type: "Foundation",
      highlights: [
        "Built reliability-first batch processing systems for high-volume enterprise data.",
        "Optimized structured data workflows under strict production constraints.",
        "Gained deep discipline in system-level debugging and error handling."
      ]
    },
    {
      company: "StackRoute",
      role: "Java Full Stack Trainee",
      period: "Aug 2023 - Oct 2023",
      type: "Training",
      highlights: [
        "Developed full-stack microservices with Spring Boot & Angular.",
        "Implemented JWT auth and payment gateways.",
        "Dockerized applications reducing setup time by 30%."
      ]
    }
  ],
  education: [
    {
      institution: "Indian Institute of Information Technology, Pune",
      degree: "B.Tech in Electronics & Communication",
      period: "2019 - 2023",
      status: "Graduated"
    },
    {
      institution: "Jawahar Navodaya Vidyalaya Kalaburagi 2",
      degree: "Higher Secondary (Class XII)",
      period: "2018 - 2019",
      status: "Completed"
    }
  ],
  credentials: [
    {
      id: "crt-001",
      title: "CGI Gold Award",
      issuer: "CGI",
      year: "2024",
      icon: Award,
      color: "amber",
      desc: "Awarded for delivering high-impact AI automation that drove measurable efficiency."
    },
    {
      id: "crt-002",
      title: "Innovation Speaker",
      issuer: "APAC Leadership Conf",
      year: "2025",
      icon: Zap,
      color: "blue",
      desc: "Presented strategies for large-scale enterprise workflow automation."
    },
    {
      id: "crt-003",
      title: "Generative AI Leader",
      issuer: "Certification",
      year: "2024",
      icon: ShieldCheck,
      color: "emerald",
      desc: "Certified leadership in Generative AI architecture, strategy, and implementation."
    },
    {
      id: "crt-004",
      title: "AI Mentoring Program",
      issuer: "CGI",
      year: "2023",
      icon: CheckCircle,
      color: "purple",
      desc: "Completed comprehensive AI training program for developers and testers."
    }
  ]
};

// --- Components ---

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
      <Icon className="w-6 h-6 text-emerald-400" />
    </div>
    <div>
      <h2 className="text-2xl font-bold text-slate-100 tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-400 text-sm">{subtitle}</p>}
    </div>
  </div>
);

const MetricCard = ({ label, value, desc }) => (
  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/30 transition-colors group">
    <div className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">{label}</div>
    <div className="text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{value}</div>
    <div className="text-slate-500 text-sm">{desc}</div>
  </div>
);

const ArchitectureLayer = ({ layer, isLast }) => {
  const colors = {
    emerald: "from-emerald-500/20 to-emerald-900/5 border-emerald-500/30 text-emerald-400",
    blue: "from-blue-500/20 to-blue-900/5 border-blue-500/30 text-blue-400",
    purple: "from-purple-500/20 to-purple-900/5 border-purple-500/30 text-purple-400",
    pink: "from-pink-500/20 to-pink-900/5 border-pink-500/30 text-pink-400",
    slate: "from-slate-500/20 to-slate-900/5 border-slate-500/30 text-slate-400",
  };

  const glowColors = {
    emerald: "group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/50",
    blue: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/50",
    purple: "group-hover:shadow-purple-500/20 group-hover:border-purple-500/50",
    pink: "group-hover:shadow-pink-500/20 group-hover:border-pink-500/50",
    slate: "group-hover:shadow-slate-500/20 group-hover:border-slate-500/50",
  };

  const Icon = layer.icon;

  return (
    <div className="relative group">
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-8 top-16 bottom-[-24px] w-0.5 bg-slate-800 group-hover:bg-slate-700 transition-colors z-0" />
      )}
      
      <div className={`
        relative z-10 flex flex-col md:flex-row gap-6 p-6 rounded-xl border bg-gradient-to-r transition-all duration-300
        ${colors[layer.color]} bg-slate-900/80 backdrop-blur-sm
        ${glowColors[layer.color]} group-hover:-translate-y-1 group-hover:shadow-lg
      `}>
        {/* Header / Icon */}
        <div className="flex items-start gap-4 md:w-1/3 shrink-0">
          <div className={`p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-white tracking-wide">{layer.layer}</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {layer.desc}
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex-1 flex items-center">
          <div className="flex flex-wrap gap-2">
            {layer.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className={`
                  px-3 py-1.5 rounded text-xs font-mono border bg-slate-950/50
                  border-slate-700/50 text-slate-300
                  group-hover:border-${layer.color === 'slate' ? 'slate' : layer.color}-500/30 
                  group-hover:text-white transition-colors
                `}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ exp }) => (
  <div className="relative pl-8 pb-12 border-l border-slate-800 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-slate-950" />
    
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all">
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
          <div className="flex items-center gap-2 text-emerald-400 mt-1">
            <span className="font-semibold">{exp.company}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 text-sm">{exp.period}</span>
          </div>
        </div>
        <div className="mt-2 sm:mt-0">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
            {exp.type}
          </span>
        </div>
      </div>
      
      <ul className="space-y-2">
        {exp.highlights.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
            <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const EducationCard = ({ edu }) => (
  <div className="flex flex-col md:flex-row gap-4 p-6 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-slate-700 transition-all mb-4">
    <div className="shrink-0 pt-1">
      <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 text-slate-400">
        <GraduationCap className="w-6 h-6" />
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <div>
          <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
          <p className="text-emerald-400 font-medium">{edu.degree}</p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <span className="text-slate-400 text-sm block">{edu.period}</span>
          <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">{edu.status}</span>
        </div>
      </div>
      {edu.desc && <p className="text-slate-400 text-sm leading-relaxed mt-2">{edu.desc}</p>}
    </div>
  </div>
);

const CredentialCard = ({ cred }) => {
  const colors = {
    amber: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  };
  
  const textColors = {
    amber: "text-amber-100",
    blue: "text-blue-100",
    emerald: "text-emerald-100",
    purple: "text-purple-100",
  };

  const Icon = cred.icon;

  return (
    <div className={`bg-slate-900/50 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-slate-700 transition-colors`}>
      <div className="relative z-10 flex items-start gap-4">
        <div className={`p-3 rounded-lg border transition-colors ${colors[cred.color]} shrink-0`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className={`font-bold ${textColors[cred.color]} text-lg pr-4`}>{cred.title}</h3>
          </div>
          <div className="flex items-center gap-2 mt-1 mb-2">
            <span className="text-xs font-mono uppercase text-slate-500 tracking-wider">{cred.issuer}</span>
            <span className="text-slate-700">•</span>
            <span className="text-xs text-slate-500">{cred.year}</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{cred.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [copied, setCopied] = useState(false);
  
  const handleCopyEmail = async () => {
    try {
      // Attempt modern API first
      await navigator.clipboard.writeText(DATA.email);
      setCopied(true);
    } catch (err) {
      // Fallback for iframe/restricted environments
      try {
        const textArea = document.createElement("textarea");
        textArea.value = DATA.email;
        
        // Ensure it's not visible but part of the DOM
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopied(true);
        } else {
          console.error("Fallback copy failed.");
        }
      } catch (fallbackErr) {
        console.error("Unable to copy", fallbackErr);
      }
    }
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.15) 1px, transparent 0)`,
             backgroundSize: '32px 32px'
           }} 
      />

      {/* Toast Notification */}
      <div className={`fixed top-6 right-6 z-50 transform transition-all duration-300 ${copied ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-medium text-sm">
          <CheckCircle className="w-4 h-4" />
          Email copied to clipboard
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20">
        
        {/* --- HERO SECTION --- */}
        <header className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            SYSTEM ONLINE: AVAILABLE FOR HIRE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Roopesh <span className="text-slate-700">Rokade</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            I don't just prompt models. I architect <span className="text-white font-medium border-b border-emerald-500/50">Agentic Systems</span> that automate complex enterprise workflows.
          </p>

          <div className="flex flex-wrap gap-4">
             {/* Copy Email Button */}
            <button 
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-900/20"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Email"}
            </button>

            {/* Creative Resume Download Button */}
            <a 
              href={DATA.resumeUrl} 
              download="Roopesh_Rokade_Resume.pdf"
              className="group relative px-6 py-3 bg-slate-900 border border-slate-700 rounded-lg font-mono text-sm text-slate-400 overflow-hidden hover:text-emerald-400 hover:border-emerald-500/50 transition-all flex items-center"
            >
              <div className="absolute inset-0 w-0 bg-emerald-900/10 transition-all duration-[250ms] ease-out group-hover:w-full" />
              <div className="relative flex items-center gap-2">
                <span className="text-emerald-500 select-none">root@sys:~#</span>
                <span>curl -O resume.pdf</span>
                <Download className="w-4 h-4 ml-2 opacity-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all" />
              </div>
            </a>

            {/* LinkedIn Button */}
            <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white rounded-lg font-medium transition-all">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            
            <div className="px-6 py-3 flex items-center text-slate-500 text-sm font-mono">
              <Terminal className="w-4 h-4 mr-2" />
              {DATA.location}
            </div>
          </div>
        </header>

        {/* --- METRICS GRID --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 animate-slide-up">
          {DATA.metrics.map((m, i) => (
            <MetricCard key={i} {...m} />
          ))}
        </section>

        {/* --- CREATIVE TECH STACK (The "System" View) --- */}
        <section className="mb-24">
          <SectionHeader 
            icon={Layers} 
            title="Technical Architecture" 
            subtitle="My full-stack neural architecture, from Agentic Logic to Foundation."
          />
          
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {DATA.architecture.map((layer, i) => (
              <ArchitectureLayer 
                key={i} 
                layer={layer} 
                isLast={i === DATA.architecture.length - 1} 
              />
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section className="mb-24">
          <SectionHeader 
            icon={GitGraph} 
            title="System Evolution" 
            subtitle="From Mainframe reliability to Generative AI innovation."
          />
          <div className="mt-8">
            {DATA.experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section className="mb-24">
          <SectionHeader 
            icon={GraduationCap} 
            title="Academic Foundation" 
            subtitle="The kernel initialization of my engineering career."
          />
          <div className="mt-8">
            {DATA.education.map((edu, i) => (
              <EducationCard key={i} edu={edu} />
            ))}
          </div>
        </section>

        {/* --- CREDENTIALS & AWARDS --- */}
        <section className="mb-24">
          <SectionHeader 
            icon={Award} 
            title="Recognition & Credentials" 
            subtitle="Verified benchmarks of expertise and impact."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA.credentials.map((cred, i) => (
              <CredentialCard key={i} cred={cred} />
            ))}
          </div>
        </section>

        <footer className="border-t border-slate-800 pt-8 pb-12 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Roopesh Rokade. System Online.</p>
        </footer>

      </div>
    </div>
  );
}