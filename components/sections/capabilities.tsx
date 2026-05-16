import { Container, SectionLabel } from "@/components/container";
import { skills, type Skill, type SkillGroup } from "@/lib/bio";

type GroupDef = { key: SkillGroup; index: string; title: string };

const GROUPS: GroupDef[] = [
  { key: "languages", index: "A", title: "Languages" },
  { key: "frontend", index: "B", title: "Frontend / Web" },
  { key: "mobile", index: "C", title: "Mobile · Native" },
  { key: "backend", index: "D", title: "Backend" },
  { key: "data", index: "E", title: "Data · ML" },
  { key: "infra", index: "F", title: "Infra · Platform" },
  { key: "security", index: "G", title: "Security" },
  { key: "practice", index: "H", title: "Practice" },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-32 md:py-40">
      <Container>
        <SectionLabel index="03" title="Capabilities" />

        <div className="mb-12 grid grid-cols-1 items-end gap-6 border-t border-line pt-6 md:mb-16 md:grid-cols-12 md:gap-12">
          <h2 className="serif text-3xl leading-tight md:col-span-8 md:text-5xl">
            Languages, frameworks and tools I&apos;ve actually shipped with.
          </h2>
          <p className="mono text-[12px] leading-relaxed text-muted md:col-span-4">
            Pulled from the projects on this site — and the ones still
            cooking. Not a wishlist, not a buzzword cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => {
            const items = skills.filter((s) => s.group === g.key);
            if (!items.length) return null;
            return <Column key={g.key} group={g} items={items} />;
          })}
        </div>
      </Container>
    </section>
  );
}

function Column({ group, items }: { group: GroupDef; items: Skill[] }) {
  return (
    <div>
      <header className="mb-4 flex items-baseline gap-3 border-b border-line pb-3">
        <span className="eyebrow">{group.index}</span>
        <span className="eyebrow">{group.title}</span>
        <span className="mono ml-auto text-[11px] uppercase tracking-widest text-muted/70">
          {String(items.length).padStart(2, "0")}
        </span>
      </header>
      <ul>
        {items.map((s) => (
          <li
            key={s.label}
            className="group flex items-baseline justify-between gap-4 border-b border-line py-3"
          >
            <span className="serif text-xl leading-tight">
              <span className="relative inline-block">
                {s.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-fg transition-all duration-500 group-hover:w-full" />
              </span>
            </span>
            {s.note && (
              <span className="mono text-right text-[10px] uppercase tracking-widest text-muted">
                {s.note}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
