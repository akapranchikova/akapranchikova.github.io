import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-title">
        <p>
          ({String(project.index).padStart(2, "0")}) {project.titleShort}
        </p>
        <p>{project.titleFull.replace(`${project.titleShort} `, "")}</p>
      </div>

      <div className="project-thumbs">
        {project.thumbnails.slice(0, 3).map((image, idx) => (
          <div key={`${project.slug}-${idx}`} className={`thumb thumb-${idx + 1}`}>
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 30vw"
              priority={project.index === 1 && idx === 0}
            />
          </div>
        ))}
      </div>
    </Link>
  );
}

