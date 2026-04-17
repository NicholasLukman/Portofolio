"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "header" | "footer";
  className?: string;
  stagger?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  as: Tag = "div",
  className,
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const node = ref.current;
      if (!node) return;
      const targets = stagger ? Array.from(node.children) : [node];
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "steps(8)",
        delay,
        stagger: stagger ? 0.1 : 0,
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
