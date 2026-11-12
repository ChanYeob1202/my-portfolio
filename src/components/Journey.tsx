interface Milestone {
  label: string;
  title: string;
  story: string;
  color: string;
}

const milestones: Milestone[] = [
  {
    label: "UCLA",
    title: "Learning to understand a problem",
    story:
      "I studied Asian Studies at UCLA. It taught me how to research, ask good questions, and really understand a problem before trying to answer it.",
    color: "#fef3c7",
  },
  {
    label: "First code",
    title: "From understanding to building",
    story:
      "A friend introduced me to a coding class, and I loved that I could take what I understood and actually build something with it. I also loved the debugging itself: figuring out why something doesn't work and fixing it. I went on to study software engineering through Springboard.",
    color: "#dbeafe",
  },
  {
    label: "RNY Coffee Studio",
    title: "Running a real business",
    story:
      "I grew from barista to General Manager, leading a team of over 15 people. The job is mostly finding what isn't working in the business and fixing it, and it taught me to communicate clearly and solve problems as a team.",
    color: "#fce7f3",
  },
  {
    label: "Unroasted",
    title: "My first problem worth solving",
    story:
      "As a GM, I kept explaining the same coffee basics to every new barista. So I built Unroasted, a site with articles our trainees read before they start on the bar.",
    color: "#d1fae5",
  },
  {
    label: "Landr",
    title: "When it clicked",
    story:
      "When my own job search got hard to keep track of, I built Landr, a full-stack job tracker that's live at landr.land. That's when it clicked: code lets me make everyday things a little easier for the people around me.",
    color: "#fef3c7",
  },
  {
    label: "Now",
    title: "Ready to build with a team",
    story:
      "About two years ago I came back to coding with a lot more focus, and I'm ready to do it full-time. I want to build real products that people use every day, and grow with a team of experienced engineers.",
    color: "#dbeafe",
  },
];

const handFont = { fontFamily: "'Indie Flower', cursive" };

export default function Journey() {
  return (
    <section id="journey" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-16">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2" style={handFont}>
            My Journey
          </h2>
          <svg className="mx-auto" width="200" height="12" viewBox="0 0 200 12" aria-hidden="true">
            <path d="M5 6 Q 50 9, 100 6 T 195 6" stroke="#374151" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-center text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-14">
          From Asian Studies to a coffee bar to full-stack apps. Every project I've built started
          with a small problem in my own life.
        </p>

        {/* Timeline */}
        <ol className="relative border-l-2 border-dashed border-gray-400 ml-3 md:ml-6 space-y-10 mb-20">
          {milestones.map((m, i) => (
            <li key={m.label} className="relative pl-8 md:pl-12">
              {/* Dot */}
              <span
                className="absolute -left-[11px] top-2 w-5 h-5 rounded-full border-2 border-gray-700 bg-white"
                aria-hidden="true"
              />
              <div
                className="p-5 md:p-6 shadow-md"
                style={{ backgroundColor: m.color, transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1">{m.label}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2" style={handFont}>
                  {m.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">{m.story}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* How I work */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-800 pb-1 px-4"
            style={handFont}
          >
            How I work
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 md:p-8 rounded-lg border-2 border-gray-300 shadow-md" style={{ transform: "rotate(-0.5deg)" }}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 border-b-2 border-gray-700 pb-2" style={handFont}>
              I keep showing up
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              I lost about 100 pounds. There was no shortcut. It came from showing up every day and
              building habits, even when progress was slow. I bring the same persistence to code: when
              I'm stuck, I keep working at it until I figure it out and learn something.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg border-2 border-gray-300 shadow-md" style={{ transform: "rotate(0.5deg)" }}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 border-b-2 border-gray-700 pb-2" style={handFont}>
              I ask users first
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              I used to jump into building before thinking through the big picture. The first Landr only
              stored what users typed in. It worked, but it didn't really help. Feedback from friends led
              me to add follow-up reminders, and now I'm planning an AI feature that fills in job details
              from a URL. Today, before I build a feature, I ask a few users how they'd use it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
