"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type Tab = "graphic" | "uxui";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>("graphic");

  const visibleProjects = useMemo(
    () => projects.filter((project) => project.category === activeTab),
    [activeTab],
  );

  return (
    <div className="container portfolio-page">
      <section className="category-tabs" aria-label="Project categories">
        <button
          type="button"
          className={activeTab === "graphic" ? "active" : ""}
          onClick={() => setActiveTab("graphic")}
        >
          Graphic Design
        </button>
        <button
          type="button"
          className={activeTab === "uxui" ? "active" : ""}
          onClick={() => setActiveTab("uxui")}
        >
          UX/UI Design
        </button>
      </section>

      <section className="projects-list" aria-label="Projects list">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <button
        type="button"
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}

