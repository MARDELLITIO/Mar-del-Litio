"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
  /** Retraso en ms para escalonar la aparición de varios elementos. */
  delay?: number;
  /** Renderiza sobre el hijo en vez de un <div> (mantiene la semántica). */
  asChild?: boolean;
};

/**
 * Envuelve contenido y lo hace aparecer con un fade-up cuando entra en viewport.
 * Respeta `prefers-reduced-motion`.
 */
export function Reveal({
  className,
  delay = 0,
  style,
  asChild = false,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // El fade se desactiva con la utilidad `motion-reduce` en CSS;
    // el observer sólo controla *cuándo* el contenido se vuelve visible.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn(
        "transition-all duration-500 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      {...props}
    />
  );
}
