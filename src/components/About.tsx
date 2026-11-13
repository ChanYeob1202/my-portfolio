import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

interface MenuItem {
  name: string;
  tag: string;
  body: ReactNode;
}

const menu: MenuItem[] = [
  {
    name: "Why I build",
    tag: "UCLA '19",
    body: (
      <p>
        At UCLA I researched climate change, a problem where you rarely get to see your own impact. Code was
        different. I could see the result of my work right away, and that's still why I do this.
      </p>
    ),
  },
  {
    name: "RNY Coffee website",
    tag: "54% → order",
    body: (
      <>
        <p>
          I built the café's site, fixed what made it slow on phones, and set up Google Analytics 4 to see if it
          actually brought in orders.
        </p>
        <p>
          From Feb to Oct 2026, more than half of its 4,500+ visitors clicked through to order online, and online
          ordering sales are up 14% year over year since the site launched.
        </p>
        <a href="#portfolio" className="menu-link">See the project ↓</a>
      </>
    ),
  },
  {
    name: "Landr",
    tag: "landr.land",
    body: (
      <>
        <p>
          My own job search became Landr, a full-stack job tracker (React, Express, PostgreSQL, JWT in httpOnly
          cookies) that's live at landr.land.
        </p>
        <p>
          Its hardest bug: the logged-in user's data kept disappearing. I traced it from React state to the JWT to
          the database and found three naming mismatches, then a cross-site cookie problem that only showed up
          after deploying. Feedback from early users led me to add follow-up reminders.
        </p>
        <a href="#portfolio" className="menu-link">The 401 debugging story is in the project ↓</a>
      </>
    ),
  },
  {
    name: "The café team",
    tag: "GM · 15+",
    body: (
      <p>
        Since 2022 I've gone from barista to manager, and since 2024 I've been General Manager of RNY's team of
        15+. When one team stopped talking and a few people carried every shift, I held a team meeting where
        everyone could say what was bothering them. After that, people started covering for each other. I bring
        the same habit to engineering: say the problem out loud, then fix it together.
      </p>
    ),
  },
  {
    name: "How I got here",
    tag: "'21 → '24",
    body: (
      <p>
        I started coding through Springboard in 2021, stepped away before finishing when life took an unplanned
        turn, and came back in 2024 with more focus.
      </p>
    ),
  },
  {
    name: "What's next",
    tag: "Full-stack",
    body: (
      <p>
        I'm looking for a full-stack role on a team building products many people use, where I can keep learning
        from experienced engineers.
      </p>
    ),
  },
];

const houseRules = [
  { rule: "Measure the fix", why: "If I can't show that something helped, I'm not done." },
  { rule: "Ask before I build", why: "Landr taught me to solve the user's real problem, not the one I imagined." },
  {
    rule: "Show up every day",
    why: "I lost about 100 pounds with no shortcut, just daily habits. I treat a hard bug the same way.",
  },
];

const toolkit = [
  {
    title: "Frontend",
    skills: "React, Next.js, TypeScript, Tailwind CSS",
    description:
      "Responsive React interfaces that I check for speed. After a Lighthouse audit I cut a 3 MB image to 34 KB, and I use optimistic updates that roll back if a request fails.",
  },
  {
    title: "Backend",
    skills: "Node.js, Express, REST, JWT, Zod, Firebase",
    description:
      "REST APIs with JWT authentication in httpOnly cookies and bcrypt-hashed passwords. When a login bug hid from every tool, I wrote my own logging middleware to find it.",
  },
  {
    title: "Database",
    skills: "PostgreSQL, Neon, SQL",
    description:
      "PostgreSQL tables and safe queries: every query is parameterized and scoped to the logged-in user, so no one can read someone else's data.",
  },
  {
    title: "Tools",
    skills: "Git, GitHub, Vitest, Vercel, Render, GA4",
    description:
      "Shipping with Git and cloud deploys, then measuring the result with Google Analytics 4 events to see whether a feature is actually used.",
  },
];

const photos = [
  { src: "/img/about/6xs.jpg", alt: "Michael behind the bar at the café" },
  { src: "/img/about/chicago2.jpg", alt: "Michael in Chicago at night" },
  { src: "/img/about/newyork1.jpg", alt: "Michael in Times Square, New York" },
  { src: "/img/about/maru.jpg", alt: "Michael sitting in a bright café space" },
  { src: "/img/about/star.jpg", alt: "Michael in a park with a dog" },
  { src: "/img/about/chicago1.jpg", alt: "Michael at Crown Fountain, Chicago" },
  { src: "/img/about/newyork2.jpg", alt: "Michael at the New York Public Library" },
];

const board = { fontFamily: "'Oswald', sans-serif" };

