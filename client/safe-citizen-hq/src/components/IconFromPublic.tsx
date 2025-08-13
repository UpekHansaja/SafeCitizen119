"use client";

import * as React from "react";
import { cn } from "@/lib/ui";

/**
 * Renders a monochrome SVG from /public with CSS mask, so it inherits color.
 * Example usage:
 *   <IconFromPublic src="/icons/crime.svg" className="h-5 w-5 text-red-500" />
 */
export function IconFromPublic({
  src,
  className,
  title,
}: {
  src: string;
  className?: string;
  title?: string;
}) {
  return (
    <span
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      title={title}
      className={cn("inline-block align-middle bg-current", className)}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
