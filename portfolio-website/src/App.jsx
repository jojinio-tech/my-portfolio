import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck,
  Code2,
  Database,
  FileSpreadsheet,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Sparkles,
  Workflow,
  Zap,
  LineChart,
  PieChart,
  TrendingUp,
  Filter,
  RefreshCw,
  Layers,
} from "lucide-react";

const profile = {
  name: "Jojinio Moraldo",
  headline: "Data Analyst & Business Intelligence Developer",
  location: "Arima, Trinidad & Tobago",
  email: "jojinomoraldo18@gmail.com",
  github: "https://github.com/jojinio-tech?tab=repositories",
  resumePath: "/Jojinio_Moraldo_Resume_2026-05-20.pdf",
  summary:
    "I analyze business data and build intelligence solutions that transform raw information into actionable insights. Specializing in SQL databases, Python analytics, and interactive dashboards that help teams make informed decisions.",
  positioning:
    "My work bridges data engineering and analytics—combining SQL, Python, Power BI, and spreadsheet automation to create end-to-end reporting systems that non-technical users can understand and act on confidently.",
};

const navLinks = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const skillsWithIcons = [
  { name: "SQL", icon: Database, category: "Analytics" },
  { name: "Python", icon: Code2, category: "Analytics" },
  { name: "Power BI", icon: BarChart3, category: "Analytics" },
  { name: "Excel", icon: FileSpreadsheet, category: "Analytics" },
  { name: "Data Visualization", icon: PieChart, category: "Analytics" },
  { name: "Dashboard Design", icon: LineChart, category: "Analytics" },
  { name: "Data Cleaning", icon: Filter, category: "Data Engineering" },
  { name: "ETL Processes", icon: RefreshCw, category: "Data Engineering" },
  { name: "MySQL", icon: Database, category: "Databases" },
  { name: "PostgreSQL", icon: Database, category: "Databases" },
  { name: "Oracle", icon: Database, category: "Databases" },
  { name: "Google Sheets", icon: FileSpreadsheet, category: "Tools" },
  { name: "Apps Script", icon: Code2, category: "Tools" },
  { name: "Google Colab", icon: Layers, category: "Tools" },
  { name: "Trend Analysis", icon: TrendingUp, category: "Analytics" },
  { name: "Reporting", icon: BarChart3, category: "Analytics" },
  { name: "JavaScript", icon: Code2, category: "Development" },
  { name: "React", icon: Code2, category: "Development" },
  { name: "Flask", icon: Code2, category: "Development" },
  { name: "Automation", icon: Workflow, category: "Workflow" },
  { name: "Process Design", icon: Workflow, category: "Workflow" },
  { name: "Git/GitHub", icon: GitBranch, category: "Collaboration" },
];

const strengths = [
  {
    icon: BarChart3,
    title: "Data Analytics & Visualization",
    text:
      "I transform raw data into clear, actionable insights using SQL queries, Python analysis, and Power BI dashboards. My work helps teams understand trends, identify opportunities, and make data-driven decisions.",
  },
  {
    icon: Database,
    title: "Database & SQL Expertise",
    text:
      "I design efficient queries and data models in MySQL, PostgreSQL, and Oracle. I clean messy data, structure information logically, and build automated ETL pipelines that keep reporting systems reliable.",
  },
  {
    icon: FileSpreadsheet,
    title: "Spreadsheet Systems & Reporting",
    text:
      "I architect Excel and Google Sheets solutions that serve as accessible databases for non-technical users. Combined with dashboards, these systems provide real-time visibility into key business metrics.",
  },
  {
    icon: Workflow,
    title: "Business Intelligence Automation",
    text:
      "I design end-to-end workflows that automatically collect, process, and report on business data. From form submissions to dashboard updates, I eliminate manual reporting and reduce errors.",
  },
];

