/* eslint-disable @next/next/no-img-element -- static export: plain img with the base path */
import { Check, FolderLock, ShieldCheck, UserLock } from "lucide-react";
import type { ReactNode } from "react";
import { BetaButton, Button, container, Eyebrow, Phone, Serif, Title } from "@/components/site";
import { asset } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <WorksWith />
      <Problem />
      <Features />
      <Guardrails />
      <HowItWorks />
      <Simulation />
      <Facts />
      <Closing />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid fade-mask absolute inset-0 opacity-70" />
      <div className={`${container} relative grid items-center gap-14 pt-16 pb-20 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:pb-28`}>
        <div data-reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-muted">
            <span className="size-1.5 rounded-full bg-mint shadow-[0_0_8px] shadow-mint" />
            Beta on TestFlight
          </p>
          <h1 className="mt-6 text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl xl:text-[4.25rem]">
            Your PCB design lead,
            <br />
            <Serif>in your pocket.</Serif>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Chat from your iPhone with an agent that runs on your own Windows PC. It reads, checks and edits your
            KiCad boards, and keeps a record of all it does.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BetaButton />
            <Button href="#how" variant="ghost">
              See how it works
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted">iPhone app · Server for Windows · Your own Claude account</p>
        </div>

        <div data-reveal className="relative mx-auto h-[540px] w-full max-w-[400px] sm:h-[600px] lg:max-w-[500px]">
          <div
            aria-hidden
            className="absolute top-1/4 left-0 size-64 rounded-full bg-mint/20 blur-[80px] sm:size-80"
          />
          <Phone
            shot="chat-picture"
            alt="Board Pilot chat: the lead edits the board file, runs a DRC check and a render, and shows a picture of the board."
            className="absolute top-8 right-0 w-[225px] sm:w-[270px]"
          />
          <img
            src={asset("/logo.webp")}
            alt="Board Pilot logo: a paper plane made of a circuit board"
            width={640}
            height={640}
            className="absolute top-[30%] -left-3 w-[230px] drop-shadow-[0_20px_40px_rgb(0_0_0/0.5)] sm:-left-6 sm:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}

