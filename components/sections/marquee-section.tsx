import { Marquee } from "@/components/marquee";
import { marqueeWords } from "@/lib/bio";

export function MarqueeSection() {
  return (
    <section className="border-y border-line py-10 md:py-16" aria-hidden>
      <Marquee items={marqueeWords} speed={70} />
    </section>
  );
}
