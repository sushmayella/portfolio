
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Skills",
  description:
    "Explore Sushma Yella's technical toolkit across backend engineering, distributed systems, cloud infrastructure, event-driven architectures, and AI engineering.",
};

export default function ToolkitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
