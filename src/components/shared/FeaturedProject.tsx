import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import ButtonPrompt from "./ButtonPrompt";
import ProjectDetails from "./ProjectDetails";
import { animateOnScroll, fadeUp } from "../../animation";
import type { Project } from "../../data";
import { cn } from "../../utils";

interface Props {
  project: Project;
  index: number;
}

const FeaturedProject = ({ project, index }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isEven = index % 2 === 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const hasMultipleImages = project.images.length > 1;

  return (
    <motion.div
      {...animateOnScroll(fadeUp)}
      className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12"
    >
      {/* Image Section */}
      <div className={cn("order-1", !isEven && "md:order-2")}>
        <div className="group relative block overflow-hidden rounded-2xl border border-white/10">
          <a
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-video w-full cursor-pointer overflow-hidden bg-dark-200"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </AnimatePresence>
          </a>

          {/* Overlay */}
          <a
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"
          />

          {/* Carousel Controls */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/70 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <CaretLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/70 group-hover:opacity-100"
                aria-label="Next image"
              >
                <CaretRight size={24} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentImageIndex(i);
                    }}
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all",
                      i === currentImageIndex
                        ? "w-4 bg-white"
                        : "bg-white/50 hover:bg-white/80"
                    )}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Link Icon - Centered */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ButtonPrompt iconName="Link" weight="regular" />
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className={cn("order-2", !isEven && "md:order-1")}>
        <ProjectDetails
          title={project.title}
          tools={project.tools}
          href={project.repoHref}
        >
          {project.description}
        </ProjectDetails>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
