import { LockKeyIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

import { animateOnScroll, fadeRight, fadeUp } from "../animation";
import { cn } from "../utils";

interface ProjectProps {
  title: string;
  tech: string;
  description: string;
  contributions: string[];
}

const projects: ProjectProps[] = [
  {
    title: "Athena - AI Chat Assistant",
    tech: "React / Express.js / Vercel AI SDK / Mem0 / MCP",
    description:
      "A context-aware AI assistant embedded in the admissions platform, acting as a proactive coach and reactive knowledge base for students.",
    contributions: [
      "Implemented Mem0 for cross-session long-term memory to provide personalized interactions.",
      "Built a secure Model Context Protocol (MCP) server for controlled access to live student data.",
      "Designed a 'Nudge' system to proactively re-engage users based on inactivity and session history.",
    ],
  },
  {
    title: "Dashboard UI - Counselor",
    tech: "React / Node.js / MongoDB / OpenAI (GPT-4o) / Tailwind CSS",
    description:
      "A unified dashboard streamlining pre-session workflows for counselors, aggregating student context and embedding an AI assistant for efficient planning.",
    contributions: [
      "Created a unified snapshot of student metrics (attendance, scores, grades) for instant context.",
      "Integrated LLM-powered summarization of past sessions to highlight action items and strategic pillars.",
      "Embedded the Athena AI assistant directly into the workflow with prep-tailored quick prompts.",
    ],
  },
  {
    title: "Dashboard UI - Crawler",
    tech: "React / TypeScript / MongoDB / Recharts / Tailwind CSS",
    description:
      "A comprehensive dashboard and orchestration layer for managing multi-stage web crawling operations, providing real-time visibility and control over data acquisition.",
    contributions: [
      "Developed a real-time dashboard visualizing pipeline KPIs, success rates, and error counts.",
      "Created interactive job controls for initiating crawls across data categories with immediate feedback.",
      "Implemented saturation monitoring to detect duplicate data spikes and optimize resource usage.",
    ],
  },
  {
    title: "AI-Assisted Crawler",
    tech: "TypeScript / Firecrawl / OpenAI / Grok / Google Places API",
    description:
      "A configurable, multi-stage crawling and enrichment pipeline that discovers, normalizes, enriches, and deduplicates opportunities data for downstream search and matching.",
    contributions: [
      "Designed a fault-tolerant, 5-stage pipeline for extraction, deduplication, enrichment, and storage.",
      "Implemented two-layer vector-based deduplication to reduce API costs and duplicate records.",
      "Built an orchestration layer to manage crawl lifecycles, token budgets, and error handling with Slack alerts.",
    ],
  },
  {
    title: "Data Maintenance Pipeline",
    tech: "LLMs (Grok, OpenAI) / Mapbox / Slack Integration",
    description:
      "An autonomous background maintenance system that validates, standardizes, and enriches dataset records to ensure data freshness and quality without manual intervention.",
    contributions: [
      "Implemented AI-driven updates using structured LLM outputs to parse and standardize records.",
      "Built automated link validation and geocoding enrichment for location-based data.",
      "Designed lifecycle management to identify and remove obsolete or incomplete records.",
    ],
  },
  {
    title: "End-to-End Testing Suite",
    tech: "Playwright / TypeScript / Node.js / Allure Report",
    description:
      "A comprehensive automated E2E testing suite ensuring platform reliability across complex user ecosystems and critical workflows for multiple user roles.",
    contributions: [
      "Constructed a role-based test architecture for targeted execution across 8 distinct user personas.",
      "Optimized authentication strategies by reusing session states to reduce test execution time.",
      "Integrated stealth mode techniques to mimic human behavior and bypass bot detection.",
    ],
  },
  {
    title: "Performance Testing Suite",
    tech: "TypeScript / k6 / Node.js / Webpack",
    description:
      "A robust performance testing framework designed to validate system scalability, identify bottlenecks, and ensure reliability under high-concurrency scenarios.",
    contributions: [
      "Simulated realistic user journeys (browsing, uploads, checkout) to mimic production usage.",
      "Implemented dynamic load generation to simulate organic traffic growth and spikes.",
      "Identified system breaking points and specific bottlenecks to guide infrastructure improvements.",
    ],
  },
];

const ProfessionalWork = () => {
  return (
    <section className="custom-container relative mb-32 px-4 sm:px-8 lg:px-12">
      <div id="professional-work" className="absolute -top-32"></div>

      <div className="grid grid-cols-5 gap-4 lg:grid-cols-6">
        <motion.div
          {...animateOnScroll(fadeRight)}
          className="col-span-5 mb-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:col-span-3 md:mb-6 lg:col-span-3"
        >
          <LockKeyIcon className="mt-1 shrink-0 text-xl text-yellow-500/80" />
          <p className="text-sm leading-relaxed text-gray-300">
            Due to Non-Disclosure Agreements (NDA), source code and live demos
            are not available. These case studies focus on the technical
            challenges and architectural decisions.
          </p>
        </motion.div>

        <motion.h2
          {...animateOnScroll(fadeRight)}
          className="col-span-3 mb-6 pl-6 subheading md:col-start-4"
        >
          &hellip; /Professional Work &hellip;
        </motion.h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProfessionalProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProfessionalProjectCard = ({
  title,
  tech,
  description,
  contributions,
}: ProjectProps) => {
  return (
    <motion.div
      {...animateOnScroll(fadeUp)}
      className={cn(
        "group relative cursor-default overflow-hidden rounded-4xl border-1 border-gray-200 p-5 sm:p-6",
        "flex flex-col justify-between transition-colors duration-600 ease-in-out hover:duration-800",
        "active:duration-800"
      )}
    >
      <div>
        <h4 className="mb-2 text-xl lg:text-2xl transition-colors duration-600 ease-in-out group-hover:text-gray-200 group-active:text-gray-200">
          {title}
        </h4>
        <div className="mb-4 flex flex-wrap gap-2 font-fira-code duration-600 ease-in-out group-hover:text-gray-200 group-active:text-gray-200">
          {tech}
        </div>

        <p className="mb-6 text-gray-100 transition-colors duration-600 ease-in-out group-hover:text-gray-200 group-active:text-gray-200">
          {description}
        </p>

        <ul className="mb-6 list-inside list-disc space-y-2 text-gray-100 transition-colors duration-600 ease-in-out group-hover:text-gray-200 group-active:text-gray-200">
          {contributions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <span
        className={cn(
          "absolute top-1/2 left-1/2 -z-1 m-[-75%] h-0 w-3/2 translate-z-0 scale-0 rounded-full",
          "bg-light-100 object-contain pt-[150%] opacity-100",
          "transition-all duration-600 ease-in-out group-hover:scale-100 group-hover:duration-800",
          "group-active:scale-100 group-active:duration-800"
        )}
      ></span>
    </motion.div>
  );
};

export default ProfessionalWork;
