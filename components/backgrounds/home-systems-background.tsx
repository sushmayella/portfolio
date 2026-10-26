
"use client";

import { motion, useReducedMotion } from "motion/react";

const nodes = [
  { x: 8, y: 25 },
  { x: 22, y: 62 },
  { x: 35, y: 18 },
  { x: 47, y: 43 },
  { x: 59, y: 15 },
  { x: 69, y: 68 },
  { x: 83, y: 32 },
  { x: 94, y: 57 },
  { x: 40, y: 82 },
  { x: 14, y: 85 },
];

const connections = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 8],
  [2, 3],
  [2, 4],
  [3, 4],
  [3, 5],
  [3, 8],
  [4, 6],
  [5, 6],
  [5, 7],
  [5, 8],
  [6, 7],
  [8, 9],
  [1, 9],
];

export default function HomeSystemsBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <radialGradient id="home-network-glow">
            <stop offset="0%" stopColor="var(--sage)" stopOpacity=".12" />
            <stop offset="100%" stopColor="var(--sage)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse
          cx="70"
          cy="36"
          rx="38"
          ry="34"
          fill="url(#home-network-glow)"
        />

        {connections.map(([from, to], index) => {
          const start = nodes[from];
          const end = nodes[to];

          return (
            <g key={`${from}-${to}`}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="var(--sage)"
                strokeWidth=".12"
                strokeOpacity=".24"
                vectorEffect="non-scaling-stroke"
              />

              {!shouldReduceMotion && (
                <motion.circle
                  r=".28"
                  fill={
                    index % 3 === 0
                      ? "var(--terracotta)"
                      : index % 3 === 1
                        ? "var(--blue)"
                        : "var(--sage)"
                  }
                  initial={{
                    cx: start.x,
                    cy: start.y,
                    opacity: 0,
                  }}
                  animate={{
                    cx: [start.x, end.x],
                    cy: [start.y, end.y],
                    opacity: [0, 0.85, 0],
                  }}
                  transition={{
                    duration: 4 + (index % 4),
                    delay: index * 0.45,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "linear",
                  }}
                />
              )}
            </g>
          );
        })}

        {nodes.map((node, index) => (
          <g key={`node-${index}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r=".55"
              fill="var(--sage)"
              fillOpacity=".45"
            />

            {!shouldReduceMotion && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r=".8"
                fill="none"
                stroke={
                  index % 3 === 0
                    ? "var(--terracotta)"
                    : index % 3 === 1
                      ? "var(--blue)"
                      : "var(--sage)"
                }
                strokeWidth=".12"
                animate={{
                  r: [0.8, 2.1, 0.8],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 4 + (index % 3),
                  delay: index * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </g>
        ))}
      </svg>

      {!shouldReduceMotion && (
        <motion.div
          className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-sage/5 blur-3xl sm:h-96 sm:w-96"
          animate={{
            x: [0, -35, 0],
            y: [0, 24, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/70" />
    </div>
  );
}
