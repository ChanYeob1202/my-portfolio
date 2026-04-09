export interface PortfolioProject {
  title: string;
  description: string;
  status: string;
  tech: string[];
  image: string | null;
  github: string | null;
  demo: string | null;
}

export const portfolioProjects: PortfolioProject[] = [
  // {
  //   title: "YouTube Clone",
  //   description: "Responsive video platform with video playback, search functionality, and responsive design. Features include video recommendations, channel pages, and a modern UI that mimics YouTube's user experience.",
  //   status: "Active",
  //   tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   image: null,
  //   github: "https://github.com/ChanYeob1202/youtube_clone",
  //   demo: null
  // },
  {
    title: "Developer Portfolio Website",
    description:
      "This site — a personal developer portfolio with sections for about, skills, work, and contact. Built for fast loads and a polished, responsive layout with smooth motion and clear navigation so visitors can explore projects and reach out easily.",
    status: "Active",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    image: null,
    github: "https://github.com/ChanYeob1202/my-portfolio",
    demo: "https://michaelkimdev.com"
  },
  {
    title: "RNY Coffee Studio",
    description:
      "Official mobile-first website for a local coffee shop showcasing brand philosophy, key info (location/contact), and a clear path to online ordering. Built with React and optimized using Lighthouse audits; includes GA4 event tracking for key actions like “Order Online” clicks and accessibility improvements for icon-based navigation.",
    status: "Active",
    tech: ["React", "Bootstrap", "CSS"],
    image: "/img/portfolio/rny.jpg",
    github: "https://github.com/ChanYeob1202/RNY-Studio-Coffee",
    demo: "http://rnycoffeestudio.com"
  },
  {
    title: "Unroasted",
    description:
      "A coffee blog and community-driven platform where coffee enthusiasts can share their experiences, brewing techniques, and reviews. Connect with fellow coffee lovers and discover new ways to enjoy your daily cup.",
    status: "Active",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "/img/portfolio/unRoasted.jpg",
    github: "https://github.com/ChanYeob1202/Unroasted",
    demo: "https://unroasted.vercel.app/"
  },
  // {
  //   title: "birdEar",
  //   description: "A review management platform helping small businesses monitor and respond to Google reviews efficiently. Streamlines customer feedback tracking and improves online reputation management.",
  //   status: "In Development",
  //   tech: ["React", "Firebase", "API Integration"],
  //   image: null,
  //   github: "https://github.com/ChanYeob1202/birdear",
  //   demo: null
  // },
  {
    title: "bySide",
    description:
      "A daily support community for people going through mental health challenges. Features daily action challenges, peer support, and healing resources. You're not alone—we're by your side.",
    status: "In Development",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: null,
    github: null,
    demo: null
  }
];
