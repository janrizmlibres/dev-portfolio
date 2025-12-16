import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

import { animateOnScroll, fadeRight } from "../animation";
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
          className="col-span-5 md:col-span-3 mb-6 lg:pl-8 subheading lg:col-start-3"
        >
          &hellip; /Professional Projects &hellip;
        </motion.h2>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Left Column: Titles */}
        <div className="flex w-full gap-2 overflow-x-auto pb-4 lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:h-[330px] lg:w-1/3 lg:pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative flex shrink-0 items-center justify-between overflow-hidden rounded-2xl border px-6 py-4 text-left transition-all duration-300 whitespace-nowrap lg:w-full lg:whitespace-normal",
                activeIndex === index
                  ? "bg-light-100 border-light-100 text-dark-100"
                  : "border-gray-200 hover:border-light-100 hover:text-light-100 text-gray-100 bg-transparent"
              )}
            >
              <span className="relative z-1 font-medium">{project.title}</span>
              {activeIndex === index && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute inset-0 z-0 bg-light-100"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right Column: Details */}
        <div className="w-full lg:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-gray-200 p-6 sm:p-8"
            >
              <h3 className="mb-4 text-2xl text-light-100 lg:text-3xl">
                {projects[activeIndex].title}
              </h3>
              
              <div className="mb-6 font-fira-code text-sm text-gray-100 lg:text-base">
                <span className="text-light-100">Tech Stack:</span>{" "}
                {projects[activeIndex].tech}
              </div>

              <p className="mb-8 text-gray-100 leading-relaxed">
                {projects[activeIndex].description}
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-light-100">Key Contributions:</h4>
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
        </div>
      </div>
    </section>
  );
};

export default ProfessionalWork;
