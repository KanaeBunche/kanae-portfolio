import { ArrowRight, Mail, Code2 } from "lucide-react";
import christkid from "../assets/projects/christkid-preview.png";
import thinkwork from "../assets/projects/thinkwork-preview.png";
import koded from "../assets/projects/koded-preview.png";
import cybermissions from "../assets/projects/cybermissions-preview.png";
import fordham from "../assets/projects/fordham-preview.png";
import enbasketball from "../assets/projects/enbasketball.png";

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
  {
    title: "EN Basketball Academy",
    description:
      "Custom basketball academy website focused on athlete development, program registrations, scheduling, and lead generation.",
    image: enbasketball,
    tech: ["React", "Tailwind", "Supabase", "PostgreSQL", "Vercel"],
    live: "https://www.enbasketball.training/",
  },

  {
    title: "ThinkWork Basketball",
    description:
      "Basketball training platform featuring memberships, athlete resources, scheduling, and payment integrations.",
    image: thinkwork,
    tech: ["React", "Tailwind", "Stripe", "Calendly", "Vercel"],
    live: "https://www.thinkworkbasketball.com/",
  },

  {
    title: "Koded by Kanae",
    description:
      "Web design and development agency website built to convert visitors into clients through strategic design.",
    image: koded,
    tech: ["React", "Tailwind", "Formspree", "Vercel"],
    live: "https://www.kodedbykanae.com/",
  },

  {
    title: "Cybermissions Redesign",
    description:
      "Cybersecurity education platform redesign focused on user experience, accessibility, and mobile responsiveness.",
    image: cybermissions,
    tech: ["Figma", "React", "Tailwind", "UI/UX"],
    live: "https://www.cybermissions.org/",
  },

  {
    title: "Fordham AI Tools Platform",
    description:
      "AI resource platform concept designed to help students discover and access academic productivity tools.",
    image: fordham,
    tech: ["React", "Tailwind", "JavaScript", "Vite"],
    live: "https://www.loom.com/share/1f335e36b83e4037a82870195559750e",
  },

  {
    title: "ChristKid",
    description:
      "Faith-based ecommerce experience featuring modern branding, product showcases, and responsive design.",
    image: christkid,
    tech: ["React", "Tailwind", "Vite", "Vercel"],
    live: "https://christkid-llc.vercel.app/",
  },
];

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
  return (
    <main id="home" className="overflow-hidden bg-[#030712] text-white">
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
                  <span className="text-red-300">"UI/UX"</span>]
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

      <section id="projects" className="border-b border-white/10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-violet-400">
                Featured Projects
              </p>

              <h2 className="text-4xl font-black md:text-5xl">
                Real Websites. Real Results.
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/65">
                A collection of websites and web applications I’ve designed and
                developed using modern technologies, responsive design
                principles, and conversion-focused user experiences.
              </p>
            </div>

            <a
              href="#projects"
              className="hidden items-center gap-2 font-semibold text-violet-400 md:flex"
            >
              View All Projects <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
            <article
  key={project.title}
  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120] transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_20px_60px_rgba(124,58,237,0.25)]"
>
  <div className="overflow-hidden bg-black/30 p-3">
    <img
      src={project.image}
      alt={project.title}
className="h-56 w-full rounded-2xl object-cover object-top transition duration-700 group-hover:scale-[1.03]"    />
  </div>

  <div className="p-6">
    <h3 className="text-2xl font-black text-white">
      {project.title}
    </h3>

  <p className="mt-4 text-sm leading-7 text-white/70">
      {project.description}
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {project.tech.map((item) => (
        <span
          key={item}
          className="rounded-full border border-violet-400/20 bg-violet-500/20 px-4 py-2 text-sm font-semibold text-violet-200"
        >
          {item}
        </span>
      ))}
    </div>

    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.02]"
    >
      View Project <ArrowRight size={16} />
    </a>
  </div>
</article>
            ))}
          </div>
        </div>
      </section>

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
  );
}