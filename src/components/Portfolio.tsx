import { useState } from "react";
import type { ReactNode } from "react";
import { portfolioProjects } from "../data/portfolioProjects";

// How many solution steps to show before the "Show all" button.
const SOLUTION_PREVIEW = 3;

const STEP_STYLES = {
  problem: { dot: "bg-red-50 text-red-600 border-red-200", label: "text-red-600",
    icon: "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" },
  solution: { dot: "bg-blue-50 text-blue-600 border-blue-200", label: "text-blue-600",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  result: { dot: "bg-emerald-50 text-emerald-600 border-emerald-200", label: "text-emerald-600",
    icon: "M5 13l4 4L19 7" },
};

// One step of the Problem → Solution → Result timeline: a colored icon,
// a vertical line down to the next step, and the step's content.
function StoryStep({ kind, label, last = false, children }: {
  kind: keyof typeof STEP_STYLES; label: string; last?: boolean; children: ReactNode;
}) {
  const style = STEP_STYLES[kind];
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${style.dot}`}>
          <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={style.icon} />
          </svg>
        </div>
        {!last && <div className="my-1.5 w-0.5 flex-1 bg-gray-200" />}
      </div>
      <div className={`min-w-0 flex-1 ${last ? "" : "pb-7"}`}>
        <p className={`mt-1.5 mb-2 text-xs font-bold uppercase tracking-wider ${style.label}`}>{label}</p>
        {children}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeImages, setActiveImages] = useState<Record<number, number>>({});

  // Which projects have their full solution list expanded.
  const [openSolutions, setOpenSolutions] = useState<Record<number, boolean>>({});

  const getActiveIndex = (projectIndex: number) => activeImages[projectIndex] ?? 0;

  const navigate = (projectIndex: number, direction: 1 | -1, total: number) => {
    setActiveImages(prev => ({
      ...prev,
      [projectIndex]: ((getActiveIndex(projectIndex) + direction) + total) % total,
    }));
  };

  return (
    <section id="portfolio" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Work
          </h2>
          <p className="text-gray-600 text-lg">
            Building projects that solve real problems and help people connect.
          </p>
        </div>
        
        {/* Projects - Alternating Layout */}
        <div className="space-y-32">
          {portfolioProjects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12 ${project.caseStudy ? 'items-start' : 'items-center'}`}
            >
              {/* Project Image — sticks while the case study scrolls past */}
              <div className={`w-full md:w-1/2 ${project.caseStudy ? 'md:sticky md:top-24' : ''}`}>
                <div className="relative group">
                  {project.images && project.images.length > 1 ? (
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-linear-to-br from-gray-50 to-gray-100 relative">
                      <img
                        src={project.images[getActiveIndex(index)]}
                        alt={`${project.title} screenshot ${getActiveIndex(index) + 1}`}
                        className="w-full h-auto object-cover transition-opacity duration-300"
                      />
                      {/* Arrows */}
                      <button
                        onClick={() => navigate(index, -1, project.images!.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => navigate(index, 1, project.images!.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImages(prev => ({ ...prev, [index]: i }))}
                            className={`w-2 h-2 rounded-full transition-colors ${i === getActiveIndex(index) ? "bg-white" : "bg-white/40"}`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : project.image ? (
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-linear-to-br from-gray-50 to-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-linear-to-br from-gray-100 to-gray-200 aspect-video flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/60 flex items-center justify-center">
                          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <p className="text-gray-500 text-lg font-medium">Preview Coming Soon</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Status Badge on Image */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                      project.status === "Active" 
                        ? "bg-green-500 text-white" 
                        : "bg-orange-500 text-white"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="w-full md:w-1/2 min-w-0 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Impact: numbers first, so a reviewer sees the outcome right away */}
                {(project.metrics || project.caseStudy) && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Impact</p>
                    {project.metrics ? (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {project.metrics.map((metric, i) => (
                            <div key={i} className="rounded-xl border border-emerald-200 bg-white px-4 py-3">
                              <p className="text-2xl md:text-3xl font-extrabold text-emerald-600 tabular-nums">{metric.value}</p>
                              <p className="text-xs md:text-sm text-gray-600 leading-snug mt-1">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                        {project.metricsSource && (
                          <p className="text-xs text-gray-500">{project.metricsSource}</p>
                        )}
                      </>
                    ) : (
                      <p className="text-gray-900 font-semibold leading-relaxed">{project.caseStudy!.result[0]}</p>
                    )}
                  </div>
                )}

                {project.caseStudy && (() => {
                  const cs = project.caseStudy;
                  // If the first result is already shown in the Impact box, don't repeat it below.
                  const results = project.metrics ? cs.result : cs.result.slice(1);
                  const isOpen = openSolutions[index] ?? false;
                  const visibleSteps = isOpen ? cs.solution : cs.solution.slice(0, SOLUTION_PREVIEW);

                  return (
                    <>
                      {/* Why: context, styled quietly */}
                      <p className="border-l-2 border-gray-200 pl-4 text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-900">Why I built it. </span>
                        {cs.why}
                      </p>

                      {/* Problem → Solution → Result timeline */}
                      <div>
                        <StoryStep kind="problem" label="Problem">
                          <p className="text-gray-700 leading-relaxed">{cs.problem}</p>
                        </StoryStep>

                        <StoryStep kind="solution" label="Solution" last={results.length === 0}>
                          <ol className="space-y-3">
                            {visibleSteps.map((step, i) => (
                              <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600">
                                  {i + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                          {cs.solution.length > SOLUTION_PREVIEW && (
                            <button
                              type="button"
                              onClick={() => setOpenSolutions(prev => ({ ...prev, [index]: !isOpen }))}
                              aria-expanded={isOpen}
                              className="mt-3 text-sm font-semibold text-blue-600 hover:text-blue-800"
                            >
                              {isOpen ? "Show less ↑" : `Show all ${cs.solution.length} steps ↓`}
                            </button>
                          )}
                        </StoryStep>

                        {results.length > 0 && (
                          <StoryStep kind="result" label="Result" last>
                            <ul className="space-y-2">
                              {results.map((outcome, i) => (
                                <li key={i} className="flex gap-3 text-gray-900 font-medium leading-relaxed">
                                  <svg className="w-5 h-5 mt-0.5 shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </StoryStep>
                        )}
                      </div>

                      {/* What's next: planned features, kept quiet so it doesn't compete with the results */}
                      {project.next && project.next.length > 0 && (
                        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3">
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">What's next</p>
                          <ul className="space-y-1">
                            {project.next.map((item, i) => (
                              <li key={i} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                                <span className="shrink-0 text-gray-400">→</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  );
                })()}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-lg text-base font-medium text-white hover:bg-gray-700 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Free-tier / cold-start heads-up */}
                {project.note && (
                  <p className="flex items-start gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{project.note}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-24">
          <p className="text-gray-500 text-base">
            More projects coming soon as I continue building and learning!
          </p>
        </div>
      </div>
    </section>
  )
}