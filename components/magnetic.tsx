"use client";

import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/cn";
import type React from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
  as?: "span" | "div";
  strength?: number;
  children: React.ReactNode;
};

export function Magnetic({
  as = "span",
  strength = 0.35,
  className,
  children,
  ...rest
}: Props) {
  const ref = useMagnetic<HTMLElement>(strength);
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={cn("inline-block", className)}
      {...rest}
    >
      <span className="magnetic-inner">{children}</span>
    </Tag>
  );
}
