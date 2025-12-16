import { InfoIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="custom-container relative mb-32 px-4 sm:px-8 lg:px-12">
      <div id="professional-work" className="absolute -top-32"></div>

      <div className="grid grid-cols-5 gap-4 lg:grid-cols-6">
        <motion.h2
          {...animateOnScroll(fadeRight)}
          className="col-span-5 md:col-span-3 mb-6 lg:pl-8 subheading md:col-start-3"
        >
          &hellip; /Professional Work &hellip;
          <span className="group relative inline-block ml-3 align-middle">
            <InfoIcon
              size={20}
              className="text-gray-400 hover:text-light-100 cursor-help transition-colors"
            />
            <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg border border-gray-700 bg-gray-200 p-3 font-sans text-xs font-normal tracking-normal text-light-100 normal-case opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-gray-700 bg-gray-200"></span>
              Due to Non-Disclosure Agreements (NDA), sensitive details, visual assets (screenshots, demos, etc.), and proprietary implementation specifics have been omitted.
            </span>
          </span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        {/* Left Column: Titles */}
        <motion.div
          {...animateOnScroll(fadeUp)}
          className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent flex w-full gap-2 overflow-x-auto pb-4 md:h-[330px] md:w-1/3 md:flex-col md:overflow-y-auto md:overflow-x-hidden md:pb-0 md:pr-2"
        >
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative flex shrink-0 items-center justify-between overflow-hidden rounded-2xl border px-6 py-4 text-left whitespace-nowrap transition-all duration-300 md:w-full md:whitespace-normal",
                activeIndex === index
                  ? "bg-light-100 border-light-100 text-dark-100"
                  : "border-gray-200 hover:border-light-100 hover:text-light-100 bg-transparent text-gray-100"
              )}
            >
              <span className="z-1 relative font-medium">{project.title}</span>
              {activeIndex === index && (
                <motion.span
                  layoutId="activeIndicator"
                  className="bg-light-100 absolute inset-0 z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Right Column: Details */}
        <motion.div {...animateOnScroll(fadeUp)} className="w-full md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-gray-200 p-6 sm:p-8"
            >
              <h3 className="text-light-100 mb-4 text-2xl lg:text-3xl">
                {projects[activeIndex].title}
              </h3>

              <div className="font-fira-code text-gray-100 mb-6 text-sm lg:text-base">
                <span className="text-light-100">Tech Stack:</span>{" "}
                {projects[activeIndex].tech}
              </div>

              <p className="text-gray-100 mb-8 leading-relaxed">
                {projects[activeIndex].description}
              </p>

              <div className="space-y-4">
                <h4 className="text-light-100 text-lg font-semibold">
                  Key Contributions:
                </h4>
                <ul className="list-inside list-disc space-y-3 text-gray-100">
                  {projects[activeIndex].contributions.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalWork;
