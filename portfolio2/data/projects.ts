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
  homeTitlePosition?: "left" | "middle" | "right";
};

const skaty1: ProjectImage = {
  src: "/images/skaty1.jpg",
  alt: "Skaty business card",
  width: 4096,
  height: 2730,
};

const skaty2: ProjectImage = {
  src: "/images/skaty2.jpg",
  alt: "Skaty storefront poster",
  width: 3000,
  height: 2000,
};

const somera1: ProjectImage = {
  src: "/images/somera1.png",
  alt: "Somera packaging concept",
  width: 1080,
  height: 1350,
};

const somera2: ProjectImage = {
  src: "/images/somera2.png",
  alt: "Somera identity presentation",
  width: 1920,
  height: 1080,
};

const profinder1: ProjectImage = {
  src: "/images/profinder1.jpg",
  alt: "Profinder mobile UI",
  width: 4000,
  height: 2668,
};

const profinder2: ProjectImage = {
  src: "/images/profinder2.jpg",
  alt: "Profinder outdoor communication",
  width: 4000,
  height: 3000,
};

const bowie1: ProjectImage = {
  src: "/images/bowie.jpg",
  alt: "David Bowie editorial spread",
  width: 4096,
  height: 2731,
};

const bowie2: ProjectImage = {
  src: "/images/bowie2.jpg",
  alt: "David Bowie editorial layouts",
  width: 1725,
  height: 1294,
};

const book1: ProjectImage = {
  src: "/images/book1.jpg",
  alt: "Book fair poster mockup",
  width: 4096,
  height: 2731,
};

const book2: ProjectImage = {
  src: "/images/book2.jpg",
  alt: "Book fair poster composition",
  width: 1920,
  height: 1440,
};

export const projects: Project[] = [
  {
    slug: "skaty",
    index: 1,
    titleShort: "Skaty.",
    titleFull: "Skaty. Visual Identity for a Streetwear Brand",
    category: "graphic",
    year: "2024",
    cover: skaty2,
    thumbnails: [skaty2, skaty1],
    homeTitlePosition: "left",
    description: "Visual identity and launch campaign for a streetwear brand.",
    sections: [
      {
        title: "Logo",
        text: "Core marks, typographic treatment and logo usage principles.",
        images: [skaty1, skaty2],
      },
      {
        title: "Visuals",
        text: "Packaging, urban posters and campaign mockups.",
        images: [skaty2, skaty1],
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
    cover: somera1,
    thumbnails: [somera1, somera2],
    homeTitlePosition: "middle",
    description: "Identity and packaging concept for botanical cosmetics.",
    sections: [
      {
        title: "Logo",
        images: [somera2, somera1],
      },
      {
        title: "Visuals",
        images: [somera1, somera2],
      },
    ],
  },
  {
    slug: "profinder",
    index: 3,
    titleShort: "Profinder",
    titleFull: "Profinder Brand Identity Communication Design",
    category: "graphic",
    year: "2023",
    cover: profinder1,
    thumbnails: [profinder1, profinder2],
    homeTitlePosition: "left",
    description: "Product communication visuals for a mobile-first service.",
    sections: [
      {
        title: "Logo",
        images: [profinder2, profinder1],
      },
      {
        title: "Visuals",
        images: [profinder1, profinder2],
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
    cover: book1,
    thumbnails: [book1, book2],
    homeTitlePosition: "right",
    description: "Festival poster system and outdoor identity.",
    sections: [
      {
        title: "Logo",
        images: [book1, book2],
      },
      {
        title: "Visuals",
        images: [book2, book1],
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
    cover: bowie1,
    thumbnails: [bowie1, bowie2],
    homeTitlePosition: "left",
    description: "Experimental editorial layout for a printed zine.",
    sections: [
      {
        title: "Logo",
        images: [bowie1, bowie2],
      },
      {
        title: "Visuals",
        images: [bowie2, bowie1],
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