/* ------------------------------------------------------------------ */
/* Photo stack: click to shuffle, auto-shuffles while idle             */
/* ------------------------------------------------------------------ */

const tilts = [-4, 3, -2, 5, -6, 2, -3];

function PhotoStack() {
  const [order, setOrder] = useState(photos.map((_, i) => i));
  const [paused, setPaused] = useState(false);

  const next = () => setOrder((o) => [...o.slice(1), o[0]]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative mx-auto w-64 h-80 sm:w-72 sm:h-88"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {order.map((photoIndex, depth) => {
        const p = photos[photoIndex];
        const isTop = depth === 0;
        return (
          <motion.button
            key={p.src}
            type="button"
            onClick={next}
            aria-label={isTop ? "Show the next photo" : undefined}
            tabIndex={isTop ? 0 : -1}
            className="absolute inset-0 bg-white p-2.5 pb-10 shadow-xl rounded-sm cursor-pointer"
            style={{ zIndex: photos.length - depth }}
            initial={false}
            animate={{
              rotate: isTop ? 0 : tilts[photoIndex],
              y: depth * 6,
              x: depth * 3,
              scale: 1 - depth * 0.03,
              opacity: depth > 3 ? 0 : 1,
            }}
            whileHover={isTop ? { rotate: -2, scale: 1.03 } : undefined}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="lazy" draggable={false} />
          </motion.button>
        );
      })}
      <p className="absolute -bottom-9 inset-x-0 text-center text-xs text-gray-400">Tap the photo to shuffle</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Café receipt                                                        */
/* ------------------------------------------------------------------ */

const mono = { fontFamily: "'IBM Plex Mono', ui-monospace, monospace" };

/** Zig-zag torn paper edge. */
function TornEdge({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-3 w-full"
      style={{
        background:
          "linear-gradient(-45deg, transparent 6px, #fbf8f1 0) 0 0 / 12px 12px repeat-x, linear-gradient(45deg, transparent 6px, #fbf8f1 0) 0 0 / 12px 12px repeat-x",
        transform: flip ? "rotate(180deg)" : undefined,
      }}
    />
  );
}

function Rule({ char = "-" }: { char?: string }) {
  return (
    <p aria-hidden="true" className="overflow-hidden whitespace-nowrap text-gray-400 select-none my-4">
      {char.repeat(120)}
    </p>
  );
}

/** One receipt line. Hover or tap prints its story below; it stays printed until clicked again. */
function ReceiptLine({
  index,
  name,
  tag,
  open,
  onOpen,
  onToggle,
  children,
}: {
  index?: number;
  name: string;
  tag: string;
  open: boolean;
  onOpen: () => void;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        // mouse only: on touch screens a tap would fire both hover and click and cancel itself out
        onPointerEnter={(e) => e.pointerType === "mouse" && onOpen()}
        onClick={onToggle}
        className={`group w-full flex items-baseline gap-2 py-2 px-2 -mx-2 rounded text-left cursor-pointer transition-colors ${
          open ? "bg-gray-900/5" : "hover:bg-gray-900/5"
        }`}
      >
        {index !== undefined && <span className="text-gray-400 tabular-nums">{String(index).padStart(2, "0")}</span>}
        <span className="uppercase font-semibold text-gray-900">{name}</span>
        <span className="flex-1 border-b border-dotted border-gray-400 translate-y-[-5px]" aria-hidden="true" />
        <span className="uppercase text-gray-700 whitespace-nowrap">{tag}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="ml-1 text-gray-400 group-hover:text-gray-900"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {/* "printing" reveal: the text slides out of the printer from the top */}
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.6, ease: "linear" }}
              className="receipt-body pl-8 pr-2 pt-1 pb-4"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function useOpenSet(initial: string[] = []) {
  const [open, setOpen] = useState<Set<string>>(new Set(initial));
  return {
    isOpen: (k: string) => open.has(k),
    open: (k: string) => setOpen((s) => (s.has(k) ? s : new Set(s).add(k))),
    toggle: (k: string) =>
      setOpen((s) => {
        const n = new Set(s);
        if (n.has(k)) n.delete(k);
        else n.add(k);
        return n;
      }),
    all: (keys: string[]) => setOpen(new Set(keys)),
    none: () => setOpen(new Set()),
    count: open.size,
  };
}

