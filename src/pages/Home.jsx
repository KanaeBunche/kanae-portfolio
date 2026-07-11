import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Mail, Code2 } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const resumePDF = "/Kanae-Bunche-Resume.pdf";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaGoogle,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiFirebase,
} from "react-icons/si";

import { TbBrandVercel } from "react-icons/tb";

const projects = [
  // {
  //   title: "EN Basketball Academy",
  //   description:
  //     "Custom basketball academy platform for program registration, evaluations, payments, scheduling, and athlete management.",
  //   image: "/Websites/enbasketball.png",
  //   tech: ["React", "Tailwind", "Supabase", "Stripe", "Vercel"],
  //   live: "https://www.enbasketball.training/",
  // },

  {
  id: "thinkwork",
  title: "ThinkWork Basketball",
  type: "Live Client",
  industry: "Sports Training Platform",
  image: "/Websites/thinkworkbasketball-13.png",
  live: "https://www.thinkworkbasketball.com/",

  shortDescription:
    "A full-stack basketball training platform with custom scheduling, session packages, payments, automated confirmations, and a Supabase-powered management dashboard.",

  overview:
    "ThinkWork Basketball needed more than a polished website. The business needed a complete system for turning interested athletes into registered clients, managing training availability, organizing session packages, and reducing the amount of manual communication required to run the program.",

  challenge:
    "The existing process relied heavily on direct messages and manual coordination. Clients needed a clearer way to understand the available training packages, select the right option, book within Coach Pree’s availability, and receive confirmation without creating additional administrative work for the business.",

  solution:
    "I designed and developed a custom full-stack platform that combines the public-facing website with a structured booking and management system. Clients can explore training packages, register for sessions, select from controlled availability windows, and receive automated confirmations. Behind the scenes, a private Supabase-powered dashboard allows the business to manage athletes, track payments, monitor completed sessions, search registrations, and manually add or remove clients when needed.",

  role: [
    "UX/UI Design",
    "Front-End Development",
    "Database Architecture",
    "Supabase Integration",
    "Custom Scheduling Logic",
    "Dashboard Development",
    "Payment Integration",
    "Email Automation",
    "Deployment",
    "Ongoing Website Management",
  ],

  features: [
    "Custom booking and scheduling system",
    "Controlled availability windows",
    "Training package selection",
    "Stripe payment integration",
    "Supabase database",
    "Private management dashboard",
    "Athlete registration tracking",
    "Paid-status management",
    "Completed-session tracking",
    "Manual client entry and removal",
    "Search and filtering tools",
    "Automated registration confirmations",
    "Responsive mobile experience",
  ],

  tech: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Stripe",
    "Resend",
    "Vercel",
  ],
},

  // {
  //   title: "Koded by Kanae",
  //   description:
  //     "Web design and development agency website built to convert visitors into clients through strategic design.",
  //   image: "/Websites/koded-preview.png",
  //   tech: ["React", "Tailwind", "Formspree", "Vercel"],
  //   live: "https://www.kodedbykanae.com/",
  // },

  {
    title: "Cybermissions Redesign",
    description:
      "Cybersecurity education platform redesign focused on user experience, accessibility, and mobile responsiveness.",
    image: "/Websites/cybermissons-14.png",
    tech: ["Figma", "React", "Tailwind", "UI/UX"],
    live: "https://www.cybermissions.org/",
  },

  // {
  //   title: "Fordham AI Tools Platform",
  //   description:
  //     "AI resource platform concept designed to help students discover and access academic productivity tools.",
  //   image: "/Websites/fordham-preview.png",
  //   tech: ["React", "Tailwind", "JavaScript", "Vite"],
  //   live: "https://www.loom.com/share/1f335e36b83e4037a82870195559750e",
  // },

  {
    title: "ChristKid",
    description:
      "Faith-based ecommerce experience featuring modern branding, product showcases, and responsive design.",
    image: "/Websites/christ-kid-web-3.png",
    tech: ["React", "Tailwind", "Vite", "Vercel"],
    live: "https://christkid-llc.vercel.app/",
  },

  {
    title: "Umber Coffee",
    description:
      "Full online ordering system for a coffee shop — order ahead, coffee club, gift cards, and rewards, with owner and staff dashboards.",
    image: "/Websites/coffee-web-4.png",
    tech: ["React", "Vite", "Tailwind", "Vercel"],
    live: "https://umber-coffee-gay8.vercel.app/",
  },

  {
    title: "WorkOrder Car Detailing",
    description:
      "Service-ticket booking flow styled like a real work order — package selection, slot booking, and automatic confirmations.",
    image: "/Websites/car-detailing-web-10.png",
    tech: ["React", "Vite", "Framer Motion", "Vercel"],
    live: "https://concur-8smb.vercel.app/",
  },

  {
    title: "KUTS Barbershop",
    description:
      "Editorial barbershop site that makes a local shop feel like a brand — services, barber profiles, and instant booking.",
    image: "/Websites/barbershop-web-2.png",
    tech: ["React", "Vite", "Framer Motion", "Vercel"],
    live: "https://k-utz.vercel.app/",
  },

  {
    title: "Iron Hours Gym",
    description:
      "Membership-focused gym site with class schedules, trainer profiles, and sign-up flows built to convert walk-ins into members.",
    image: "/Websites/gym-web-6.png",
    tech: ["React", "Vite", "Tailwind", "Vercel"],
    live: "https://iron-hours-gym.vercel.app/",
  },

  {
    title: "House of Shua",
    description:
      "Book club community hub with an event calendar, member sign-ups, and current-read features to help the club grow.",
    image: "/Websites/shua-house-8.png",
    tech: ["React", "Vite", "Framer Motion", "Vercel"],
    live: "https://book-club-iota-eosin.vercel.app/",
  },

  {
    title: "Tony Giving Fundraiser",
    description:
      "Fundraising site built to move people to give — clear storytelling, goal tracking, and a frictionless path to donate and share.",
    image: "/Websites/fundraiser-web-5.png",
    tech: ["React", "Vite", "Tailwind", "Vercel"],
    live: "https://tony-fcc-fundraiser.vercel.app/",
  },

  {
    title: "Phone Case Shop",
    description:
      "Product storefront with clean product pages and a checkout flow — a blueprint for how product businesses should sell online.",
    image: "/Websites/phone-case-11.png",
    tech: ["React", "Vite", "Tailwind", "Vercel"],
    live: "https://my-app-delta-coral.vercel.app/",
  },

  {
    title: "NOIR MUSEUM",
    description:
      "A cinematic digital museum — gallery rooms, pacing, and atmosphere that prove a website can be an experience, not a brochure.",
    image: "/Websites/museum-web-7.png",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    live: "https://noir-museum-eyt1.vercel.app/",
  },

  {
    title: "STRIDE Dog Walking",
    description:
      "Premium dog walking service brand — booking flow, service tiers, live walk tracking, and trust-building design that justifies higher prices.",
    image: "/Websites/dog-walking-12.png",
    tech: ["React", "Vite", "Framer Motion", "Vercel"],
    live: "https://stride-dog-walking.vercel.app/",
  },

  {
    title: "Spider-Man Promo",
    description:
      "Interactive fan promo experience showcasing advanced animation and layout work — the fun build that proves range.",
    image: "/Websites/spider-man-9.png",
    tech: ["React", "Vite", "Framer Motion", "Vercel"],
    live: "https://spider-man-promo.vercel.app/",
  },

  {
    title: "Other Life",
    description:
      "Deep-space receiver experience with generative audio, a boot sequence, and a scroll-reactive HUD — a website as an immersive world.",
    image: "/Websites/alien-web-1.png",
    tech: ["React", "Vite", "Tone.js", "Vercel"],
    live: "https://aliens-gray.vercel.app/",
  },
];


