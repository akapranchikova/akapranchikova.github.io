import Link from "next/link";
import { notFound } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";
import { getProjectBySlug, getProjectNeighbors, projects } from "@/data/projects";
import type { ProjectImage } from "@/data/projects";

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

  if (project.slug === "skaty") {
    const skaty = {
      hero: {
        src: "/images/skaty/hero_skate.png",
        alt: "Skaty hero",
        width: 2933,
        height: 1960,
      } satisfies ProjectImage,
      row1: [
        { src: "/images/skaty/tag_skaty.jpg", alt: "Skaty tag", width: 4096, height: 2731 },
        { src: "/images/skaty/bag_skaty.jpg", alt: "Skaty bag", width: 3200, height: 4000 },
        { src: "/images/skaty2.jpg", alt: "Skaty storefront poster", width: 3000, height: 2000 },
      ] satisfies ProjectImage[],
      row2: [
        { src: "/images/skaty/hood_skaty.jpg", alt: "Skaty hoodie", width: 4000, height: 2671 },
        { src: "/images/skaty/t-shirt_skaty.jpg", alt: "Skaty t-shirt", width: 4096, height: 2731 },
        { src: "/images/skaty1.jpg", alt: "Skaty business card", width: 4096, height: 2730 },
      ] satisfies ProjectImage[],
      full: [
        { src: "/images/skaty/posters_skaty.jpg", alt: "Skaty posters", width: 4000, height: 3000 },
        { src: "/images/skaty/ig_skaty.png", alt: "Skaty Instagram set", width: 1320, height: 714 },
        { src: "/images/skaty/posters2_skaty.jpg", alt: "Skaty posters 2", width: 4000, height: 2667 },
      ] satisfies ProjectImage[],
      last: [
        { src: "/images/skaty/posters3_skaty.jpg", alt: "Skaty final mockup 1", width: 4000, height: 3000 },
        { src: "/images/skaty/posters4_skaty.jpg", alt: "Skaty final mockup 2", width: 3000, height: 2000 },
      ] satisfies ProjectImage[],
    };

    return (
      <div className="container project-page skaty-page" id="project-top">
        <div className="project-nav skaty-project-nav">
          <div className="project-nav-group">
            {prev ? <Link href={`/projects/${prev.slug}`}>←</Link> : <span>←</span>}
            {next ? <Link href={`/projects/${next.slug}`}>→</Link> : <span>→</span>}
          </div>
          <Link href="/" aria-label="Close project">
            ✕
          </Link>
        </div>

        <section className="skaty-intro">
          <h2>Skaty. Visual Identity for a Streetwear Brand</h2>
          <p>
            Skaty is a streetwear brand rooted in skate culture and street movement. The identity is
            built around speed, impact, and unpredictable urban rhythm.
          </p>
        </section>

        <section className="project-hero">
          <OptimizedImage
            src={skaty.hero.src}
            alt={skaty.hero.alt}
            width={skaty.hero.width}
            height={skaty.hero.height}
            className="project-hero-image"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="skaty-meta">
          <div className="skaty-meta-labels">
            <p>Logo</p>
            <p>Visuals</p>
          </div>
          <div className="skaty-meta-text">
            <p>Raw spray-can mark symbolizing rebellion and motion.</p>
            <p>Heat-map graphics representing speed, impact, and presence.</p>
          </div>
        </section>

        <section className="skaty-grid-three">
          {skaty.row1.map((image, idx) => (
            <OptimizedImage
              key={`row1-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
            />
          ))}
        </section>

        <section className="skaty-grid-three">
          {skaty.row2.map((image, idx) => (
            <OptimizedImage
              key={`row2-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
            />
          ))}
        </section>

        {skaty.full.map((image, idx) => (
          <section key={`full-${idx}-${image.src}`} className="skaty-full">
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
            />
          </section>
        ))}

        <section className="skaty-grid-last">
          {skaty.last.map((image, idx) => (
            <OptimizedImage
              key={`last-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          ))}
          <a href="#project-top" className="project-scroll-top" aria-label="Scroll to top">
            ↑
          </a>
        </section>
      </div>
    );
  }

  if (project.slug === "somera") {
    const somera = {
      hero: {
        src: "/images/somera/hero_somera.png",
        alt: "Somera hero",
        width: 3840,
        height: 2160,
      } satisfies ProjectImage,
      row1: [
        { src: "/images/somera/camille_somera.png", alt: "Somera Camille", width: 2912, height: 4096 },
        { src: "/images/somera/front_somera.png", alt: "Somera front", width: 1812, height: 4012 },
        { src: "/images/somera/back_somera.png", alt: "Somera back", width: 1812, height: 4012 },
      ] satisfies ProjectImage[],
      full1: {
        src: "/images/somera/bussnes-card-somera.png",
        alt: "Somera business card",
        width: 4096,
        height: 3072,
      } satisfies ProjectImage,
      row2: [
        { src: "/images/somera/ig1_somera.png", alt: "Somera IG 1", width: 1080, height: 1080 },
        { src: "/images/somera/ig2_somera.png", alt: "Somera IG 2", width: 1080, height: 1080 },
        { src: "/images/somera/ig3_somera.png", alt: "Somera IG 3", width: 1080, height: 1080 },
      ] satisfies ProjectImage[],
      row3: [
        { src: "/images/somera/box_somera.png", alt: "Somera box", width: 1080, height: 1350 },
        { src: "/images/somera/tag_somera.png", alt: "Somera tag", width: 4096, height: 2731 },
      ] satisfies ProjectImage[],
      row4: [
        { src: "/images/somera/ig4_somera.png", alt: "Somera IG 4", width: 1080, height: 1080 },
        { src: "/images/somera/box_somera.png", alt: "Somera box", width: 1080, height: 1350 },
      ] satisfies ProjectImage[],
      row5: [
        { src: "/images/somera/front1_somera.png", alt: "Somera front 1", width: 1209, height: 1853 },
        { src: "/images/somera/back1_somera.png", alt: "Somera back 1", width: 2418, height: 3706 },
        { src: "/images/somera/side1_somera.png", alt: "Somera side 1", width: 2418, height: 3706 },
      ] satisfies ProjectImage[],
      full2: {
        src: "/images/somera/posters_somera.png",
        alt: "Somera posters",
        width: 1920,
        height: 1080,
      } satisfies ProjectImage,
      full3: {
        src: "/images/somera/ig_full_somera.png",
        alt: "Somera IG full",
        width: 4096,
        height: 2304,
      } satisfies ProjectImage,
      row6: [
        { src: "/images/somera/posters2_somera.png", alt: "Somera posters 2", width: 4000, height: 3000 },
        { src: "/images/somera/box2_somera.png", alt: "Somera box 2", width: 3840, height: 2160 },
      ] satisfies ProjectImage[],
      row7: [
        { src: "/images/somera/posters3_somera.png", alt: "Somera posters 3", width: 1920, height: 1080 },
        { src: "/images/somera/posters4_somera.png", alt: "Somera posters 4", width: 3456, height: 2234 },
      ] satisfies ProjectImage[],
    };

    return (
      <div className="container project-page somera-page" id="project-top">
        <div className="project-nav skaty-project-nav">
          <div className="project-nav-group">
            {prev ? <Link href={`/projects/${prev.slug}`}>←</Link> : <span>←</span>}
            {next ? <Link href={`/projects/${next.slug}`}>→</Link> : <span>→</span>}
          </div>
          <Link href="/" aria-label="Close project">
            ✕
          </Link>
        </div>

        <section className="somera-intro">
          <h2>Somera. Botanical self-care</h2>
          <p>
            Somera is a beauty identity focused on sensory rituals, softness, and botanical
            textures. The system balances calm typography and tactile visuals.
          </p>
        </section>

        <section className="project-hero">
          <OptimizedImage
            src={somera.hero.src}
            alt={somera.hero.alt}
            width={somera.hero.width}
            height={somera.hero.height}
            className="project-section-image"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="somera-meta">
          <div className="somera-meta-labels">
            <p>Concept</p>
            <p>Visuals</p>
            <p>Mood</p>
          </div>
          <div className="somera-meta-text">
            <p>Botanical calm in a sensory ritual.</p>
            <p>Soft gradients, light and natural textures.</p>
            <p>Calm, warm, intimate.</p>
          </div>
        </section>

        <section className="somera-grid-three">
          {somera.row1.map((image, idx) => (
            <OptimizedImage
              key={`somera-row1-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
            />
          ))}
        </section>

        <section className="somera-full">
          <OptimizedImage
            src={somera.full1.src}
            alt={somera.full1.alt}
            width={somera.full1.width}
            height={somera.full1.height}
            className="project-section-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="somera-grid-three">
          {somera.row2.map((image, idx) => (
            <OptimizedImage
              key={`somera-row2-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
            />
          ))}
        </section>

        <section className="somera-grid-two">
          {somera.row3.map((image, idx) => (
            <OptimizedImage
              key={`somera-row3-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          ))}
        </section>

        <section className="somera-grid-two">
          {somera.row4.map((image, idx) => (
            <OptimizedImage
              key={`somera-row4-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          ))}
        </section>

        <section className="somera-grid-three">
          {somera.row5.map((image, idx) => (
            <OptimizedImage
              key={`somera-row5-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
            />
          ))}
        </section>

        <section className="somera-full">
          <OptimizedImage
            src={somera.full2.src}
            alt={somera.full2.alt}
            width={somera.full2.width}
            height={somera.full2.height}
            className="project-section-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="somera-full">
          <OptimizedImage
            src={somera.full3.src}
            alt={somera.full3.alt}
            width={somera.full3.width}
            height={somera.full3.height}
            className="project-section-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="somera-grid-two">
          {somera.row6.map((image, idx) => (
            <OptimizedImage
              key={`somera-row6-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          ))}
        </section>

        <section className="somera-grid-last">
          {somera.row7.map((image, idx) => (
            <OptimizedImage
              key={`somera-row7-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          ))}
          <a href="#project-top" className="project-scroll-top" aria-label="Scroll to top">
            ↑
          </a>
        </section>
      </div>
    );
  }

  if (project.slug === "profinder") {
    const profinder = {
      hero: { src: "/images/profinder/hero.png", alt: "Profinder hero", width: 3840, height: 2160 } satisfies ProjectImage,
      posters: {
        src: "/images/profinder/posters.jpg",
        alt: "Profinder posters",
        width: 4000,
        height: 3000,
      } satisfies ProjectImage,
      row1: [
        { src: "/images/profinder/hood.jpg", alt: "Profinder hoodie", width: 3000, height: 2000 },
        { src: "/images/profinder/phone.jpg", alt: "Profinder phone UI", width: 4000, height: 2668 },
      ] satisfies ProjectImage[],
      twoPosters: {
        src: "/images/profinder/two_posters.jpg",
        alt: "Profinder two posters",
        width: 3000,
        height: 2000,
      } satisfies ProjectImage,
      manyPosters: {
        src: "/images/profinder/many_posters.jpg",
        alt: "Profinder many posters",
        width: 3000,
        height: 2000,
      } satisfies ProjectImage,
      igRow1: [
        { src: "/images/profinder/ig1.png", alt: "Profinder IG 1", width: 1080, height: 1080 },
        { src: "/images/profinder/ig2.png", alt: "Profinder IG 2", width: 1080, height: 1080 },
        { src: "/images/profinder/ig3.png", alt: "Profinder IG 3", width: 1080, height: 1080 },
      ] satisfies ProjectImage[],
      igRow2: [
        { src: "/images/profinder/ig4.png", alt: "Profinder IG 4", width: 1080, height: 1080 },
        { src: "/images/profinder/ig5.png", alt: "Profinder IG 5", width: 1080, height: 1080 },
        { src: "/images/profinder/ig6.png", alt: "Profinder IG 6", width: 1080, height: 1080 },
      ] satisfies ProjectImage[],
      igRow3: [
        { src: "/images/profinder/ig7.png", alt: "Profinder IG 7", width: 1080, height: 1080 },
        { src: "/images/profinder/ig8.png", alt: "Profinder IG 8", width: 1080, height: 1080 },
        { src: "/images/profinder/ig9.png", alt: "Profinder IG 9", width: 1080, height: 1080 },
      ] satisfies ProjectImage[],
      poster: {
        src: "/images/profinder/poster.jpg",
        alt: "Profinder poster",
        width: 4096,
        height: 2731,
      } satisfies ProjectImage,
      bilboard: {
        src: "/images/profinder/bilboard.jpg",
        alt: "Profinder billboard",
        width: 4096,
        height: 2731,
      } satisfies ProjectImage,
    };

    return (
      <div className="container project-page profinder-page" id="project-top">
        <div className="project-nav skaty-project-nav">
          <div className="project-nav-group">
            {prev ? <Link href={`/projects/${prev.slug}`}>←</Link> : <span>←</span>}
            {next ? <Link href={`/projects/${next.slug}`}>→</Link> : <span>→</span>}
          </div>
          <Link href="/" aria-label="Close project">
            ✕
          </Link>
        </div>

        <section className="profinder-intro">
          <h2>Profinder. Service marketplace app</h2>
          <p>
            Profinder is a digital platform that connects service providers and customers through a
            clear, efficient UI focused on trust, speed, and everyday usability.
          </p>
        </section>

        <section className="project-hero">
          <OptimizedImage
            src={profinder.hero.src}
            alt={profinder.hero.alt}
            width={profinder.hero.width}
            height={profinder.hero.height}
            className="project-section-image"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="profinder-meta">
          <div className="profinder-meta-labels">
            <p>Visuals</p>
            <p>Logo</p>
            <p>Projects Focus</p>
          </div>
          <div className="profinder-meta-text">
            <p>Clarity, modernity, and reliability.</p>
            <p>
              The Profi icon and modern chain typography build recognition, trust, and a friendly
              tone.
            </p>
            <p>
              Designed to support approachable onboarding for all user groups and intuitive
              navigation.
            </p>
          </div>
        </section>

        <section className="profinder-full">
          <OptimizedImage
            src={profinder.posters.src}
            alt={profinder.posters.alt}
            width={profinder.posters.width}
            height={profinder.posters.height}
            className="project-section-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="profinder-grid-two">
          {profinder.row1.map((image, idx) => (
            <OptimizedImage
              key={`profinder-row1-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          ))}
        </section>

        <section className="profinder-full">
          <OptimizedImage
            src={profinder.twoPosters.src}
            alt={profinder.twoPosters.alt}
            width={profinder.twoPosters.width}
            height={profinder.twoPosters.height}
            className="project-section-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="profinder-full">
          <OptimizedImage
            src={profinder.manyPosters.src}
            alt={profinder.manyPosters.alt}
            width={profinder.manyPosters.width}
            height={profinder.manyPosters.height}
            className="project-section-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="profinder-grid-three">
          {profinder.igRow1.map((image, idx) => (
            <OptimizedImage
              key={`profinder-ig1-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
            />
          ))}
        </section>

        <section className="profinder-grid-three">
          {profinder.igRow2.map((image, idx) => (
            <OptimizedImage
              key={`profinder-ig2-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
            />
          ))}
        </section>

        <section className="profinder-grid-three">
          {profinder.igRow3.map((image, idx) => (
            <OptimizedImage
              key={`profinder-ig3-${idx}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="project-section-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
            />
          ))}
        </section>

        <section className="profinder-full">
          <OptimizedImage
            src={profinder.poster.src}
            alt={profinder.poster.alt}
            width={profinder.poster.width}
            height={profinder.poster.height}
            className="project-section-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="profinder-grid-last">
          <OptimizedImage
            src={profinder.bilboard.src}
            alt={profinder.bilboard.alt}
            width={profinder.bilboard.width}
            height={profinder.bilboard.height}
            className="project-section-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
          <a href="#project-top" className="project-scroll-top" aria-label="Scroll to top">
            ↑
          </a>
        </section>
      </div>
    );
  }

  if (project.slug === "non-fiction") {
    const books = {
      hero: {
        src: "/images/books/hero.jpg",
        alt: "Frankfurt Book Fair hero",
        width: 4096,
        height: 2731,
      } satisfies ProjectImage,
      flow: [
        { src: "/images/books/book1.jpg", alt: "Book fair visual 1", width: 4096, height: 2731 },
        { src: "/images/books/book2.jpg", alt: "Book fair visual 2", width: 1920, height: 1440 },
        { src: "/images/books/book3.jpg", alt: "Book fair visual 3", width: 1920, height: 1440 },
        { src: "/images/books/book4.jpg", alt: "Book fair visual 4", width: 1920, height: 1280 },
        { src: "/images/books/book5.jpg", alt: "Book fair visual 5", width: 1920, height: 1280 },
        { src: "/images/books/book6.jpg", alt: "Book fair visual 6", width: 4096, height: 2731 },
        { src: "/images/books/book7.jpg", alt: "Book fair visual 7", width: 1920, height: 1280 },
        { src: "/images/books/book8.jpg", alt: "Book fair visual 8", width: 1920, height: 2880 },
      ] satisfies ProjectImage[],
    };

    return (
      <div className="container project-page nonfiction-page" id="project-top">
        <div className="project-nav skaty-project-nav">
          <div className="project-nav-group">
            {prev ? <Link href={`/projects/${prev.slug}`}>←</Link> : <span>←</span>}
            {next ? <Link href={`/projects/${next.slug}`}>→</Link> : <span>→</span>}
          </div>
          <Link href="/" aria-label="Close project">
            ✕
          </Link>
        </div>

        <section className="nonfiction-intro">
          <h2>Frankfurt Book Fair (NON) FICTION</h2>
          <p>
            Poster and campaign system for a cultural event. Bright gradients and bold typography
            build a flexible identity across urban formats.
          </p>
        </section>

        <section className="project-hero">
          <OptimizedImage
            src={books.hero.src}
            alt={books.hero.alt}
            width={books.hero.width}
            height={books.hero.height}
            className="project-section-image"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
          />
        </section>

        <section className="nonfiction-flow">
          {books.flow.map((image, idx) => (
            <div key={`books-flow-${idx}-${image.src}`} className="nonfiction-flow-item">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="project-section-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1320px"
              />
            </div>
          ))}
        </section>

        <div className="nonfiction-scroll-wrap">
          <a href="#project-top" className="project-scroll-top" aria-label="Scroll to top">
            ↑
          </a>
        </div>
      </div>
    );
  }

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