const projects = [
  {
    title: "Dynamic Appointment Scheduler",
    type: "Mobile-first scheduling system",
    tags: ["Google Apps Script", "Google Sheets", "Google Calendar", "Email Automation"],
    link:
      "https://script.google.com/macros/s/AKfycbwIKurLQvKfr3T22xM9uFqIm6dbrNzDoQNpaHXA9mxCzm-vAKKecckMUKvZuT36PJ5UhA/exec",
    problem:
      "Small and medium-sized businesses often need a simple way to collect appointment details, communicate with customers, and keep booking information organized without paying for a large scheduling platform.",
    solution:
      "This demo creates a dynamic web interface where customers can submit appointment information. After submission, the system sends a confirmation email, records the appointment in Google Sheets, and synchronizes the appointment with Google Calendar.",
    value:
      "The Google Sheet acts as the backend for both the webpage and calendar workflow. This makes the system easier for business users to inspect, update, and manage while still supporting automated appointment handling.",
    next:
      "Planned improvements include pricing options, dynamic appointment duration rules, automatic time allocation, service-based quotes, and stronger scheduling validation.",
  },
  {
    title: "Candy Wholesale Web Store Demo",
    type: "Spreadsheet-powered e-commerce demo",
    tags: ["Apps Script", "Spreadsheet CMS", "Cart Workflow", "Drive Image Linking"],
    link:
      "https://script.google.com/macros/s/AKfycbxiJfh1XggaEt2fEfsiO-5CoKLxJXaTT1Q5wneKgz9gRIxqIReXhTNvPB31oMlSp7-AdA/exec",
    problem:
      "A local candy business needed a simple product and ordering system that could be updated without requiring the owner to edit code or manage a complex website backend.",
    solution:
      "This one-page demo is dynamically powered by a Google workbook. Product details are pulled from spreadsheet data, customers can add items to a cart, checkout information is written to an order sheet, and customers receive HTML bill confirmations by email.",
    value:
      "The workbook supports inventory visibility, order tracking, and monthly summary information. The project also includes Google Drive image linking so product IDs and descriptions can be matched with product images when new items are added.",
    next:
      "Future improvements include a backend monthly report page, Power BI reporting, HTML management reports, PDF bill copies, and automatic folder allocation for organized document storage.",
  },
  {
    title: "Custom Spreadsheet Ribbon & Workflow Tools",
    type: "One-click spreadsheet automation",
    tags: ["Google Sheets", "Excel", "Custom Menus", "Automation Code"],
    link: "https://github.com/jojinio-tech?tab=repositories",
    problem:
      "Many business users rely on spreadsheets but spend too much time repeating the same formatting, sorting, organizing, and reporting steps manually.",
    solution:
      "I design custom spreadsheet ribbons, custom menus, and single-button automation workflows that perform tailored functions for users inside Google Sheets and Excel-based processes.",
    value:
      "These tools make complex workbooks easier to operate by hiding repetitive technical steps behind clear actions, helping users organize data, generate structured sheets, and complete repeated tasks faster.",
    next:
      "Possible improvements include reusable business templates, stronger validation, protected workflows, PDF exports, and dashboard-style reporting screens.",
  },
  {
    title: "University Collaboration Projects",
    type: "Collaborative development and research-based builds",
    tags: ["Feature Programming", "Genetic Algorithms", "Predictive Programming", "Educational Games"],
    link: "https://github.com/jojinio-tech?tab=repositories",
    problem:
      "University projects required teamwork, structured development, experimentation, and the ability to apply programming concepts to real prototypes and learning tools.",
    solution:
      "I collaborated on web platforms and technical projects involving feature programming, genetic algorithms, training datasets, predictive programming, math-based educational games, and web application development.",
    value:
      "These projects strengthened my experience with GitHub collaboration, applied programming, technical communication, testing ideas, optimization techniques, and turning concepts into working demonstrations.",
    next:
      "I am continuing to improve selected repositories with clearer documentation, stronger READMEs, better demos, and more polished project explanations.",
  },
];

const experience = [
  {
    date: "2025 — Present",
    title: "Administrative & Technical Assistant",
    company: "Chq 1 Business Solutions",
    bullets: [
      "Support payroll administration, NIS contributions, tax documentation, and business registration documents.",
      "Assist with client reporting, documentation accuracy, and internal workflow organization.",
      "Develop Excel-based automation and calculation tools to improve administrative efficiency.",
    ],
  },
  {
    date: "July 2025 — August 2025",
    title: "Quantity Surveying & Land Evaluation Intern",
    company: "QES & Associates Limited",
    bullets: [
      "Assisted with land and building valuation reports through structured data entry and system maintenance.",
      "Used Bluebeam to review, organize, and annotate technical drawings and documents.",
      "Supported drafting workflows by preparing digital records and maintaining documentation accuracy.",
    ],
  },
  {
    date: "Volunteer Experience",
    title: "Food Preparation & Small Business Support",
    company: "Family Business",
    bullets: [
      "Supported food preparation, customer service, and organization in a small-scale BBQ operation.",
      "Built reliability, teamwork, time management, and practical business awareness.",
    ],
  },
];

