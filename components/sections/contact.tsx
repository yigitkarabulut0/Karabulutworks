"use client";

import { Container, SectionLabel } from "@/components/container";
import { Magnetic } from "@/components/magnetic";
import { bio } from "@/lib/bio";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-48">
      <Container>
        <SectionLabel index="05" title="Contact" />
        <div className="flex flex-col items-center gap-12 text-center">
          <h2 className="serif-italic text-[14vw] leading-[0.9] md:text-[10vw]">
            Let&apos;s talk.
          </h2>

          <Magnetic strength={0.45}>
            <a
              href={bio.socials.email.url}
              data-cursor="email"
              className="serif inline-block text-2xl underline decoration-line underline-offset-[0.25em] hover:decoration-fg transition-colors md:text-4xl"
            >
              {bio.email}
            </a>
          </Magnetic>

          <div className="mono mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-widest text-muted">
            <a
              href={`tel:${bio.phone.replace(/\s+/g, "")}`}
              data-cursor="call"
              className="hover:text-fg transition-colors"
            >
              {bio.phone}
            </a>
            <span aria-hidden>·</span>
            <a
              href={bio.socials.linkedin.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="open"
              className="hover:text-fg transition-colors"
            >
              LinkedIn ↗
            </a>
            <span aria-hidden>·</span>
            <a
              href={bio.socials.instagram.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="open"
              className="hover:text-fg transition-colors"
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
