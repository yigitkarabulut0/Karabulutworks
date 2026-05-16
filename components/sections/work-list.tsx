"use client";

import Link from "next/link";
import { useRef } from "react";
import { Container, SectionLabel } from "@/components/container";
import { work } from "@/lib/work";

export function WorkList() {
  return (
    <section id="work" className="py-16 md:py-32">
      <Container>
        <SectionLabel index="01" title="Selected Work" />
        <div className="mb-10 flex items-baseline justify-between border-t border-line pt-6 md:mb-14">
          <h2 className="serif text-3xl leading-tight md:text-5xl">
            Things I&apos;ve built, led or shipped.
          </h2>
          <p className="mono hidden text-[11px] uppercase tracking-widest text-muted md:block">
            2022 → 2026 · {work.length} projects
          </p>
        </div>
        <ul className="border-t border-line">
          {work.map((w, i) => (
            <WorkRow
              key={w.slug}
              index={String(i + 1).padStart(2, "0")}
              slug={w.slug}
              year={w.year}
              title={w.title}
              role={w.role}
              category={w.category}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}

function WorkRow({
  index,
  slug,
  year,
  title,
  role,
  category,
}: {
  index: string;
  slug: string;
  year: string;
  title: string;
  role: string;
  category: string;
}) {
  const rowRef = useRef<HTMLLIElement>(null);

  return (
    <li ref={rowRef} className="group border-b border-line">
      <Link
        href={`/work/${slug}`}
        data-cursor="open"
        className="grid grid-cols-12 items-center gap-x-4 gap-y-1 py-7 md:py-9"
      >
        <span className="mono col-span-2 text-[11px] uppercase tracking-widest text-muted md:col-span-1">
          {index}
        </span>

        <div className="col-span-10 flex flex-col md:col-span-7">
          <span className="serif text-3xl leading-[1.05] md:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              {title}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-fg transition-all duration-500 group-hover:w-full" />
            </span>
          </span>
          <span className="mono mt-2 text-[11px] uppercase tracking-widest text-muted md:hidden">
            {year} · {role}
          </span>
        </div>

        <span className="mono hidden text-right text-[11px] uppercase tracking-widest text-muted md:col-span-3 md:block">
          {role}
          <span className="block text-muted/70">{category}</span>
        </span>

        <span className="mono hidden text-right text-[11px] uppercase tracking-widest text-muted md:col-span-1 md:block">
          <span className="inline-block translate-x-0 transition-transform duration-500 group-hover:translate-x-2">
            {year} ↗
          </span>
        </span>
      </Link>
    </li>
  );
}
