import { Container, SectionLabel } from "@/components/container";
import { RevealText } from "@/components/reveal-text";
import { bio, experience } from "@/lib/bio";

export function Experience() {
  return (
    <section id="about-long" className="py-32 md:py-40">
      <Container>
        <SectionLabel index="02" title="About / Trajectory" />
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="serif text-2xl leading-snug md:text-[28px]">
              <RevealText text={bio.longBio} stagger={0.02} duration={0.9} />
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
                  <p className="serif text-2xl leading-tight md:text-3xl">
                    {e.company}
                  </p>
                  <p className="mono mt-1 text-[11px] uppercase tracking-widest text-muted">
                    {e.role}
                  </p>
                  <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-fg/80">
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
