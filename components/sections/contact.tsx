"use client";

import { useEffect, useState } from "react";
import { Container, SectionLabel } from "@/components/container";
import { Magnetic } from "@/components/magnetic";
import { bio } from "@/lib/bio";

const asciiSkull = [
  "      .-=================-.",
  "   .-'   .---.   .---.   '-.",
  "  /     /  o  \\ /  o  \\     \\",
  " |      \\     /_\\     /      |",
  " |        .--'   '--.        |",
  " |       /  .-----_. \\       |",
  "  \\      |  '.___.'  |      /",
  "   '._    '._     _.'    _.'",
  "      '-._   '---'   _.-'",
  "          |  _   _  |",
  "       ___|_/ \\_/ \\_|___",
  "      /___  CONTACT  ___\\",
];

export function Contact() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <section id="contact" className="py-20 md:py-48">
      <Container>
        <SectionLabel index="05" title="Contact" />
        <div className="flex flex-col items-center gap-12 text-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            data-cursor="terminal"
            className="serif-italic group relative text-[14vw] leading-[0.9] text-fg transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-offset-8 md:text-[10vw]"
          >
            Let&apos;s talk.
            <span className="absolute -bottom-3 left-1/2 h-px w-0 -translate-x-1/2 bg-fg transition-all duration-700 group-hover:w-[82%]" />
          </button>

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

      {open && (
        <div
          className="fixed inset-0 z-[180] flex items-center justify-center bg-bg/88 px-4 py-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-terminal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="contact-terminal w-full max-w-3xl overflow-hidden border border-fg bg-bg text-left shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
            <div className="flex items-center justify-between border-b border-line px-4 py-3 md:px-5">
              <div className="mono flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted">
                <span className="h-2 w-2 rounded-full bg-fg" />
                contact.shell
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:text-fg"
              >
                Close
              </button>
            </div>

            <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
              <div className="border-b border-line p-5 md:border-b-0 md:border-r md:p-6">
                <p
                  id="contact-terminal-title"
                  className="mono text-[10px] uppercase tracking-[0.22em] text-muted"
                >
                  /open-channel
                </p>
                <div className="contact-ascii-stage mt-5 overflow-hidden border border-line bg-fg/[0.025] px-3 py-4">
                  <pre className="mono contact-ascii text-[9px] leading-[1.05] text-fg sm:text-[10px] md:text-[11px]">
                    {asciiSkull.map((line, lineIndex) => (
                      <span
                        key={`${line}-${lineIndex}`}
                        className="contact-ascii-line block"
                      >
                        {line.split("").map((char, charIndex) => (
                          <span
                            key={`${lineIndex}-${charIndex}`}
                            className="contact-ascii-char"
                            style={{
                              animationDelay: `${lineIndex * 58 + charIndex * 8}ms`,
                            }}
                          >
                            {char === " " ? "\u00a0" : char}
                          </span>
                        ))}
                      </span>
                    ))}
                  </pre>
                </div>
                <p className="mono mt-4 text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted">
                  no form. no maze. just direct signal.
                </p>
              </div>

              <div className="p-5 md:p-6">
                <div className="mono space-y-3 text-[12px] leading-relaxed text-fg md:text-[13px]">
                  <p>
                    <span className="text-muted">const</span> contact = {"{"}
                  </p>
                  <p className="pl-4">
                    email:{" "}
                    <a
                      href={bio.socials.email.url}
                      className="underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
                    >
                      &quot;{bio.email}&quot;
                    </a>
                    ,
                  </p>
                  <p className="pl-4">
                    phone:{" "}
                    <a
                      href={`tel:${bio.phone.replace(/\s+/g, "")}`}
                      className="underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
                    >
                      &quot;{bio.phone}&quot;
                    </a>
                    ,
                  </p>
                  <p className="pl-4">
                    linkedin:{" "}
                    <a
                      href={bio.socials.linkedin.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
                    >
                      &quot;/{bio.socials.linkedin.handle}&quot;
                    </a>
                    ,
                  </p>
                  <p className="pl-4">
                    instagram:{" "}
                    <a
                      href={bio.socials.instagram.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
                    >
                      &quot;@{bio.socials.instagram.handle}&quot;
                    </a>
                    ,
                  </p>
                  <p>{"};"}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={bio.socials.email.url}
                    className="mono inline-flex border border-line px-3 py-2 text-[10px] uppercase tracking-widest transition-colors hover:bg-fg hover:text-bg"
                  >
                    Send email
                  </a>
                  <a
                    href={`tel:${bio.phone.replace(/\s+/g, "")}`}
                    className="mono inline-flex border border-line px-3 py-2 text-[10px] uppercase tracking-widest transition-colors hover:bg-fg hover:text-bg"
                  >
                    Call
                  </a>
                  <a
                    href={bio.socials.linkedin.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mono inline-flex border border-line px-3 py-2 text-[10px] uppercase tracking-widest transition-colors hover:bg-fg hover:text-bg"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
