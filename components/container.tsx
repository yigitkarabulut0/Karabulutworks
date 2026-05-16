import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

export function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex items-baseline gap-6 border-t border-line pt-6 md:mb-20">
      <span className="eyebrow">{index}</span>
      <span className="eyebrow">— {title}</span>
    </div>
  );
}
