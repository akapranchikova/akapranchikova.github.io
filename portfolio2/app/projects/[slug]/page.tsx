import Link from "next/link";
import { notFound } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";
import { getProjectBySlug, getProjectNeighbors, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getProjectNeighbors(project.slug);

  return (
    <div className="container project-page">
      <div className="project-nav">
        <div className="project-nav-group">
          {prev ? <Link href={`/projects/${prev.slug}`}>← Prev</Link> : <span>← Prev</span>}
          {next ? <Link href={`/projects/${next.slug}`}>Next →</Link> : <span>Next →</span>}
        </div>
        <Link href="/">✕ Back to home</Link>
      </div>

      <section className="project-hero">
        <OptimizedImage
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          className="project-hero-image"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
        />
        <div className="project-meta">
          <p>
            ({String(project.index).padStart(2, "0")}) {project.titleFull}
          </p>
          {project.year ? <p>{project.year}</p> : null}
          {project.description ? <p>{project.description}</p> : null}
        </div>
      </section>

      <section className="project-sections">
        {project.sections?.map((section) => (
          <article key={section.title} className="project-section">
            <h2>{section.title}</h2>
            {section.text ? <p>{section.text}</p> : null}
            <div className="project-grid">
              {section.images.map((image) => (
                <OptimizedImage
                  key={`${section.title}-${image.src}`}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="project-section-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

