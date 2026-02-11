export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectSection = {
  title: string;
  text?: string;
  images: ProjectImage[];
};

export type Project = {
  slug: string;
  index: number;
  titleShort: string;
  titleFull: string;
  category: "graphic" | "uxui";
  year?: string;
  cover: ProjectImage;
  thumbnails: ProjectImage[];
  description?: string;
  sections?: ProjectSection[];
  links?: {
    behance?: string;
    instagram?: string;
  };
};

const imageSet = {
  tall: { src: "/images/placeholder-tall.svg", alt: "Project preview", width: 720, height: 1040 },
  wide: { src: "/images/placeholder-wide.svg", alt: "Project preview", width: 960, height: 640 },
  square: { src: "/images/placeholder-square.svg", alt: "Project preview", width: 800, height: 800 },
};

export const projects: Project[] = [
  {
    slug: "skaty",
    index: 1,
    titleShort: "Skaty.",
    titleFull: "Skaty. Visual Identity for a Streetwear Brand",
    category: "graphic",
    year: "2024",
    cover: imageSet.tall,
    thumbnails: [imageSet.tall, imageSet.wide, imageSet.square],
    description: "Visual identity and launch campaign for a streetwear brand.",
    sections: [
      {
        title: "Logo",
        text: "Core marks, typographic treatment and logo usage principles.",
        images: [imageSet.wide, imageSet.square],
      },
      {
        title: "Visuals",
        text: "Packaging, urban posters and campaign mockups.",
        images: [imageSet.tall, imageSet.wide, imageSet.square],
      },
    ],
  },
  {
    slug: "somera",
    index: 2,
    titleShort: "Somera",
    titleFull: "Somera Botanical Beauty Brand Identity",
    category: "graphic",
    year: "2024",
    cover: imageSet.tall,
    thumbnails: [imageSet.square, imageSet.wide, imageSet.tall],
    description: "Identity and packaging concept for botanical cosmetics.",
    sections: [
      {
        title: "Logo",
        images: [imageSet.wide, imageSet.square],
      },
      {
        title: "Visuals",
        images: [imageSet.tall, imageSet.wide],
      },
    ],
  },
  {
    slug: "profinder",
    index: 3,
    titleShort: "Profinder",
    titleFull: "Profinder Brand Identity Communication Design",
    category: "uxui",
    year: "2023",
    cover: imageSet.wide,
    thumbnails: [imageSet.wide, imageSet.square, imageSet.wide],
    description: "Product communication visuals for a mobile-first service.",
    sections: [
      {
        title: "Logo",
        images: [imageSet.square, imageSet.wide],
      },
      {
        title: "Visuals",
        images: [imageSet.wide, imageSet.square, imageSet.wide],
      },
    ],
  },
  {
    slug: "non-fiction",
    index: 4,
    titleShort: "(NON) FICTION",
    titleFull: "(NON) FICTION Visual Identity Poster Design",
    category: "graphic",
    year: "2023",
    cover: imageSet.tall,
    thumbnails: [imageSet.wide, imageSet.tall, imageSet.square],
    description: "Festival poster system and outdoor identity.",
    sections: [
      {
        title: "Logo",
        images: [imageSet.wide, imageSet.square],
      },
      {
        title: "Visuals",
        images: [imageSet.tall, imageSet.wide],
      },
    ],
  },
  {
    slug: "david-bowie",
    index: 5,
    titleShort: "David Bowie",
    titleFull: "David Bowie Editorial Zine Design",
    category: "graphic",
    year: "2022",
    cover: imageSet.wide,
    thumbnails: [imageSet.wide, imageSet.square, imageSet.wide],
    description: "Experimental editorial layout for a printed zine.",
    sections: [
      {
        title: "Logo",
        images: [imageSet.square, imageSet.wide],
      },
      {
        title: "Visuals",
        images: [imageSet.wide, imageSet.tall, imageSet.square],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}

