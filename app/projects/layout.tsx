import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Projects | Vinamra Sharma | AI, Sustainability & Social Impact Projects | 35+ Projects",
  description: "35+ innovative projects by Vinamra Sharma including TerraVerde (COP28 Overall Winner, UNICEF Open Source Award), mcurio.com (AI education platform), ClimateThread (sustainability platform), SustainEdge (carbon calculator), EcoChum (climate mental health), and award-winning hackathon projects. Filter by sector and technology stack. Projects span AI & Health, Sustainability & AI, Social Impact, IoT & Robotics, Education, and more.",
  path: "/projects",
  keywords: [
    "Vinamra Sharma projects",
    "AI projects",
    "sustainability projects",
    "social impact",
    "hackathon projects",
    "TerraVerde",
    "mcurio",
    "ClimateThread",
    "SustainEdge",
    "EcoChum",
    "Carbon Karma",
    "COP28 winner",
    "UNICEF award",
    "hackathon winner",
    "35+ projects",
    "React projects",
    "Python projects",
    "machine learning projects",
    "NLP projects",
    "computer vision",
    "IoT projects",
    "robotics",
    "web applications",
    "mobile apps",
    "entrepreneurial ventures",
    "award-winning projects",
    "MakeMIT winner",
    "HackDuke winner",
    "BioHack winner",
    "project portfolio",
    "software development",
    "full-stack projects",
    "AI innovations",
    "climate tech",
    "health tech",
    "edtech",
    "DevPost projects",
    "open source projects",
  ],
  type: "website",
  section: "Projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
