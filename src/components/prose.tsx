import type { ReactNode } from "react";
import { Serif } from "@/components/site";

/** Page frame for text pages (privacy, support). */
export function ProsePage({ title, serif, intro, children }: { title: string; serif: string; intro: ReactNode; children: ReactNode }) {
  return (
    <div className="relative">
      <div aria-hidden className="bg-grid fade-mask absolute inset-x-0 top-0 h-80 opacity-70" />
      <article className="relative mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
          {title} <Serif>{serif}</Serif>
        </h1>
        <div className="mt-6 text-lg text-muted">{intro}</div>
        <div className="mt-12 space-y-10 [&_a]:text-mint [&_a]:underline [&_a]:underline-offset-4 [&_h2]:text-xl [&_h2]:font-semibold [&_li]:mt-2 [&_p]:mt-3 [&_p]:leading-relaxed [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-muted">
          {children}
        </div>
      </article>
    </div>
  );
}