function Receipt() {
  const lines = useOpenSet(["Why I build"]);
  const allKeys = [...menu.map((m) => m.name), ...houseRules.map((r) => r.rule), ...toolkit.map((t) => t.title)];

  return (
    // The outer element watches the viewport; the inner one is "printed" out from the top.
    // (A clip-path on the watched element itself can stop it from ever counting as visible.)
    <motion.div initial="hidden" whileInView="shown" viewport={{ once: true, amount: 0.05 }}>
    <motion.div
      variants={{ hidden: { clipPath: "inset(0 0 100% 0)" }, shown: { clipPath: "inset(0 0 0% 0)" } }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-2xl drop-shadow-xl"
      style={{ ...mono, transform: "rotate(-0.6deg)" }}
    >
      <TornEdge flip />
      <div className="bg-[#fbf8f1] px-6 sm:px-10 py-8 text-sm sm:text-base text-gray-800">
        {/* Header */}
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-gray-900">MICHAEL KIM</p>
          <p className="uppercase tracking-widest text-gray-600">Full-stack developer</p>
          <p className="uppercase tracking-widest text-gray-500 text-xs mt-1">Los Angeles, CA</p>
        </div>
        <div className="mt-5 flex justify-between text-xs uppercase text-gray-500">
          <span>Order #2019–2026</span>
          <span>Server: Michael</span>
        </div>
        <Rule />

        <div className="flex items-center justify-between mb-2">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            <span className="hidden sm:inline">Hover</span>
            <span className="sm:hidden">Tap</span> a line to print the story
          </p>
          <button
            type="button"
            onClick={() => (lines.count >= allKeys.length ? lines.none() : lines.all(allKeys))}
            className="text-xs uppercase tracking-widest text-blue-700 hover:underline cursor-pointer"
          >
            {lines.count >= allKeys.length ? "Fold all" : "Print all"}
          </button>
        </div>

        {/* The story */}
        <ul>
          {menu.map((m, i) => (
            <ReceiptLine
              key={m.name}
              index={i + 1}
              name={m.name}
              tag={m.tag}
              open={lines.isOpen(m.name)}
              onOpen={() => lines.open(m.name)}
              onToggle={() => lines.toggle(m.name)}
            >
              {m.body}
            </ReceiptLine>
          ))}
        </ul>

        <Rule />
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-1">House rules</p>
        <ul>
          {houseRules.map((r, i) => (
            <ReceiptLine
              key={r.rule}
              name={`${i + 1}. ${r.rule}`}
              tag="always"
              open={lines.isOpen(r.rule)}
              onOpen={() => lines.open(r.rule)}
              onToggle={() => lines.toggle(r.rule)}
            >
              <p>{r.why}</p>
            </ReceiptLine>
          ))}
        </ul>

        <Rule />
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-1">Ingredients</p>
        <ul>
          {toolkit.map((t) => (
            <ReceiptLine
              key={t.title}
              name={t.title}
              tag={`${t.skills.split(",").length} items`}
              open={lines.isOpen(t.title)}
              onOpen={() => lines.open(t.title)}
              onToggle={() => lines.toggle(t.title)}
            >
              <p className="font-semibold text-gray-900">{t.skills}</p>
              <p>{t.description}</p>
            </ReceiptLine>
          ))}
        </ul>

        <Rule char="=" />
        <div className="space-y-1 uppercase">
          <p className="flex justify-between">
            <span>Projects shipped</span>
            <span>4</span>
          </p>
          <p className="flex justify-between">
            <span>Team experience</span>
            <span>15+ people</span>
          </p>
          <p className="flex justify-between text-lg sm:text-xl font-bold text-gray-900 mt-2">
            <span>Total</span>
            <span>1 full-stack dev</span>
          </p>
          <p className="flex justify-between">
            <span>Status</span>
            <span className="text-green-700 font-semibold">Open to work</span>
          </p>
        </div>
        <Rule char="=" />

        {/* Barcode + thanks */}
        <div className="text-center">
          <div
            aria-hidden="true"
            className="mx-auto h-14 w-64 max-w-full"
            style={{
              background:
                "repeating-linear-gradient(90deg, #111 0 2px, transparent 2px 4px, #111 4px 5px, transparent 5px 8px, #111 8px 11px, transparent 11px 12px)",
            }}
          />
          <p className="mt-2 text-xs tracking-[0.4em] text-gray-500">MICHAELKIMDEV.COM</p>
          <p className="mt-4 uppercase tracking-widest">Thank you for visiting!</p>
          <a href="#contact" className="mt-1 inline-block uppercase tracking-widest text-blue-700 hover:underline">
            Let's talk →
          </a>
        </div>
      </div>
      <TornEdge />
    </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Intro + photos */}
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-14 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <p className="uppercase tracking-[0.3em] text-sm text-blue-600 mb-4" style={board}>
                About me
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Here's my order. It comes with a story.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                I studied climate change at UCLA, I lead a café team of 15+ in LA, and I build full-stack apps. Every
                project I've made started with a problem I ran into myself.
              </p>
            </motion.div>

            <div className="pb-10">
              <PhotoStack />
            </div>
          </div>

          <Receipt />
        </div>
      </section>
    </MotionConfig>
  );
}
