"use client";

import { ArrowUpRight, Lightning, Rocket, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";

const featureCategories = [
  {
    title: "Launch New Ideas",
    description:
      "Prototype digital products, validate concepts, and iterate faster with guided workflows.",
    items: [
      "Interactive UX prototypes",
      "Design-to-code automation",
      "Launch-ready marketing pages"
    ],
    icon: Rocket
  },
  {
    title: "Level Up Teams",
    description:
      "Unlock collaboration superpowers with curated playbooks that spark momentum.",
    items: [
      "Playbooks for engineering leaders",
      "Workshop-in-a-box templates",
      "Skill accelerators tailored to roles"
    ],
    icon: Lightning
  },
  {
    title: "Scale Personal Impact",
    description:
      "Craft standout personal projects and narratives that open doors to new opportunities.",
    items: [
      "Portfolio deep dives",
      "Story-driven case studies",
      "Thought leadership publishing kits"
    ],
    icon: Sparkle
  }
];

const modalities = [
  {
    label: "Strategy Sprints",
    detail: "High-leverage experiments with measurable outcomes in under a week."
  },
  {
    label: "Guided Builds",
    detail: "Pair-programmed or self-paced flows with checkpoints and feedback loops."
  },
  {
    label: "Learning Journeys",
    detail: "Outcome-based curriculum with artifacts that prove mastery."
  }
];

const credibilitySignals = [
  {
    heading: "Outcomes over Deliverables",
    content:
      "Every track ends with a measurable result—product launched, process adopted, story told."
  },
  {
    heading: "Expert Systems",
    content:
      "Decades of product, design, and engineering expertise distilled into reusable systems."
  },
  {
    heading: "Rapid Feedback",
    content:
      "Multiple feedback loops ensure momentum never stalls and ideas never fade."
  }
];

export default function Page() {
  const marqueeContent = useMemo(
    () => [
      "Ship faster than you can second-guess",
      "Spin up bold experiments",
      "Architect irresistible narratives",
      "Design flows customers love",
      "Launch playbooks that stick"
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-24 md:px-12">
        <section className="relative grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent.muted/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              What you can do here
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Build momentum around the ideas that matter—today.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Break down complex ambitions into directional moves. Navigate
              ambiguity with clarity, systems, and a bias toward action.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#catalog"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-background shadow-glow transition hover:bg-accent/90"
              >
                Explore Possibilities
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
              <Link
                href="#modalities"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-accent hover:text-accent"
              >
                How it Works
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-glow"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e9_0,transparent_60%)] opacity-40" />
            <div className="relative space-y-6">
              <p className="text-sm uppercase tracking-[0.3rem] text-slate-400">
                You&apos;re in control
              </p>
              <h2 className="text-2xl font-semibold text-slate-50">
                Select a track, personalize it, and move from idea to impact.
              </h2>
              <ul className="space-y-4 text-sm text-slate-300">
                {marqueeContent.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-accent/10 bg-slate-900/50 p-4"
                  >
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500">
                Bonus: each sprint yields assets you can reuse, pitch, or ship.
              </p>
            </div>
          </motion.div>
        </section>

        <section
          id="catalog"
          className="space-y-10 rounded-3xl border border-slate-800 bg-slate-950/60 p-8"
        >
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-100">
              Choose your arena
            </h2>
            <p className="max-w-2xl text-slate-300">
              Every initiative includes curated guidance, battle-tested
              templates, and accountability moments that keep you shipping.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCategories.map(({ title, description, items, icon: Icon }) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-slate-900/70 text-accent">
                  <Icon size={26} weight="duotone" />
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-400">{description}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-xl border border-slate-800/80 bg-slate-900/80 p-3"
                    >
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="modalities" className="space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3rem] text-slate-400">
                How it comes together
              </p>
              <h2 className="text-3xl font-semibold text-slate-100">
                Stay in flow from start to finish
              </h2>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3rem] text-accent transition hover:border-accent"
            >
              See sample roadmap
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {modalities.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-70" />
                <div className="relative space-y-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3rem] text-accent/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {item.label}
                  </h3>
                  <p className="text-sm text-slate-300">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 md:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-100">
              Why it works
            </h2>
            <p className="text-slate-300">
              This isn&apos;t just another idea factory. It&apos;s a momentum
              engine that pushes you to act, reflect, and iterate—until the goal
              is real.
            </p>
            <ul className="space-y-5">
              {credibilitySignals.map((signal) => (
                <li
                  key={signal.heading}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-100">
                    {signal.heading}
                  </h3>
                  <p className="text-sm text-slate-300">{signal.content}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5 rounded-3xl border border-accent/30 bg-slate-950/90 p-6 shadow-glow">
            <h3 className="text-xl font-semibold text-accent">
              Momentum Snapshot
            </h3>
            <div className="space-y-4 text-sm text-slate-200">
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                <span>Average launch window</span>
                <span className="font-semibold text-accent">6 days</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                <span>Track completion rate</span>
                <span className="font-semibold text-emerald-300">92%</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                <span>Assets shipped per sprint</span>
                <span className="font-semibold text-slate-100">3.4</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              Numbers update weekly based on completed sprints and shared wins.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-accent/90"
            >
              Start a sprint
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-accent/30 bg-slate-950/70 p-8">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,#38bdf8_0,transparent_60%)] opacity-20" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3rem] text-accent">
                Ready when you are
              </p>
              <h2 className="text-3xl font-semibold text-slate-50">
                Turn possibility into momentum.
              </h2>
              <p className="max-w-xl text-sm text-slate-300">
                Pick a track, remix it, and let the system handle the friction.
                You stay focused on the signal: your next big move.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-accent px-5 py-3 text-sm font-medium text-accent transition hover:bg-accent/10"
              >
                See live case study
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-background transition hover:bg-accent/90"
              >
                Claim your track
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-800/60 bg-slate-950/70 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Momentum Studio. All rights reserved.</span>
          <nav className="flex flex-wrap gap-3">
            <Link href="#" className="hover:text-slate-300">
              Manifesto
            </Link>
            <Link href="#" className="hover:text-slate-300">
              Playbook
            </Link>
            <Link href="#" className="hover:text-slate-300">
              Community
            </Link>
            <Link href="#" className="hover:text-slate-300">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
