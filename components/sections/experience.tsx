import { Container, SectionLabel } from "@/components/container";
import { RevealText } from "@/components/reveal-text";
import { bio, experience } from "@/lib/bio";

export function Experience() {
  return (
    <section id="about-long" className="py-24 md:py-40">
      <Container>
        <SectionLabel index="02" title="About / Trajectory" />
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="serif text-fg text-2xl leading-snug md:text-[28px] md:leading-[1.2]">
              <RevealText text={bio.longBio} stagger={0.015} duration={0.9} />
            </p>

            {/* Currently */}
            <div className="mt-10 border-t border-line pt-6">
              <p className="eyebrow mb-4 flex items-center gap-3">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-fg opacity-50" />
                  <span className="relative inline-block h-2 w-2 rounded-full bg-fg" />
                </span>
                Currently
              </p>
              <ul>
                {bio.currently.map((c) => (
                  <li
                    key={c}
                    className="flex items-baseline gap-3 border-b border-line py-3 text-[15px] leading-snug text-fg"
                  >
                    <span aria-hidden className="mono text-[10px] uppercase tracking-widest text-muted">
                      —
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mono mt-8 text-[11px] uppercase tracking-widest text-muted">
              {bio.location} · b. {bio.yearOfBirth}
            </p>
          </div>

          <ol className="md:col-span-7">
            {experience.map((e, i) => (
              <li
                key={`${e.year}-${e.company}-${i}`}
                className="grid grid-cols-12 items-baseline gap-3 border-t border-line py-6"
              >
                <span className="mono col-span-3 text-[11px] uppercase tracking-widest text-muted md:col-span-2">
                  {e.year}
                </span>
                <div className="col-span-9 md:col-span-10">
                  <p className="serif text-fg text-2xl leading-tight md:text-3xl">
                    {e.company}
                  </p>
                  <p className="mono mt-1 text-[11px] uppercase tracking-widest text-muted">
                    {e.role}
                  </p>
                  <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-fg">
                    {e.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