const featuredProjectMeta = {
  "ThinkWork Basketball": {
    slug: "thinkwork-basketball",
    type: "Live Client",
    industry: "Sports Training",
    summary: "A booking and scheduling system designed to turn interest into paid training sessions.",
    challenge: "The business needed one clear place for athletes to understand packages, find available training times, and register without back-and-forth messages.",
    solution: "I designed and developed a responsive training platform that organizes packages, scheduling, payments, and automated confirmations into one streamlined experience.",
    features: ["Training package presentation", "Scheduling and booking flow", "Payment integration", "Mobile-first experience"],
    role: "Strategy, UI design, front-end development, booking architecture",
  },
  "Cybermissions Redesign": {
    slug: "cybermissions",
    type: "Live Client",
    industry: "Global Nonprofit",
    summary: "A modern redesign for a ministry platform serving a large international audience.",
    challenge: "The existing website needed a clearer visual hierarchy and a more modern, accessible experience across desktop and mobile devices.",
    solution: "I reorganized the content, modernized the interface, and created a responsive system that makes the ministry's mission and resources easier to understand.",
    features: ["Responsive redesign", "Improved content hierarchy", "Accessibility-minded UI", "Global audience support"],
    role: "UI/UX design, front-end development, responsive implementation",
  },
  "Fordham AI Tools Platform": {
    slug: "fordham-ai-tools",
    type: "Professional Project",
    industry: "Education Technology",
    summary: "A searchable resource experience helping students discover useful academic AI tools.",
    challenge: "Students needed a simple way to discover AI tools without sorting through an overwhelming amount of disconnected information.",
    solution: "I helped shape a searchable, category-based resource platform that makes relevant tools easier to discover and compare.",
    features: ["Search and filtering", "Tool categorization", "Student-focused interface", "Responsive resource library"],
    role: "Product thinking, interface design, front-end development",
  },
  "ChristKid": {
    slug: "christkid",
    type: "Live Client",
    industry: "Faith-Based Brand",
    summary: "A branded digital home combining products, content, events, and community.",
    challenge: "The brand needed a digital presence that felt cohesive and gave visitors a clear way to explore its message, products, and community.",
    solution: "I created a modern, faith-centered experience that unifies the brand's story, merchandise, content, and events.",
    features: ["Brand storytelling", "Product showcases", "Event content", "Responsive design"],
    role: "Creative direction, UI design, development",
  },
  "Umber Coffee": {
    slug: "umber-coffee",
    type: "Concept",
    industry: "Coffee · E-Commerce",
    summary: "A premium café concept with ordering, rewards, gift cards, and operational dashboards.",
    challenge: "Most café websites stop at menus and location information instead of supporting repeat purchases and customer loyalty.",
    solution: "I designed a full digital coffee experience that combines order-ahead functionality, rewards, gift cards, and owner-facing operations.",
    features: ["Online ordering", "Coffee rewards", "Gift cards", "Owner and staff dashboards"],
    role: "Concept, brand direction, product design, development",
  },
  "KUTS Barbershop": {
    slug: "kuts-barbershop",
    type: "Concept",
    industry: "Local Service Brand",
    summary: "An editorial booking experience designed to make a neighborhood shop feel iconic.",
    challenge: "Local barbershop websites often look generic and fail to communicate the personality or quality of the shop.",
    solution: "I created a bold editorial experience that positions the shop as a distinct brand while keeping services and booking easy to access.",
    features: ["Instant booking", "Barber profiles", "Service presentation", "Editorial motion design"],
    role: "Concept, art direction, UI design, motion, development",
  },
  "NOIR MUSEUM": {
    slug: "noir-museum",
    type: "Concept",
    industry: "Digital Art Experience",
    summary: "A cinematic gallery experience built around atmosphere, pacing, and visual storytelling.",
    challenge: "The goal was to prove that an art website could feel like entering an exhibition rather than browsing a standard image grid.",
    solution: "I built a monochrome digital museum that uses scale, whitespace, motion, and controlled pacing to create an immersive gallery experience.",
    features: ["Cinematic scrolling", "Gallery storytelling", "Monochrome art direction", "Responsive exhibition layout"],
    role: "Creative direction, experience design, motion, development",
  },
  "Other Life": {
    slug: "other-life",
    type: "Concept",
    industry: "Interactive Experience",
    summary: "An immersive sci-fi world with generative audio, motion, and a scroll-reactive interface.",
    challenge: "I wanted to explore how far a browser experience could move beyond conventional portfolio layouts and feel like an interactive world.",
    solution: "I created a deep-space receiver experience with a boot sequence, generative sound, reactive interface elements, and cinematic movement.",
    features: ["Generative audio", "Boot sequence", "Scroll-reactive HUD", "Immersive motion"],
    role: "Concept, interaction design, sound direction, development",
  },
};

