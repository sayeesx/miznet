"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface NumberTickerProps extends React.ComponentPropsWithoutRef<"span"> {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  startValue = 0,
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(startValue);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          setTimeout(() => {
            const startTime = performance.now();
            const duration = 2000; // 2 seconds animation

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function (easeOutExpo)
              const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

              const current = startValue + (value - startValue) * ease;
              setDisplayValue(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }, delay * 1000);

          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, startValue, delay]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-wider text-black dark:text-white text-[64px] font-bold",
        className,
      )}
      {...props}
    >
      {Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(Number(displayValue.toFixed(decimalPlaces)))}
    </span>
  );
} 