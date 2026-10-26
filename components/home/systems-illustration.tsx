
"use client";

import {
    motion,
    useReducedMotion,
    useSpring,
    useTransform,
} from "motion/react";
import type { PointerEvent } from "react";

export default function SystemsIllustration() {
  const shouldReduceMotion = useReducedMotion();

  const pointerX = useSpring(0, { stiffness: 80, damping: 20 });
  const pointerY = useSpring(0, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(pointerY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(pointerX, [-0.5, 0.5], [-3, 3]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();

    if (bounds.width === 0 || bounds.height === 0) return;

    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const lineInitial = shouldReduceMotion
    ? false
    : { pathLength: 0, opacity: 0.25 };

  const lineAnimate = shouldReduceMotion
    ? undefined
    : { pathLength: 1, opacity: 1 };

  const cardInitial = shouldReduceMotion
    ? false
    : { opacity: 0, y: 8 };

  const cardAnimate = shouldReduceMotion
    ? undefined
    : { opacity: 1, y: 0 };

  const cardTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.45,
    delay: shouldReduceMotion ? 0 : delay,
    ease: "easeOut" as const,
  });

  return (
    <motion.div
      className="relative mx-auto w-full max-w-xl"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
      }}
    >
      <div className="absolute inset-8 rounded-full bg-sage/10 blur-3xl" />

      <svg
        viewBox="0 0 560 480"
        role="img"
        aria-labelledby="systems-title systems-description"
        className="relative h-auto w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="systems-title">A visual map of connected systems</title>
        <desc id="systems-description">
          Abstract connected nodes represent events flowing through services,
          data, and intelligent systems.
        </desc>

        <circle
          cx="280"
          cy="240"
          r="174"
          stroke="currentColor"
          strokeOpacity=".12"
          strokeDasharray="3 8"
        />
        <circle
          cx="280"
          cy="240"
          r="124"
          stroke="currentColor"
          strokeOpacity=".12"
        />

        {/* Animated connections */}
        <motion.path
          d="M86 134 C150 134 155 204 224 204"
          stroke="var(--sage)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={lineInitial}
          animate={lineAnimate}
          transition={cardTransition(0.1)}
        />
        <motion.path
          d="M224 204 C260 204 255 112 322 112"
          stroke="var(--terracotta)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={lineInitial}
          animate={lineAnimate}
          transition={cardTransition(0.35)}
        />
        <motion.path
          d="M224 204 C272 204 274 278 340 278"
          stroke="var(--blue)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={lineInitial}
          animate={lineAnimate}
          transition={cardTransition(0.5)}
        />
        <motion.path
          d="M340 278 C390 278 386 358 460 358"
          stroke="var(--sage)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={lineInitial}
          animate={lineAnimate}
          transition={cardTransition(0.7)}
        />
        <motion.path
          d="M322 112 C405 112 407 178 465 178"
          stroke="currentColor"
          strokeOpacity=".35"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={lineInitial}
          animate={lineAnimate}
          transition={cardTransition(0.6)}
        />

        {/* Event card */}
        <motion.g
          initial={cardInitial}
          animate={cardAnimate}
          transition={cardTransition(0.1)}
        >
          <rect
            x="34"
            y="104"
            width="104"
            height="60"
            rx="15"
            fill="var(--surface)"
            stroke="var(--sage)"
            strokeOpacity=".7"
          />
          <text
            x="86"
            y="129"
            textAnchor="middle"
            fill="var(--muted-foreground)"
            fontSize="10"
            letterSpacing="1.5"
          >
            EVENT
          </text>
          <text
            x="86"
            y="146"
            textAnchor="middle"
            fill="var(--foreground)"
            fontSize="13"
          >
            Received
          </text>
        </motion.g>

        {/* API card */}
        <motion.g
          initial={cardInitial}
          animate={cardAnimate}
          transition={cardTransition(0.3)}
        >
          <rect
            x="172"
            y="176"
            width="104"
            height="58"
            rx="15"
            fill="var(--surface)"
            stroke="var(--sage)"
            strokeWidth="1.5"
          />
          <circle cx="191" cy="196" r="4" fill="var(--sage)" />
          <text
            x="224"
            y="199"
            textAnchor="middle"
            fill="var(--foreground)"
            fontSize="12"
          >
            API
          </text>
          <text
            x="224"
            y="217"
            textAnchor="middle"
            fill="var(--muted-foreground)"
            fontSize="10"
          >
            Processing
          </text>
        </motion.g>

        {/* Service card */}
        <motion.g
          initial={cardInitial}
          animate={cardAnimate}
          transition={cardTransition(0.45)}
        >
          <rect
            x="280"
            y="82"
            width="104"
            height="60"
            rx="15"
            fill="var(--surface)"
            stroke="var(--terracotta)"
            strokeOpacity=".8"
          />
          <text
            x="332"
            y="106"
            textAnchor="middle"
            fill="var(--muted-foreground)"
            fontSize="10"
            letterSpacing="1.5"
          >
            SERVICE
          </text>
          <text
            x="332"
            y="124"
            textAnchor="middle"
            fill="var(--foreground)"
            fontSize="13"
          >
            Decisions
          </text>
        </motion.g>

        {/* Data card */}
        <motion.g
          initial={cardInitial}
          animate={cardAnimate}
          transition={cardTransition(0.55)}
        >
          <rect
            x="296"
            y="250"
            width="104"
            height="58"
            rx="15"
            fill="var(--surface)"
            stroke="var(--blue)"
            strokeOpacity=".8"
          />
          <text
            x="348"
            y="274"
            textAnchor="middle"
            fill="var(--muted-foreground)"
            fontSize="10"
            letterSpacing="1.5"
          >
            DATA
          </text>
          <text
            x="348"
            y="291"
            textAnchor="middle"
            fill="var(--foreground)"
            fontSize="13"
          >
            Signals
          </text>
        </motion.g>

        {/* Intelligence card */}
        <motion.g
          initial={cardInitial}
          animate={cardAnimate}
          transition={cardTransition(0.65)}
        >
          <rect
            x="414"
            y="148"
            width="112"
            height="60"
            rx="15"
            fill="var(--surface)"
            stroke="currentColor"
            strokeOpacity=".35"
          />
          <text
            x="470"
            y="172"
            textAnchor="middle"
            fill="var(--muted-foreground)"
            fontSize="10"
            letterSpacing="1.5"
          >
            INTELLIGENCE
          </text>
          <text
            x="470"
            y="190"
            textAnchor="middle"
            fill="var(--foreground)"
            fontSize="13"
          >
            Insights
          </text>
        </motion.g>

        {/* Outcome card */}
        <motion.g
          initial={cardInitial}
          animate={cardAnimate}
          transition={cardTransition(0.8)}
        >
          <rect
            x="408"
            y="330"
            width="118"
            height="58"
            rx="15"
            fill="var(--surface)"
            stroke="var(--sage)"
            strokeOpacity=".8"
          />
          <text
            x="467"
            y="354"
            textAnchor="middle"
            fill="var(--muted-foreground)"
            fontSize="10"
            letterSpacing="1.5"
          >
            OUTCOME
          </text>
          <text
            x="467"
            y="372"
            textAnchor="middle"
            fill="var(--foreground)"
            fontSize="13"
          >
            Reliable flow
          </text>
        </motion.g>

        {/* Subtle pulsing signal nodes */}
        <motion.circle
          cx="145"
          cy="286"
          r="4"
          fill="var(--terracotta)"
          animate={
            shouldReduceMotion ? undefined : { scale: [1, 1.35, 1] }
          }
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="414"
          cy="278"
          r="4"
          fill="var(--blue)"
          animate={
            shouldReduceMotion ? undefined : { scale: [1, 1.3, 1] }
          }
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          transition={{
            duration: 2.4,
            delay: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="190"
          cy="350"
          r="3"
          fill="var(--sage)"
          animate={
            shouldReduceMotion ? undefined : { scale: [1, 1.4, 1] }
          }
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          transition={{
            duration: 2.8,
            delay: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="392"
          cy="62"
          r="3"
          fill="var(--terracotta)"
          animate={
            shouldReduceMotion ? undefined : { scale: [1, 1.4, 1] }
          }
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          transition={{
            duration: 2.6,
            delay: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="125"
          cy="370"
          r="5"
          fill="var(--blue)"
          animate={
            shouldReduceMotion ? undefined : { scale: [1, 1.25, 1] }
          }
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          transition={{
            duration: 2.5,
            delay: 1.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      <p className="relative -mt-1 text-center font-mono text-[10px] tracking-[0.2em] text-muted sm:text-xs">
        EVENTS → SYSTEMS → OUTCOMES
      </p>
    </motion.div>
  );
}