const projectMeta = {
  ...featuredProjectMeta,
  "EN Basketball Academy": {
    type: "Live Client", industry: "Sports Training",
    summary: "A registration, payment, scheduling, and athlete-management platform built for a growing basketball academy.",
    challenge: "The academy needed one reliable system for evaluations, registrations, payments, scheduling, and student records.",
    solution: "I created a responsive platform that connects the public website with registration flows and an internal management dashboard.",
    features: ["Program registration", "Evaluation booking", "Online payments", "Athlete dashboard"],
    role: "Strategy, UI design, full-stack development, systems integration",
  },
};

function prepareProject(project) {
  const custom = projectMeta[project.title] || {};
  return {
    ...project,
    type: custom.type || (project.title.includes("ThinkWork") || project.title.includes("Cybermissions") || project.title.includes("ChristKid") || project.title.includes("EN Basketball") ? "Live Client" : "Concept Project"),
    industry: custom.industry || "Web Design & Development",
    summary: custom.summary || project.description,
    challenge: custom.challenge || `Create a distinctive, responsive digital experience for ${project.title} without relying on a generic industry template.`,
    solution: custom.solution || `I translated the concept into a focused visual system, responsive interface, and polished interactive experience using modern front-end tools.`,
    features: custom.features || ["Responsive design", "Clear content hierarchy", "Custom visual direction", "Interactive user experience"],
    role: custom.role || "Creative direction, UI design, front-end development",
  };
}

