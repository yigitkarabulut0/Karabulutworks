import { Container, SectionLabel } from "@/components/container";
import { RevealText } from "@/components/reveal-text";
import { bio } from "@/lib/bio";

export function Intro() {
  return (
    <section id="about" className="py-20 md:py-48">
      <Container>
        <SectionLabel index="00" title="Index" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <aside className="md:col-span-3">
            <p className="eyebrow">b. {bio.yearOfBirth}</p>
            <p className="mono mt-2 text-[12px] leading-relaxed text-muted">
              Currently shipping MyDoll.app & ColorMosaic — based between London
              and Istanbul.
            </p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="serif text-3xl leading-tight md:text-5xl lg:text-6xl">
              <RevealText
                text={bio.tagline}
                splitBy="word"
                stagger={0.045}
                duration={1.0}
              />
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
