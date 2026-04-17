"use client";

import { useEffect, useRef } from "react";

const FPS = 24;
const FRAME_MS = 1000 / FPS;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: pos.x, y: pos.y };
    let lastFrame = 0;
    let rafId = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) {
        visible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      const target = e.target as HTMLElement | null;
      const hovered = !!target?.closest(
        "a, button, [role='button'], input, textarea, label"
      );
      if (ringRef.current) {
        ringRef.current.classList.toggle("is-hover", hovered);
      }
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const tick = (now: number) => {
      if (now - lastFrame >= FRAME_MS) {
        lastFrame = now;
        const lerp = 0.28;
        ringPos.x += (pos.x - ringPos.x) * lerp;
        ringPos.y += (pos.y - ringPos.y) * lerp;

        const sx = Math.round(ringPos.x);
        const sy = Math.round(ringPos.y);
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${Math.round(pos.x)}px, ${Math.round(pos.y)}px) translate(-50%, -50%)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate(${sx}px, ${sy}px) translate(-50%, -50%)`;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
    </>
  );
}
