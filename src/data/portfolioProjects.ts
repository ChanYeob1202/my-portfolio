export interface PortfolioProject {
  title: string;
  description: string;
  status: string;
  tech: string[];
  image: string | null;
  images?: string[];
  github: string | null;
  demo: string | null;
  /** Optional heads-up shown under the demo link, e.g. free-tier cold-start warning. */
  note?: string;
  /** Optional real-world results, e.g. analytics numbers. */
  metrics?: { value: string; label: string }[];
  /** Source / timeframe caption shown under the metrics. */
  metricsSource?: string;
  /** Why it was built, what the problem was, how it was solved, and what came of it. */
  caseStudy?: {
    why: string;
    problem: string;
    solution: string[];
    result: string[];
  };
  /** Planned next features, shown as a small "What's next" list under the result. */
  next?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Landr",
    description:
      "A full-stack job search tool I built for myself first, and redesigned after using it showed me it wasn't helping yet.",
    caseStudy: {
      why:
        "I needed it for my own job search. Notion and Google Sheets can store a list of applications, but that's all they do: they're a data dump. I figured that if I needed something better, other job seekers did too, so I set out to build a real product around one question: how can a tool actually help people job hunt?",
      problem:
        "This was my first full-stack app, so there were plenty of technical problems, but the biggest one wasn't technical. After I deployed it and used it myself, I realized I had rebuilt the same data dump: it showed me a list of jobs I'd applied to and nothing more. The hardest technical problem came while wiring up login: every page returned \"401 token does not exist\", and every debugging tool told a different story. The browser console showed four errors, the Next.js overlay showed one, the Network tab showed no request at all, and the API server logged nothing.",
      solution: [
        "Went back and redesigned the MVP around what a job seeker actually needs to do next. I added a follow-up queue that flags applications where you haven't heard back from the company in a while, with a one-click \"mark as followed up\".",
        "Debugged the 401 by treating each contradiction as a clue instead of guessing. The empty Network tab meant the request wasn't coming from the browser at all. Since the server logged nothing, I added my own logging middleware, which proved the Authorization header arrived as undefined.",
        "That pointed to a wrong assumption on my part. The page was a React Server Component, so its fetch ran on the Next.js server, where DevTools can't see it and the browser's stored token isn't available. I made the page a client component, so the request is sent from the browser with the user's credentials.",
        "Built authentication from scratch instead of using a library, to understand each layer: JWTs stored in httpOnly cookies with refresh tokens, so JavaScript on the page can never read the token, and Zod validation on every request body.",
        "Secured the data: bcrypt-hashed passwords, every /jobs query scoped by user_id, an allowlist of editable columns, and parameterized SQL. \"Not found\" and \"not yours\" return the same 404, so the API doesn't reveal which IDs exist.",
        "Made \"mark as followed up\" an optimistic update that rolls back if the request fails, and fixed a bug where the follow-up logic wrote into the job object and corrupted the snapshot used for the rollback.",
      ],
      result: [
        "Landr went from a list of applications to a tool that tells me who to follow up with. It's live at landr.land, and I use it for my own job search.",
        "I learned to look at the big picture even when building a small feature: how each part connects, and whether it actually helps the user. I also learned that an empty log or an empty Network tab is evidence, not a dead end.",
      ],
    },
    next: [
      "AI job match: paste your resume and a job description, and get a fit score, whether it's worth applying, and the skills you're missing.",
    ],
    status: "Active",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Neon",
      "Zod",
      "Vitest",
      "Tailwind CSS"
    ],
    image: "/img/portfolio/landr.jpg",
    images: ["/img/portfolio/landr.jpg", "/img/portfolio/landr2.jpg"],
    github: "https://github.com/ChanYeob1202/job-tracker",
    demo: "https://landr.land",
    note: "Hosted on a free tier — the first load may take ~30–60s while the server wakes from sleep."
  },
  {
    title: "Unroasted",
    description:
      "A coffee training and community platform, built to solve a problem I had as a café general manager.",
    caseStudy: {
      why:
        "As general manager at RNY Coffee Studio, I trained a new group of 5–10 baristas every few months, and I was explaining the same coffee basics over and over.",
      problem:
        "Training was repetitive and only happened in person. Once it ended, new baristas had nowhere to review what they'd learned or ask follow-up questions, and they couldn't learn from each other.",
      solution: [
        "Used Strapi as a headless CMS so a manager can write a training article once and publish it from any device, without touching code.",
        "Built a community board on Firebase where baristas can post questions, reply, and like helpful answers, with real-time updates.",
        "Added Firebase Authentication so every post is tied to a real account, which keeps discussions safe and accountable.",
        "Kept two backends on purpose: Strapi for content managers edit, Firebase for content users create, each fitting its job.",
      ],
      result: [
        "Built a working platform: managers can publish training articles from any device, and trainees can ask questions on a real-time community board.",
        "It has two training articles so far, with more on the way. What I took from it was how to split content between a CMS and a real-time database based on who creates it.",
      ],
    },
    next: [
      "Publish a full library of training articles, so new baristas can finish the theory part of their training entirely on the website.",
    ],
    status: "Active",
    tech: ["React", "Strapi", "Firebase", "Render", "Tailwind CSS"],
    image: "/img/portfolio/unRoasted.jpg",
    github: "https://github.com/ChanYeob1202/Unroasted",
    demo: "https://unroasted.vercel.app/"
  },
  {
    title: "RNY Coffee Studio",
    description:
      "The official website for a specialty coffee shop in Koreatown, LA. A real client project with real traffic.",
    caseStudy: {
      why:
        "I'm the general manager at RNY Coffee Studio. The café relied on Instagram and Google Maps, and online ordering lived on a separate Toast page that customers had to find on their own. The owner needed a website that turned visitors into orders.",
      problem:
        "Most visitors were on their phones and wanted three things fast: hours, location, and a way to order. The first version loaded slowly on mobile because of large, unoptimized images (one photo alone was 3 MB). And there was no way to tell whether the site was actually bringing in orders.",
      solution: [
        "Designed a mobile-first single page with an \"Order Online\" button in the hero that goes straight to Toast, plus location, hours, and a contact form.",
        "Ran Lighthouse audits and fixed what they flagged: compressed images (the About photo went from 3 MB to 34 KB), lazy-loaded images below the fold, and set long-term cache headers.",
        "Added accessible names to icon-only links so screen readers can announce them.",
        "Set up Google Analytics 4 with a custom order_online_click event, so the owner can see how many visitors go on to order.",
        "Used that data to add a sticky \"Order Now\" bar on mobile, with UTM-tagged links that show which orders came from the website.",
      ],
      result: [
        "Over 4,500 visitors and 2,400+ clicks on \"Order Online\" since launch. More than half of all visitors go on to the ordering page.",
        "The owner now has real numbers showing what the website does for the business, instead of guessing.",
      ],
    },
    next: [
      "Our own online store, so the café can sell its own products directly on the website.",
    ],
    status: "Active",
    tech: ["React", "Tailwind CSS", "Vercel"],
    image: "/img/portfolio/rny.jpg",
    github: "https://github.com/ChanYeob1202/RNY-Studio-Coffee",
    demo: "http://rnycoffeestudio.com",
    metrics: [
      { value: "4.5K+", label: "Visitors" },
      { value: "2.4K+", label: "Clicked “Order Online”" },
      { value: "54%", label: "Visitor-to-order-click rate" }
    ],
    metricsSource: "Google Analytics 4 · Feb – Oct 2026"
  },
  {
    title: "Developer Portfolio Website",
    description:
      "This site. A portfolio built to show what my projects actually did, not just which tools they used.",
    caseStudy: {
      why:
        "I needed one place where employers could see my work, try it live, and contact me.",
      problem:
        "My first version listed technologies for each project, which made every project sound the same. A reviewer skimming for 30 seconds couldn't tell what problem I'd solved or whether anyone used the result.",
      solution: [
        "Rewrote each project as a short case study: why I built it, what the problem was, how I solved it, and the result.",
        "Added real numbers where I have them, like Google Analytics data for RNY Coffee Studio, and put the strongest projects first.",
        "Kept project content in a typed data file, separate from the components, so adding or editing a project doesn't touch the UI code.",
        "Built it with React, TypeScript, and Vite for fast loads, and a responsive layout that works on phones.",
      ],
      result: [
        "A portfolio that tells the story behind each project in a few seconds of reading, with live demos and source code one click away.",
      ],
    },
    status: "Active",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    image: "/img/portfolio/portfolio.jpg",
    github: "https://github.com/ChanYeob1202/my-portfolio",
    demo: "https://michaelkimdev.com"
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
  // {
  //   title: "bySide",
  //   description:
  //     "A daily support community for people going through mental health challenges. Features daily action challenges, peer support, and healing resources. You're not alone—we're by your side.",
  //   status: "In Development",
  //   tech: ["React", "Firebase", "Tailwind CSS"],
  //   image: null,
  //   github: null,
  //   demo: null
  // },

];
