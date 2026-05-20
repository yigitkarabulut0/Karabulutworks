import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/container";
import { Magnetic } from "@/components/magnetic";
import { RevealText } from "@/components/reveal-text";
import { DevicePreview } from "@/components/device-preview";
import { Footer } from "@/components/sections/footer";
import { work, getWork, getAdjacentWork } from "@/lib/work";

type Params = { slug: string };

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.oneLiner,
    openGraph: {
      title: `${item.title} — Yigit Karabulut`,
      description: item.oneLiner,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const { prev, next } = getAdjacentWork(slug);
  const showPreview = item.category.toLowerCase().includes("ios") ||
    item.category.toLowerCase().includes("game") ||
    item.category.toLowerCase().includes("app");

  return (
    <main>
      {/* Breadcrumb */}
      <section className="pt-32 pb-2 md:pt-40">
        <Container>
          <div className="flex items-center justify-between border-b border-line pb-4">
            <Link
              href="/#work"
              data-cursor="back"
              className="mono inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted hover:text-fg transition-colors"
            >
              <span aria-hidden>←</span> All work
            </Link>
            <span className="mono text-[11px] uppercase tracking-widest text-muted">
              {item.year}
            </span>
          </div>
        </Container>
      </section>

      {/* Hero — title + one-liner */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <p className="eyebrow mb-6">{item.category}</p>
              <h1 className="serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                <RevealText
                  text={item.title}
                  splitBy="word"
                  stagger={0.05}
                  duration={1.1}
                  trigger="mount"
                />
              </h1>
              <p className="serif-italic mt-8 max-w-[36ch] text-xl leading-snug text-fg md:text-2xl">
                {item.oneLiner}
              </p>
            </div>
            <aside className="md:col-span-4">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-l-0 md:border-l md:border-line md:pl-8">
                <Meta term="Role" desc={item.role} />
                <Meta term="Year" desc={item.year} />
                {item.status && <Meta term="Status" desc={item.status} />}
                <Meta term="Stack" desc={item.stack.join(", ")} span={2} />
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      {/* Visual — only for app/game projects */}
      {showPreview && (
        <section className="pb-16 md:pb-24">
          <Container>
            {item.slug === "ninecells" && item.screenshots?.en ? (
              <>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {item.screenshots.en.map((src, i) => (
                    <div key={i} className="overflow-hidden rounded-2xl border border-line">
                      <Image
                        src={src}
                        alt={`${item.title} screenshot ${i + 1}`}
                        width={320}
                        height={693}
                        className="h-auto w-full"
                      />
                    </div>
                  ))}
                </div>
                <p className="mono mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-muted">
                  App Store Screenshots
                </p>
              </>
            ) : (
              <>
                <DevicePreview
                  title={item.title}
                  accent={item.accent ?? { from: "#0a0a0a", to: "#1a1a1a" }}
                  icon={item.icon}
                  initials={item.initials}
                  status={item.status}
                  className="mx-auto h-[60vh] min-h-[420px] w-full max-w-[920px] rounded-2xl border border-line bg-fg/[0.02] py-8"
                  variant="phone"
                />
                <p className="mono mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-muted">
                  Preview · brand-accurate stand-in
                </p>
              </>
            )}
          </Container>
        </section>
      )}

      {/* Body — single column, generous measure */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="mx-auto max-w-[68ch]">
            {item.body.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "serif text-2xl leading-[1.35] md:text-[28px]"
                    : "mt-6 text-lg leading-[1.65] text-fg md:text-xl"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      {item.link && (
        <section className="border-t border-line py-20 md:py-28">
          <Container className="flex flex-col items-center gap-5 text-center">
            <span className="eyebrow">
              {item.link.kind === "testflight"
                ? "Beta access"
                : item.link.kind === "store"
                  ? "Available now"
                  : "Visit"}
            </span>
            <Magnetic strength={0.4}>
              <a
                href={item.link.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="open"
                className="serif-italic inline-block text-4xl underline decoration-line underline-offset-[0.2em] hover:decoration-fg md:text-6xl"
              >
                {item.link.label} ↗
              </a>
            </Magnetic>
          </Container>
        </section>
      )}

      {/* Prev / Next */}
      <nav
        aria-label="More work"
        className="border-t border-line"
      >
        <Container className="grid grid-cols-2">
          <Link
            href={`/work/${prev.slug}`}
            data-cursor="prev"
            className="group flex flex-col items-start gap-1 border-r border-line py-10 pr-6"
          >
            <span className="mono text-[11px] uppercase tracking-widest text-muted">
              ← Previous
            </span>
            <span className="serif text-2xl leading-tight md:text-4xl">
              <span className="relative inline-block">
                {prev.title}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-fg transition-all duration-500 group-hover:w-full" />
              </span>
            </span>
            <span className="mono text-[11px] uppercase tracking-widest text-muted">
              {prev.year} · {prev.role}
            </span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            data-cursor="next"
            className="group flex flex-col items-end gap-1 py-10 pl-6 text-right"
          >
            <span className="mono text-[11px] uppercase tracking-widest text-muted">
              Next →
            </span>
            <span className="serif text-2xl leading-tight md:text-4xl">
              <span className="relative inline-block">
                {next.title}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-fg transition-all duration-500 group-hover:w-full" />
              </span>
            </span>
            <span className="mono text-[11px] uppercase tracking-widest text-muted">
              {next.year} · {next.role}
            </span>
          </Link>
        </Container>
      </nav>

      <Footer />
    </main>
  );
}

function Meta({
  term,
  desc,
  span = 1,
}: {
  term: string;
  desc: string;
  span?: 1 | 2;
}) {
  return (
    <div className={span === 2 ? "col-span-2" : ""}>
      <dt className="eyebrow">{term}</dt>
      <dd className="mono mt-2 text-[13px] leading-relaxed text-fg">{desc}</dd>
    </div>
  );
}
