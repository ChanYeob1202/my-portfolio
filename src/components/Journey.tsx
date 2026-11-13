import { useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { BookOpen, Briefcase, ChevronDown, Code2, Coffee, GraduationCap, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  label: string;
  title: string;
  story: string;
  icon: LucideIcon;
  accent: string; // tailwind bg class for the icon bubble
}

const milestones: Step[] = [
  {
    label: "UCLA",
    title: "Learning to understand a problem",
    story:
      "I studied Asian Studies at UCLA. It taught me how to research, ask good questions, and really understand a problem before trying to answer it.",
    icon: GraduationCap,
    accent: "bg-amber-500",
  },
  {
    label: "First code",
    title: "From understanding to building",
    story:
      "A friend introduced me to a coding class, and I loved that I could take what I understood and actually build something with it. I also loved the debugging itself: figuring out why something doesn't work and fixing it. I went on to study software engineering through Springboard.",
    icon: Code2,
    accent: "bg-blue-600",
  },
  {
    label: "RNY Coffee Studio",
    title: "Running a real business",
    story:
      "I grew from barista to General Manager, leading a team of over 15 people. The job is mostly finding what isn't working in the business and fixing it, and it taught me to communicate clearly and solve problems as a team.",
    icon: Coffee,
    accent: "bg-rose-500",
  },
  {
    label: "Unroasted",
    title: "My first problem worth solving",
    story:
      "As a GM, I kept explaining the same coffee basics to every new barista. So I built Unroasted, a site with articles our trainees read before they start on the bar.",
    icon: BookOpen,
    accent: "bg-emerald-600",
  },
  {
    label: "Landr",
    title: "When it clicked",
    story:
      "When my own job search got hard to keep track of, I built Landr, a full-stack job tracker that's live at landr.land. That's when it clicked: code lets me make everyday things a little easier for the people around me.",
    icon: Briefcase,
    accent: "bg-orange-500",
  },
  {
    label: "Now",
    title: "Ready to build with a team",
    story:
      "About two years ago I came back to coding with a lot more focus, and I'm ready to do it full-time. I want to build real products that people use every day, and grow with a team of experienced engineers.",
    icon: Rocket,
    accent: "bg-gray-900",
  },
];

const traits = [
  {
    title: "I keep showing up",
    teaser: "Persistence over shortcuts.",
    story:
      "I lost about 100 pounds. There was no shortcut. It came from showing up every day and building habits, even when progress was slow. I bring the same persistence to code: when I'm stuck, I keep working at it until I figure it out and learn something.",
  },
  {
    title: "I ask users first",
    teaser: "Solve the real problem, not the imagined one.",
    story:
      "I used to jump into building before thinking through the big picture. The first Landr only stored what users typed in. It worked, but it didn't really help. Feedback from friends led me to add follow-up reminders, and now I'm planning an AI feature that fills in job details from a URL. Today, before I build a feature, I ask a few users how they'd use it.",
  },
];

/** Story text that rolls down when `open` is true. */
function RollDown({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <motion.p
            initial={{ y: -8 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            transition={{ duration: 0.35 }}
            className="pt-3 text-gray-600 text-base md:text-lg leading-relaxed"
          >
            {children}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Open state for a list of cards: hover opens a card on desktop,
 * tap toggles it on touch screens (where hover doesn't exist).
 */
function useOpenCard() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [tapped, setTapped] = useState<number | null>(null);
  return {
    isOpen: (i: number) => hovered === i || tapped === i,
    bind: (i: number) => ({
      onHoverStart: () => setHovered(i),
      onHoverEnd: () => setHovered((h) => (h === i ? null : h)),
      onClick: () => setTapped((t) => (t === i ? null : i)),
    }),
  };
}

export default function Journey() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 60%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const steps = useOpenCard();
  const cards = useOpenCard();

  return (
    <MotionConfig reducedMotion="user">
      <section id="journey" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">My Journey</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How I became a developer</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              From Asian Studies to a coffee bar to full-stack apps. Every project I've built started with a
              small problem in my own life.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              <span className="hidden md:inline">Hover</span>
              <span className="md:hidden">Tap</span> a step to read the story.
            </p>
          </motion.div>

          {/* Timeline */}
          <ol ref={timelineRef} className="relative ml-5 md:ml-6 space-y-5 mb-24">
            {/* Track + line that fills as you scroll */}
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200" aria-hidden="true" />
            <motion.div
              className="absolute left-0 top-2 bottom-2 w-0.5 bg-blue-600 origin-top"
              style={{ scaleY: lineScale }}
              aria-hidden="true"
            />

            {milestones.map((m, i) => {
              const open = steps.isOpen(i);
              const Icon = m.icon;
              return (
                <motion.li
                  key={m.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="relative pl-10 md:pl-14"
                >
                  {/* Icon bubble on the line */}
                  <motion.span
                    animate={{ scale: open ? 1.2 : 1, rotate: open ? -8 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className={`absolute -left-5 top-4 w-10 h-10 rounded-full ${m.accent} text-white flex items-center justify-center shadow-md ring-4 ring-gray-50`}
                    aria-hidden="true"
                  >
                    <Icon size={18} />
                  </motion.span>

                  <motion.button
                    type="button"
                    aria-expanded={open}
                    {...steps.bind(i)}
                    animate={{
                      y: open ? -4 : 0,
                      boxShadow: open
                        ? "0 18px 40px -12px rgba(15, 23, 42, 0.25)"
                        : "0 1px 3px rgba(15, 23, 42, 0.08)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className={`w-full text-left bg-white rounded-2xl border px-5 py-4 md:px-6 md:py-5 cursor-pointer transition-colors ${
                      open ? "border-blue-200" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-gray-400 mb-1">
                          {m.label}
                        </p>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">{m.title}</h3>
                      </div>
                      <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1 shrink-0 text-gray-400"
                        aria-hidden="true"
                      >
                        <ChevronDown size={22} />
                      </motion.span>
                    </div>
                    <RollDown open={open}>{m.story}</RollDown>
                  </motion.button>
                </motion.li>
              );
            })}
          </ol>

          {/* How I work */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className="text-center text-2xl md:text-4xl font-bold text-gray-900 mb-10"
          >
            How I work
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {traits.map((t, i) => {
              const open = cards.isOpen(i);
              return (
                <motion.button
                  key={t.title}
                  type="button"
                  aria-expanded={open}
                  {...cards.bind(i)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  animate={{ scale: open ? 1.03 : 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                  className={`text-left rounded-2xl p-6 md:p-8 cursor-pointer transition-colors duration-300 ${
                    open ? "bg-gray-900 text-white shadow-2xl" : "bg-white text-gray-900 border border-gray-200 shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-1">{t.title}</h4>
                      <p className={`text-base ${open ? "text-blue-300" : "text-gray-500"}`}>{t.teaser}</p>
                    </div>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 shrink-0 opacity-60"
                      aria-hidden="true"
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </div>
                  <div className={open ? "[&_p]:text-gray-200" : ""}>
                    <RollDown open={open}>{t.story}</RollDown>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
