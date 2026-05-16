"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { Magnetic } from "@/components/magnetic";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <Container className="flex items-center justify-between py-6">
        <Magnetic strength={0.25}>
          <Link
            href="/"
            data-cursor="home"
            className="mono pointer-events-auto inline-block text-[11px] uppercase tracking-widest hover:text-muted transition-colors"
          >
            YK ⏎
          </Link>
        </Magnetic>

        <nav className="pointer-events-auto flex items-center gap-6 mono text-[11px] uppercase tracking-widest">
          <Link href="/#work" data-cursor="work" className="hover:text-muted transition-colors">
            Work
          </Link>
          <Link href="/#about-long" data-cursor="about" className="hover:text-muted transition-colors">
            About
          </Link>
          <Link href="/#contact" data-cursor="contact" className="hover:text-muted transition-colors">
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}