const caseStudyProjects = projects.map(prepareProject);

function CaseStudyPage({ project, projects: allProjects, onBack, onSelectProject }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project.title]);

  const currentIndex = allProjects.findIndex((item) => item.title === project.title);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <motion.main
      key={project.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen overflow-x-clip bg-[#030712] text-white"
    >
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/85 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-white"
          >
            <span aria-hidden="true">←</span> Back to portfolio
          </button>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold transition hover:border-violet-400 hover:bg-violet-500/10"
          >
            Live project <ExternalLink size={14} />
          </a>
        </div>
      </nav>

      <header className="px-6 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-violet-300">
            {project.type} · {project.industry}
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-8xl">
            {project.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
            {project.summary}
          </p>
        </div>
      </header>

      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1120]">
          <img
            src={project.image}
            alt={project.title}
            className="block h-auto w-full"
          />
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-400">Project overview</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">My role</p>
                <p className="mt-2 text-sm leading-7 text-white/65">{project.role}</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">Built with</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-400">The challenge</p>
              <p className="mt-5 text-2xl font-semibold leading-[1.45] tracking-[-0.025em] text-white/85 md:text-4xl">
                {project.challenge}
              </p>
            </section>
            <section>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-400">The solution</p>
              <p className="mt-5 text-lg leading-9 text-white/65 md:text-xl">
                {project.solution}
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-400">Key features</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl">
              What the experience was built to do.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <div key={feature} className="bg-[#070b14] p-7 md:p-9">
                <p className="font-mono text-xs text-violet-300">0{index + 1}</p>
                <h3 className="mt-6 text-xl font-bold tracking-tight md:text-2xl">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-400">Next project</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-6xl">{nextProject.title}</h2>
          </div>
          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-bold text-[#030712] transition hover:bg-violet-200"
          >
            View next case study <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </motion.main>
  );
}

function ProjectsShowcase({ onSelectProject }) {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const featuredProjects = caseStudyProjects;

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(trackRef.current);
    observer.observe(viewportRef.current);
    window.addEventListener("load", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative border-b border-white/10 bg-[#030712]"
      style={{ height: `${Math.max(360, featuredProjects.length * 48)}vh` }}
    >
      <div ref={viewportRef} className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mb-8 flex items-end justify-between gap-8 px-6 md:px-[8vw]">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-violet-400">Projects & Case Studies</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-5xl">All projects. One focused experience.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/55">
              Client work and original concepts, presented through a clean horizontal gallery. Select any project to open its full case study.
            </p>
          </div>
          <p className="hidden shrink-0 pb-2 font-mono text-xs uppercase tracking-[0.2em] text-white/35 md:block">Scroll to explore →</p>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-6 pl-6 pr-6 md:gap-8 md:pl-[8vw] md:pr-[8vw]">
          {featuredProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => onSelectProject(project)}
              className="group w-[84vw] max-w-[760px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1120] text-left"
            >
              <div className="relative overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  className="block h-auto w-full transition duration-700 group-hover:scale-[1.015]"
                />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/75 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/75 backdrop-blur-md">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-300">
                  {project.industry}
                </p>

                <h3 className="mt-2 text-3xl font-black tracking-[-0.035em] md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                  {project.summary}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                  View case study
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </button>
          ))}
        </motion.div>

        <div className="mx-6 mt-8 h-px bg-white/10 md:mx-[8vw]">
          <motion.div className="h-px bg-violet-400" style={{ width: progress }} />
        </div>
      </div>
    </section>
  );
}

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
  { name: "Vite", icon: <SiVite className="text-violet-400" /> },
  { name: "Vercel", icon: <TbBrandVercel className="text-white" /> },
  { name: "Google Cloud", icon: <FaGoogle className="text-blue-300" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = caseStudyProjects;

  return (
    <AnimatePresence mode="wait">
      {selectedProject ? (
        <CaseStudyPage
          project={selectedProject}
          projects={featuredProjects}
          onBack={() => setSelectedProject(null)}
          onSelectProject={setSelectedProject}
        />
      ) : (
    <main key="portfolio" id="home" className="overflow-x-clip bg-[#030712] text-white">
      <section className="relative border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(124,58,237,0.22),transparent_32%),radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.08),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-2xl font-bold text-violet-400">
              Hi, I’m
            </p>

            <h1 className="text-6xl font-black leading-none md:text-8xl">
              Kanae
              <br />
              <span className="bg-gradient-to-r from-violet-300 to-violet-600 bg-clip-text text-transparent">
                Bunche.
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold md:text-3xl">
             Full-Stack Developer • Web Designer • Technical Consultant
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
              I build clean, modern, and responsive web experiences that are
              user-focused and impactful.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-lg bg-violet-600 px-7 py-4 font-bold text-white transition hover:bg-violet-500"
              >
                View My Work <ArrowRight size={18} />
              </a>

              <a
                href={resumePDF}
                download
                className="inline-flex items-center gap-3 rounded-lg border border-violet-500/50 px-7 py-4 font-bold text-white transition hover:bg-violet-500/10"
              >
                Download Resume <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex gap-6 text-white/70">
              <a
                href="https://github.com/KanaeBunche"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-violet-400"
              >
                <Code2 size={26} />
              </a>

              <a
                href="mailto:kodedbykanae@gmail.com"
                className="transition hover:text-violet-400"
              >
                <Mail size={26} />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b1120]/80 shadow-2xl shadow-violet-950/30 backdrop-blur-xl">
              <div className="flex gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-3 p-8 font-mono text-sm leading-8 text-white/75">
                <p>
                  <span className="text-violet-400">const</span> developer ={" "}
                  {"{"}
                </p>
                <p className="pl-6">
                  name: <span className="text-green-300">"Kanae Bunche"</span>,
                </p>
                <p className="pl-6">
                  role:{" "}
                  <span className="text-sky-300">"Full-Stack Developer"</span>,
                </p>
                <p className="pl-6">
                  passion:{" "}
                  <span className="text-yellow-200">
                    "Building beautiful digital experiences"
                  </span>,
                </p>
                <p className="pl-6">
                  skills: [
                  <span className="text-red-300">"React"</span>,{" "}
                  <span className="text-red-300">"Tailwind CSS"</span>,{" "}
                  <span className="text-red-300">"JavaScript"</span>,{" "}
                  <span className="text-red-300">"UI/UX"</span>,{" "}
                  <span className="text-red-300">"Supabase"</span>]
                </p>
                <p>{"};"}</p>
                <p className="pt-4 text-white/30">
                  // Always learning. Always building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-violet-400">
              About Me
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Get to know me.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/65">
              I’m a front-end developer and web designer who enjoys turning
              ideas into clean, functional, and visually appealing websites. I
              focus on responsive layouts, user-friendly design, and polished
              digital experiences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
  ["Education", "Political Science Degree", "SUNY Plattsburgh"],
  ["Software Engineering", "Full Stack Engineering Certificate", "Flatiron School (2023)"],
  ["IT Certification", "IT Professional Certificate", "CourseCareers (2024)"],
  ["Focus", "Full-Stack Development", "React, Databases, Cloud & Responsive UI"],
].map(([title, main, sub]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-violet-400">{title}</p>
                <h3 className="mt-3 font-bold">{main}</h3>
                <p className="mt-1 text-sm text-white/55">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsShowcase onSelectProject={setSelectedProject} />

      <section id="skills" className="border-b border-white/10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-violet-400">
            Skills & Tools
          </p>

          <h2 className="text-3xl font-black md:text-4xl">
            Technologies I work with.
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
            {skills.map((skill) => (
              <div key={skill.name} className="group text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-3xl transition group-hover:border-violet-500/50 group-hover:bg-violet-500/10">
                  {skill.icon}
                </div>

                <p className="text-sm text-white/70">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-xl font-black tracking-tight text-white">
              Kanae Bunche
            </h3>

            <p className="mt-2 text-sm text-white/45">
              Software Engineer • Web Designer • Creative Developer
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/KanaeBunche"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-white/70 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kanae-bunche/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-white/70 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://www.kodedbykanae.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-white/70 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              Koded by Kanae
            </a>

            <a
              href="mailto:kodedbykanae@gmail.com"
              className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/20"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-center text-xs text-white/35">
          © 2026 Kanae Bunche. All rights reserved.
        </div>
      </footer>
    </main>
      )}
    </AnimatePresence>
  );
}