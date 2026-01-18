import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Research | Vinamra Sharma | AI Compilers, Edge AI & Ethical AI | University of Glasgow",
  description: "Research in AI compilers, Edge AI, and Ethical AI at University of Glasgow. Publications on biases in edge language models, efficient tiny machine learning for human activity recognition, and adaptive compiler optimization. Best Paper Awards at IEEE RTSI 2024 and Springer conferences. 5 research publications including work on transfer learning for adaptive compiler optimization in edge devices.",
  path: "/research",
  keywords: [
    "AI compilers research",
    "Edge AI",
    "ethical AI",
    "bias detection",
    "machine learning research",
    "compiler optimization",
    "transfer learning",
    "adaptive optimization",
    "human activity recognition",
    "low-power devices",
    "edge language models",
    "tiny machine learning",
    "Vinamra Sharma research",
    "University of Glasgow research",
    "PhD research",
    "research publications",
    "Best Paper Award",
    "IEEE RTSI",
    "arXiv",
    "MobiUK",
    "research papers",
    "AI systems",
    "hardware-software co-design",
    "memory optimization",
    "compute optimization",
    "Dr José Cano Reyes",
    "STMicroelectronics",
    "Danilo Pau",
    "research collaboration",
    "academic research",
    "scientific publications",
    "peer-reviewed papers",
    "conference papers",
    "journal articles",
  ],
  type: "website",
  section: "Research",
});

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
