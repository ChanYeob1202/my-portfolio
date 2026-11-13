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
/* Menu board                                                          */
/* ------------------------------------------------------------------ */

function MenuRow({
  item,
  index,
  active,
  onSelect,
}: {
  item: MenuItem;
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        aria-expanded={active}
        onMouseEnter={onSelect}
        onFocus={onSelect}
        onClick={onSelect}
        className="group w-full flex items-baseline gap-3 py-3 text-left cursor-pointer"
        style={board}
      >
        <span className={`text-sm tabular-nums transition-colors ${active ? "text-amber-300" : "text-white/40"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`uppercase tracking-[0.12em] text-lg md:text-xl transition-colors ${
            active ? "text-amber-300" : "text-white group-hover:text-amber-200"
          }`}
        >
          {item.name}
        </span>
        <span
          className={`flex-1 border-b-2 border-dotted translate-y-[-4px] transition-colors ${
            active ? "border-amber-300/70" : "border-white/25"
          }`}
          aria-hidden="true"
        />
        <span
          className={`uppercase tracking-wider text-sm md:text-base whitespace-nowrap transition-colors ${
            active ? "text-amber-300" : "text-white/70"
          }`}
        >
          {item.tag}
        </span>
      </button>

      {/* Phones: the story rolls down under the row */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="menu-body pb-4 pl-8">{item.body}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function MenuBoard() {
  const [active, setActive] = useState(0);
  const current = menu[active];

  return (
    <div
      className="relative rounded-2xl p-6 md:p-10 text-white shadow-2xl overflow-hidden"
      style={{
        backgroundColor: "#1d1d1f",
        // letterboard grooves
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 9px)",
      }}
    >
      <div className="flex items-center justify-between mb-6 border-b border-white/15 pb-4" style={board}>
        <p className="uppercase tracking-[0.3em] text-sm text-white/60">On the menu today</p>
        <p className="uppercase tracking-[0.3em] text-sm text-white/60 hidden sm:block">Est. 2019 · LA</p>
      </div>

      <div className="grid md:grid-cols-[1.1fr_1fr] gap-x-12">
        <ul>
          {menu.map((item, i) => (
            <MenuRow key={item.name} item={item} index={i} active={active === i} onSelect={() => setActive(i)} />
          ))}
        </ul>

        {/* Desktop: the selected story slides into a side panel, so rows never jump */}
        <div className="hidden md:block relative min-h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: -16, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl bg-[#f6f1e7] text-gray-800 p-7 shadow-lg relative"
            >
              {/* order-ticket notch */}
              <span className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-[#1d1d1f]" aria-hidden="true" />
              <span className="absolute -right-2 top-8 w-4 h-4 rounded-full bg-[#1d1d1f]" aria-hidden="true" />
              <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-1" style={board}>
                {current.tag}
              </p>
              <h3 className="uppercase tracking-[0.08em] text-2xl text-gray-900 mb-4" style={board}>
                {current.name}
              </h3>
              <div className="menu-body menu-body--light">{current.body}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* House rules */}
      <div className="mt-8 pt-6 border-t border-white/15">
        <p className="uppercase tracking-[0.3em] text-sm text-white/60 mb-4" style={board}>
          House rules
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {houseRules.map((r, i) => (
            <motion.div
              key={r.rule}
              whileHover={{ y: -4 }}
              className="group rounded-lg border border-white/15 p-4 hover:border-amber-300/60 transition-colors"
            >
              <p className="uppercase tracking-[0.1em] text-base text-white group-hover:text-amber-300" style={board}>
                {i + 1}. {r.rule}
              </p>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{r.why}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
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
                A full-stack developer who builds tools people actually use, and checks whether they help.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                I'm Michael. I build with React, TypeScript, Node.js and PostgreSQL. I also manage a café in Los
                Angeles, which is where most of my projects started.
              </p>
              <p className="text-gray-500">Pick something off the menu below to hear the story.</p>
            </motion.div>

            <div className="pb-10">
              <PhotoStack />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <MenuBoard />
          </motion.div>

          {/* Toolkit */}
          <h3 className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6 text-center" style={board}>
            The toolkit
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {toolkit.map((t) => (
              <motion.div
                key={t.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-gray-300 transition-shadow"
              >
                <h4 className="uppercase tracking-[0.1em] text-xl text-gray-900 mb-1" style={board}>
                  {t.title}
                </h4>
                <p className="text-sm font-semibold text-blue-600 mb-3">{t.skills}</p>
                <p className="text-gray-600 leading-relaxed">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