const education = [
  {
    school: "The University of the West Indies — St. Augustine",
    meta: "Bachelor of Science (Double Major)",
    detail:
      "Computer Science major completed with expertise in programming, systems architecture, databases, and web application development. Electronics major in progress, specializing in telecommunications systems engineering, network infrastructure design, and system maintenance protocols. Combined academic foundation supports both software intelligence and hardware-network integration.",
  },
  {
    school: "Hillview College",
    meta: "2015 — 2022",
    detail:
      "Completed secondary education with strong foundation in mathematics and technical sciences, establishing the academic groundwork for advanced university-level engineering and computer science studies.",
  },
];

const certifications = [
  "Project Management Foundations: Communication",
  "Project Management Foundations: Quality",
  "Time Management for Managers",
  "Employment Law Essentials for HR Professionals and Managers",
  "Business Law Fundamentals",
  "Improving Your Conflict Competence",
  "Occupational Safety and Health: Slips, Trips, and Falls",
  "Cisco Networking Foundations",
  "Learning IP Addressing",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function SectionHeader({ eyebrow, title, children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.65 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-amber-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-5 text-base leading-8 text-stone-300">{children}</p>}
    </motion.div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[2rem] border border-amber-600/20 bg-gradient-to-br from-stone-700/60 to-stone-750/50 shadow-lg shadow-amber-900/15 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

function SkillCloud() {
  // Group skills by category
  const skillsByCategory = skillsWithIcons.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryOrder = ["Analytics", "Data Engineering", "Databases", "Development", "Tools", "Workflow", "Collaboration"];
  const orderedCategories = categoryOrder.filter(cat => skillsByCategory[cat]);

  return (
    <div className="space-y-10">
      {orderedCategories.map((category) => (
        <motion.div
          key={category}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-6 flex items-center gap-3 border-b border-amber-600/20 pb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              {category}
            </h3>
            <div className="flex-grow border-b border-amber-600/10" />
          </div>
          
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-wrap justify-start gap-4"
          >
            {skillsByCategory[category].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="rounded-2xl border border-amber-600/40 bg-gradient-to-br from-stone-600/70 to-stone-700/60 p-5 text-amber-400 shadow-lg shadow-amber-900/20 transition hover:border-amber-500/60 hover:from-stone-600/90 hover:to-stone-700/80 hover:shadow-amber-900/30">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-stone-100">{skill.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen scroll-smooth bg-gradient-to-br from-stone-700 via-stone-750 to-stone-800 text-stone-100 selection:bg-amber-600 selection:text-stone-900">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-amber-700/30 blur-3xl" />
        <div className="absolute bottom-[-280px] right-[-180px] h-[620px] w-[620px] rounded-full bg-amber-800/25 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-amber-600/15 bg-gradient-to-b from-stone-700/95 to-stone-750/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-black tracking-tight text-white">
            Jojinio Moraldo
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-stone-300 md:flex">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-amber-400">
                {label}
              </a>
            ))}
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-amber-600/35 bg-amber-600/20 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:border-amber-500/60 hover:bg-amber-600/30 md:inline-flex"
          >
            GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
          <Menu className="h-6 w-6 text-stone-300 md:hidden" />
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.12fr_0.88fr] md:pb-28 md:pt-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.75 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-600/35 bg-gradient-to-r from-amber-600/25 to-amber-700/15 px-4 py-2 text-sm font-semibold text-amber-100 shadow-md shadow-amber-900/15">
            <Sparkles className="h-4 w-4" /> Where complexity becomes clarity
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight bg-gradient-to-r from-white via-stone-100 to-amber-100 bg-clip-text text-transparent md:text-7xl">
            Turn data into decisions.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-stone-300">
            {profile.summary}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-400">
            {profile.positioning}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-4 font-bold text-white shadow-xl shadow-amber-700/35 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-600/45"
            >
              View Projects <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-600/35 bg-amber-600/20 px-6 py-4 font-bold text-amber-100 transition hover:-translate-y-1 hover:border-amber-500/50 hover:bg-amber-600/30"
            >
              Explore GitHub <GitBranch className="h-5 w-5" />
            </a>
            <a
              href={profile.resumePath}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-600/25 bg-stone-800/60 px-6 py-4 font-bold text-stone-200 transition hover:-translate-y-1 hover:border-amber-600/45 hover:bg-stone-800/80"
            >
              Resume PDF <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-9 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-500" /> {profile.location}</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-amber-500" /> {profile.email}</span>
            <span className="inline-flex items-center gap-2"><Rocket className="h-4 w-4 text-amber-500" /> Analytics-focused</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Card className="p-5">
            <div className="rounded-[1.5rem] border border-amber-600/25 bg-gradient-to-br from-stone-600/60 to-stone-700/50 p-6">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">Data Analyst</p>
                  <h2 className="mt-3 text-3xl font-black text-white">{profile.name}</h2>
                  <p className="mt-2 leading-7 text-stone-300">{profile.headline}</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-amber-600/25 to-amber-700/15 p-3 text-amber-400 shadow-lg shadow-amber-900/15">
                  <Zap className="h-7 w-7" />
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  ["Primary focus", "SQL, Python, data visualization, dashboards"],
                  ["Business value", "Translate data into insights and decisions"],
                  ["Best fit", "Junior data analyst, BI developer, reporting specialist"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-amber-600/20 bg-stone-800/40 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone-400">{label}</p>
                    <p className="mt-2 font-semibold leading-7 text-stone-100">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      <section className="border-y border-amber-600/10 bg-gradient-to-r from-stone-700/50 to-stone-750/50 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-4">
          {[
            ["4+", "Featured project areas"],
            ["20+", "Analytics tools"],
            ["2", "Live apps"],
            ["2026", "Current focus"],
          ].map(([number, label]) => (
            <div key={label} className="rounded-3xl border border-amber-600/20 bg-gradient-to-br from-stone-700/70 to-stone-750/60 p-6 text-center shadow-md shadow-amber-900/10">
              <p className="text-3xl font-black bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">{number}</p>
              <p className="mt-2 text-sm leading-6 text-stone-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-600/25 to-amber-700/15 text-amber-400 shadow-md shadow-amber-900/15">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-amber-500">
                Technical Foundation
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                Data Analysis Toolkit
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-300">
                Core competencies in SQL, Python, visualization, and business intelligence—built for extracting insights from data and automating reporting workflows.
              </p>
            </div>
          </motion.div>
        </div>
        <SkillCloud />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeader eyebrow="Strengths" title="What I bring to analytics roles">
          I focus on building data systems that reveal insights and drive business decisions with clarity and precision.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-900/25">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600/25 to-amber-700/15 text-amber-400 shadow-md shadow-amber-900/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-stone-300">{item.text}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="bg-gradient-to-b from-stone-800/40 to-stone-850/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Featured Projects" title="Data systems & analytics work">
            These projects showcase experience with databases, dashboards, automation, and turning spreadsheets into structured data pipelines.
          </SectionHeader>

          <div className="grid gap-7">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.16 }}
                variants={fadeUp}
                transition={{ duration: 0.65, delay: index * 0.06 }}
              >
                <Card className="overflow-hidden transition hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-900/25">
                  <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                    <div className="border-b border-amber-600/15 bg-gradient-to-br from-stone-700/50 to-stone-750/40 p-7 lg:border-b-0 lg:border-r">
                      <p className="text-xs font-bold uppercase tracking-[0.32em] text-amber-500">Project {String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">{project.title}</h3>
                      <p className="mt-3 text-sm font-semibold text-stone-400">{project.type}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-amber-600/20 bg-amber-600/10 px-3 py-1 text-xs font-semibold text-stone-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {index === 2 ? (
                        <button
                          disabled
                          className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-stone-500 px-5 py-3 font-bold text-white cursor-not-allowed opacity-60"
                        >
                          Project Info Only <ArrowUpRight className="h-5 w-5" />
                        </button>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-3 font-bold text-white shadow-lg shadow-amber-700/30 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-600/40"
                        >
                          Open Demo / Repository <ArrowUpRight className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    <div className="grid gap-5 p-7 leading-8 text-stone-300">
                      <div>
                        <p className="mb-2 font-bold text-white">Problem</p>
                        <p>{project.problem}</p>
                      </div>
                      <div className="rounded-2xl border border-amber-600/20 bg-amber-600/10 p-5">
                        <p className="mb-2 font-bold text-white">Solution</p>
                        <p>{project.solution}</p>
                      </div>
                      <div className="rounded-2xl border border-amber-600/30 bg-gradient-to-br from-amber-600/15 to-amber-700/10 p-5">
                        <p className="mb-2 font-bold text-amber-200">Business value</p>
                        <p>{project.value}</p>
                      </div>
                      <div>
                        <p className="mb-2 font-bold text-white">Next improvements</p>
                        <p>{project.next}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Experience" title="Professional background">
          Hands-on experience with data organization, reporting systems, documentation, and operational improvement across multiple business contexts.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-7">
              <BriefcaseBusiness className="mb-5 h-10 w-10 text-amber-500" />
              <h3 className="text-2xl font-black text-white">Professional approach</h3>
              <p className="mt-5 leading-8 text-stone-300">
                I solve business problems with clear data analysis and maintainable systems. My experience spans documentation, reporting accuracy, and building systems that help teams make better decisions.
              </p>
            </Card>
          </motion.div>

          <div className="space-y-5">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.title}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Card className="p-6">
                  <p className="text-sm font-bold text-amber-500">{item.date}</p>
                  <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-1 text-stone-400">{item.company}</p>
                  <ul className="mt-4 space-y-2 leading-7 text-stone-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="border-y border-amber-600/10 bg-gradient-to-r from-stone-800/50 to-stone-850/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Education & Certifications" title="Academic foundation">
            Computer Science studies, technical training, and professional development in project management and business practices.
          </SectionHeader>

          <div className="grid gap-7 lg:grid-cols-2">
            <Card className="p-7">
              <GraduationCap className="mb-5 h-10 w-10 text-amber-500" />
              <h3 className="text-2xl font-black text-white">Education</h3>
              <div className="mt-6 space-y-5">
                {education.map((item) => (
                  <div key={item.school} className="rounded-2xl border border-amber-600/20 bg-gradient-to-br from-stone-700/60 to-stone-750/50 p-5 shadow-md shadow-amber-900/10">
                    <p className="font-black text-white">{item.school}</p>
                    <p className="mt-1 text-sm font-semibold text-amber-400">{item.meta}</p>
                    <p className="mt-3 leading-7 text-stone-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-7">
              <Award className="mb-5 h-10 w-10 text-amber-500" />
              <h3 className="text-2xl font-black text-white">Certifications</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <div key={cert} className="rounded-2xl border border-amber-600/20 bg-gradient-to-br from-stone-700/60 to-stone-750/50 p-4 text-sm font-medium leading-6 text-stone-300 shadow-md shadow-amber-900/10">
                    {cert}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <Card className="border-amber-600/30 bg-gradient-to-br from-amber-600/20 to-amber-700/10 p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-amber-300">Contact</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Let's build data-driven solutions together.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-stone-300">
              I'm open to opportunities in data analytics, business intelligence, reporting systems, data engineering, and helping organizations make better decisions through data.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-4 font-bold text-white shadow-xl shadow-amber-700/35 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-600/45"
              >
                Email Me <Mail className="h-5 w-5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-600/35 bg-amber-600/20 px-6 py-4 font-bold text-amber-100 transition hover:-translate-y-1 hover:border-amber-500/50 hover:bg-amber-600/30"
              >
                View GitHub <GitBranch className="h-5 w-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-600/25 bg-stone-800/60 px-6 py-4 font-bold text-stone-200 transition hover:-translate-y-1 hover:border-amber-600/45 hover:bg-stone-800/80"
              >
                Review Work <CalendarCheck className="h-5 w-5" />
              </a>
            </div>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}

export default App;