function WorksWith() {
  const names = ["KiCad", "Claude Code", "Ansys HFSS", "openEMS", "Tailscale"];
  return (
    <section aria-label="Works with" className="border-y border-line">
      <div className={`${container} flex flex-col items-center gap-5 py-8 sm:flex-row sm:justify-between`}>
        <p className="text-xs tracking-[0.18em] text-muted uppercase">Works with</p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg font-medium text-ink/80">
          {names.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const notes = [
  { n: 1, text: "Each KiCad edit logged with its diff", top: "16%", x: -120, side: "left" },
  { n: 2, text: "Checks run through one command", top: "23.5%", x: 10, side: "right" },
  { n: 3, text: "Pictures and PDFs right in the chat", top: "56%", x: -80, side: "left" },
] as const;

function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <div className={container}>
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <Title>
            Long design sessions lose their context.
            <br />
            <Serif>Your board file doesn&apos;t.</Serif>
          </Title>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Every new chat starts with the same brief: rules, folder map, boards, design summary, newest checks and
            the journal. The lead picks up where the last chat stopped.
          </p>
        </div>

        <div data-reveal className="relative mx-auto mt-16 w-[280px] max-w-4xl lg:w-full">
          <Phone
            shot="chat-picture"
            alt="A chat with the lead that shows an edit, two check jobs and a board picture."
            className="relative mx-auto w-[280px]"
          />
          {notes.map((a) => (
            <div key={a.n} aria-hidden>
              <span
                className="absolute z-10 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-mint text-xs font-semibold text-navy shadow-[0_0_0_6px_rgb(111_242_179/0.2),0_0_18px_rgb(111_242_179/0.6)]"
                style={{ top: a.top, left: `calc(50% + ${a.x}px)` }}
              >
                {a.n}
              </span>
              <div
                className={`absolute hidden -translate-y-1/2 items-center lg:flex ${a.side === "right" ? "flex-row-reverse" : ""}`}
                style={
                  a.side === "left"
                    ? { top: a.top, left: 0, right: `calc(50% - ${a.x}px)` }
                    : { top: a.top, right: 0, left: `calc(50% + ${a.x}px)` }
                }
              >
                <p className="w-52 shrink-0 rounded-xl border border-line bg-navy-2/90 px-4 py-3 text-sm leading-snug">
                  {a.text}
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-mint/20 via-mint/60 to-mint/20" />
              </div>
            </div>
          ))}
        </div>
        <ol className="mx-auto mt-10 grid max-w-sm gap-3 lg:sr-only">
          {notes.map((a) => (
            <li key={a.n} className="flex items-start gap-3 text-sm">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-semibold text-navy">
                {a.n}
              </span>
              <span className="pt-0.5">{a.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Feature({
  eyebrow,
  title,
  points,
  shot,
  alt,
  flip,
}: {
  eyebrow: string;
  title: ReactNode;
  points: ReactNode[];
  shot: string;
  alt: string;
  flip?: boolean;
}) {
  return (
    <div data-reveal className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className={flip ? "lg:order-last" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">{title}</h3>
        <ul className="mt-7 space-y-4">
          {points.map((p, i) => (
            <li key={i} className="flex gap-3 text-muted">
              <Check aria-hidden className="mt-1 size-4 shrink-0 text-mint" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex justify-center">
        <div aria-hidden className="bg-dots fade-mask absolute inset-x-0 -inset-y-10" />
        <Phone shot={shot} alt={alt} className="relative w-[250px] sm:w-[280px]" />
      </div>
    </div>
  );
}

function Features() {
  const sections = ["Specs", "BOM", "Checks", "Simulations", "Changes", "Outputs", "Files"];
  return (
    <section id="features" className="border-t border-line py-24 sm:py-32">
      <div className={`${container} space-y-28 sm:space-y-36`}>
        <Feature
          eyebrow="The lead chat"
          title="Ask in plain words. The lead does the work on your PC."
          points={[
            "A Claude Code agent that runs on your PC with your own Claude account.",
            "It runs DRC, limits, BOM, reference check, renders and Gerbers through one command: bp.",
            "It asks when it needs a decision, and a push notification tells you when it is done.",
          ]}
          shot="chat-question"
          alt="The lead asks a question in the chat and waits for an answer."
        />
        <Feature
          flip
          eyebrow="The Board file"
          title="Seven sections, the same for every board."
          points={[
            <span key="s">
              {sections.map((s, i) => (
                <span key={s}>
                  <span className="text-ink">{s}</span>
                  {i < sections.length - 1 ? " · " : ""}
                </span>
              ))}
            </span>,
            "Specs, datasheets and reference designs are stored with the board.",
            "You always know where to look, and so does the lead.",
          ]}
          shot="board"
          alt="The Board file of a demo sensor board with its sections."
        />
        <Feature
          eyebrow="Changes you can undo"
          title="Each KiCad edit has a diff and an Undo button."
          points={[
            "The lead edits only draft copies. Released versions are read-only.",
            "Every edit is logged with the file, the time and the lines it changed.",
            "One tap puts the file back as it was.",
          ]}
          shot="change"
          alt="A change record: a diff of the KiCad board file and an Undo button."
        />
      </div>
    </section>
  );
}

function Guardrails() {
  const points = [
    { icon: UserLock, title: "Its own Windows user", text: "The lead runs as a separate Windows user that can write only inside the board folder." },
    { icon: ShieldCheck, title: "A hook stops stray writes", text: "A hook refuses every write outside the folder structure, before it happens." },
    { icon: FolderLock, title: "Released means read-only", text: "Released board versions cannot change. The lead works on draft copies." },
  ];
  return (
    <section className="py-8 sm:py-12">
      <div className={container}>
        <div data-reveal className="relative overflow-hidden rounded-2xl border border-line bg-navy-2 p-6 sm:p-12">
          <div aria-hidden className="bg-grid fade-mask absolute inset-0 opacity-60" />
          <div className="relative">
            <Eyebrow>Guardrails</Eyebrow>
            <Title className="mt-4 max-w-3xl">
              It works only <Serif>inside your board folder.</Serif>
            </Title>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {points.map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-t border-line pt-6">
                  <Icon aria-hidden className="size-6 text-gold" />
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Install the server on your Windows PC", text: "The server and the lead run on your own PC. The lead uses your own Claude account." },
    { title: "Connect your iPhone over Tailscale", text: "Enter the server address and token in Settings. Data stays between your phone and your PC." },
    { title: "Chat with your design lead", text: "Ask for a check, an edit or a datasheet. Attach a PDF or a photo when it helps." },
  ];
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className={container}>
        <div data-reveal>
          <Eyebrow>How it works</Eyebrow>
          <Title className="mt-4 max-w-2xl">
            Three steps, <Serif>then just talk.</Serif>
          </Title>
        </div>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal className="bg-navy p-6 sm:p-8">
              <span className="font-serif text-5xl text-copper italic">0{i + 1}</span>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted">
          No server yet? The app has a demo mode with sample data.
        </p>
      </div>
    </section>
  );
}

function Simulation() {
  return (
    <section id="simulation" className="border-t border-line py-24 sm:py-32">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
        <div data-reveal>
          <Eyebrow>Simulation</Eyebrow>
          <Title className="mt-4">
            HFSS and openEMS, <Serif>found and checked for you.</Serif>
          </Title>
          <ul className="mt-7 space-y-4 text-muted">
            {[
              "The server looks for Ansys HFSS (AEDT) and openEMS on your PC and checks that they run.",
              "Pick the tool and the run folder for each project in the app.",
              "Every board has a Simulations section in its Board file.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-mint" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-sm text-gold">
            <span className="size-1.5 rounded-full bg-gold" />
            Model building by the lead: coming next
          </p>
        </div>
        <div data-reveal className="relative flex justify-center">
          <div aria-hidden className="absolute top-1/4 size-72 rounded-full bg-copper/15 blur-[90px]" />
          <Phone
            shot="sim-tools"
            alt="Simulation tools screen: Ansys HFSS is ready, openEMS is not set up, and each project has a tool and a run folder."
            className="relative w-[250px] sm:w-[280px]"
          />
        </div>
      </div>
    </section>
  );
}

function Facts() {
  const facts = [
    { n: "7", text: "sections, the same for every board" },
    { n: "1", text: "command for every check" },
    { n: "0", text: "files outside your structure" },
  ];
  return (
    <section aria-label="Facts" className="bg-grid border-y border-line">
      <ul className={`${container} grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0`}>
        {facts.map((f) => (
          <li key={f.n} data-reveal className="px-2 py-8 sm:px-8 sm:py-14">
            <span className="font-serif text-7xl leading-none text-cream italic">{f.n}</span>
            <p className="mt-3 text-muted">{f.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="absolute top-1/2 left-1/2 size-[28rem] -translate-1/2 rounded-full bg-mint/10 blur-[100px]" />
      <div data-reveal className={`${container} relative text-center`}>
        <img src={asset("/logo-256.png")} alt="" width={96} height={96} className="mx-auto" />
        <h2 className="mx-auto mt-8 max-w-3xl font-serif text-5xl leading-[1.05] text-balance text-cream italic sm:text-7xl">
          Take your design lead with you.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Board Pilot is in beta on TestFlight. Send a short email and we will add you.
        </p>
        <BetaButton className="mt-10" />
      </div>
    </section>
  );
}
