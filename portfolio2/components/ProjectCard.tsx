import Link from "next/link";
import type { ReactNode } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const titlePosition = project.homeTitlePosition ?? "left";
  const titleSlotIndex = titlePosition === "left" ? 0 : titlePosition === "middle" ? 1 : 2;
  const slots: ReactNode[] = [null, null, null];
  const images = project.thumbnails.slice(0, 2);
  const imageSlotIndices = [0, 1, 2].filter((idx) => idx !== titleSlotIndex);

  slots[titleSlotIndex] = (
    <div className="project-title" key={`${project.slug}-title`}>
      <p>
        ({String(project.index).padStart(2, "0")}) {project.titleShort}
      </p>
      <p>{project.titleFull.replace(`${project.titleShort} `, "")}</p>
    </div>
  );

  images.forEach((image, idx) => {
    const slot = imageSlotIndices[idx];
    if (slot === undefined) return;

    slots[slot] = (
      <div key={`${project.slug}-${idx}`} className="project-media">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 30vw"
          priority={project.index === 1 && idx === 0}
        />
      </div>
    );
  });

  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      {slots}
    </Link>
  );
}
