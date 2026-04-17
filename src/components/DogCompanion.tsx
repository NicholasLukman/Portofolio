"use client";

import { useEffect, useRef } from "react";

const FPS = 24;
const FRAME_MS = 1000 / FPS;
const DOG_WIDTH = 48;
const DOG_HEIGHT = 40;
const TRAIL_OFFSET_X = 48;
const TRAIL_OFFSET_Y = 28;

export default function DogCompanion() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const node = rootRef.current;
    if (!node) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight - DOG_HEIGHT - 16;
    let currentX = targetX;
    let currentY = targetY;
    let prevX = currentX;
    let lastMoveAt = 0;
    let lastFrame = 0;
    let lastFacing: 1 | -1 = 1;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX - TRAIL_OFFSET_X;
      targetY = e.clientY + TRAIL_OFFSET_Y;
    };

    const clamp = (value: number, min: number, max: number) =>
      Math.max(min, Math.min(max, value));

    const tick = (now: number) => {
      if (now - lastFrame >= FRAME_MS) {
        lastFrame = now;

        const dx = targetX - currentX;
        const dy = targetY - currentY;
        const speed = 0.12;
        const stepX = dx * speed;
        const stepY = dy * speed;

        currentX += stepX;
        currentY += stepY;

        const movedPx = Math.hypot(currentX - prevX, currentY - (currentY - stepY));
        if (movedPx > 0.5) {
          lastMoveAt = now;
        }

        const directionDx = currentX - prevX;
        if (Math.abs(directionDx) > 0.3) {
          const facing: 1 | -1 = directionDx > 0 ? 1 : -1;
          if (facing !== lastFacing) {
            node.classList.toggle("flipped", facing === -1);
            lastFacing = facing;
          }
        }
        prevX = currentX;

        const isWalking = now - lastMoveAt < 160;
        node.classList.toggle("walking", isWalking);
        node.classList.toggle("idle", !isWalking);

        const leftPx = Math.round(
          clamp(currentX, 8, window.innerWidth - DOG_WIDTH - 8)
        );
        const topPx = Math.round(
          clamp(currentY, 8, window.innerHeight - DOG_HEIGHT - 8)
        );
        node.style.transform = `translate3d(${leftPx}px, ${topPx}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    node.classList.add("idle");
    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={rootRef} className="dog-companion" aria-hidden="true">
      <div className="dog-sprite-inner h-full w-full">
        <svg
          viewBox="0 0 48 40"
          className="dog-sprite"
          fill="none"
          shapeRendering="crispEdges"
        >
          {/* Body */}
          <rect x="10" y="16" width="24" height="12" fill="currentColor" />
          {/* Head */}
          <rect x="30" y="10" width="12" height="12" fill="currentColor" />
          {/* Snout */}
          <rect x="40" y="16" width="4" height="5" fill="currentColor" />
          {/* Nose */}
          <rect
            x="43"
            y="17"
            width="2"
            height="2"
            fill="var(--background)"
            opacity="0.6"
          />
          {/* Eye */}
          <rect
            x="36"
            y="13"
            width="2"
            height="2"
            fill="var(--background)"
          />
          {/* Ear */}
          <rect x="30" y="7" width="4" height="5" fill="currentColor" />
          <rect
            x="31"
            y="8"
            width="2"
            height="3"
            fill="var(--background)"
            opacity="0.25"
          />
          {/* Tail */}
          <g className="tail">
            <rect x="6" y="14" width="6" height="3" fill="currentColor" />
            <rect x="3" y="12" width="4" height="3" fill="currentColor" />
          </g>
          {/* Legs */}
          <g className="leg-back">
            <rect x="12" y="28" width="4" height="8" fill="currentColor" />
          </g>
          <g className="leg-back">
            <rect x="18" y="28" width="4" height="8" fill="currentColor" />
          </g>
          <g className="leg-front">
            <rect x="24" y="28" width="4" height="8" fill="currentColor" />
          </g>
          <g className="leg-front">
            <rect x="30" y="28" width="4" height="8" fill="currentColor" />
          </g>
          {/* Collar */}
          <rect
            x="30"
            y="21"
            width="4"
            height="2"
            fill="var(--accent)"
            opacity="0.9"
          />
        </svg>
      </div>
    </div>
  );
}
