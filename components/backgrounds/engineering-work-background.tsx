
"use client";

import { motion, useReducedMotion } from "motion/react";

const services = [
  { x: 14, y: 24, label: "API" },
  { x: 43, y: 17, label: "QUEUE" },
  { x: 76, y: 27, label: "WORKER" },
  { x: 29, y: 57, label: "EVENTS" },
  { x: 63, y: 58, label: "DATA" },
  { x: 87, y: 76, label: "STORE" },
];

const flows = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 0, to: 3 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 4 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
];

export default function EngineeringWorkBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient
            id="engineering-flow-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="var(--sage)" />
            <stop offset="100%" stopColor="var(--blue)" />
          </linearGradient>

          <radialGradient id="engineering-work-glow">
            <stop offset="0%" stopColor="var(--blue)" stopOpacity=".12" />
            <stop offset="100%" stopColor="var(--blue)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse
          cx="65"
          cy="39"
          rx="42"
          ry="37"
          fill="url(#engineering-work-glow)"
        />

        {flows.map(({ from, to }, index) => {
          const start = services[from];
          const end = services[to];

          const middleX = (start.x + end.x) / 2;
          const middleY = (start.y + end.y) / 2;

          return (
            <g key={`${from}-${to}`}>
              <path
                d={`M ${start.x} ${start.y} L ${middleX} ${middleY} L ${end.x} ${end.y}`}
                stroke="url(#engineering-flow-gradient)"
                strokeWidth=".14"
                strokeOpacity=".28"
                vectorEffect="non-scaling-stroke"
              />

              {!shouldReduceMotion && (
                <motion.circle
                  r=".3"
                  fill={index % 2 === 0 ? "var(--terracotta)" : "var(--blue)"}
                  initial={{
                    cx: start.x,
                    cy: start.y,
                    opacity: 0,
                  }}
                  animate={{
                    cx: [start.x, middleX, end.x],
                    cy: [start.y, middleY, end.y],
                    opacity: [0, 0.9, 0],
                  }}
                  transition={{
                    duration: 3.5 + (index % 3),
                    delay: index * 0.6,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    ease: "linear",
                  }}
                />
              )}
            </g>
          );
        })}

        {services.map((service, index) => (
          <g key={service.label}>
            <rect
              x={service.x - 2.4}
              y={service.y - 2.4}
              width="4.8"
              height="4.8"
              rx=".8"
              fill="var(--background)"
              fillOpacity=".7"
              stroke="var(--sage)"
              strokeOpacity=".45"
              strokeWidth=".12"
              vectorEffect="non-scaling-stroke"
            />

            <circle
              cx={service.x}
              cy={service.y}
              r=".55"
              fill={
                index % 3 === 0
                  ? "var(--terracotta)"
                  : index % 3 === 1
                    ? "var(--blue)"
                    : "var(--sage)"
              }
              fillOpacity=".85"
            />

            {!shouldReduceMotion && (
              <motion.rect
                x={service.x - 3.2}
                y={service.y - 3.2}
                width="6.4"
                height="6.4"
                rx="1.2"
                fill="none"
                stroke="var(--sage)"
                strokeWidth=".12"
                vectorEffect="non-scaling-stroke"
                animate={{
                  opacity: [0.45, 0, 0.45],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 4 + (index % 3),
                  delay: index * 0.5,
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
          className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-blue/5 blur-3xl sm:h-80 sm:w-80"
          animate={{
            x: [0, 28, 0],
            y: [0, -22, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/70" />
    </div>
  );
}
