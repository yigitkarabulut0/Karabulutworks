import { Container, SectionLabel } from "@/components/container";
import { certifications } from "@/lib/bio";

export function Certifications() {
  return (
    <section id="certifications" className="py-32 md:py-40">
      <Container>
        <SectionLabel index="04" title="Certifications" />
        <ul className="border-t border-line">
          {certifications.map((c, i) => (
            <li
              key={`${c.title}-${i}`}
              className="grid grid-cols-12 items-baseline gap-3 border-b border-line py-5"
            >
              <span className="mono col-span-2 text-[11px] uppercase tracking-widest text-muted md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="serif col-span-7 text-xl md:col-span-8 md:text-2xl">
                {c.title}
              </span>
              <span className="mono col-span-3 text-right text-[11px] uppercase tracking-widest text-muted">
                {c.issuer}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
