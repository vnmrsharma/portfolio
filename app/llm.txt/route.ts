import { NextRequest, NextResponse } from "next/server";
import { generateLLMTxt } from "@/lib/llm-txt";

const baseUrl = "https://vinamrasharma.com";

// Generate LLM.txt content for the entire site
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") || "/";

  let content = "";

  switch (path) {
    case "/":
      content = generateLLMTxt({
        title: "Vinamra Sharma - Home",
        description: "PhD candidate in AI compilers at University of Glasgow, AI Engineer at Unineed Limited, founder of mcurio.com and ClimateThread. 65+ awards, 110+ hackathons, 5 research publications.",
        url: `${baseUrl}/`,
        author: "Vinamra Sharma",
        keywords: [
          "AI compilers",
          "Edge AI",
          "machine learning",
          "PhD candidate",
          "AI Engineer",
          "hackathon winner",
          "research publications",
          "University of Glasgow",
          "mcurio",
          "ClimateThread",
        ],
        content: `Vinamra Sharma is a PhD candidate in the School of Computing Science at the University of Glasgow, researching AI compilers under the supervision of Dr José Cano Reyes. He works as an AI Engineer at Unineed Limited, building end-to-end GenAI solutions. He is the founder of mcurio.com (AI education platform) and ClimateThread (sustainability platform).

Key Achievements:
- 65+ awards and prizes from hackathons worldwide
- 110+ hackathons participated
- 5 research publications including 3 Best Paper Awards
- 550+ collaborators from 38+ countries

Research Interests: AI Compilers, EdgeAI, Ethical AI, and LLMs.

Recent Publications:
1. EdgeAI Models for Human Activity Recognition on Low-Power Devices (2025)
2. Biases in Edge Language Models: Detection, Analysis, and Mitigation (2025)
3. Efficient Tiny Machine Learning for Human Activity Recognition on Low-Power Edge Devices (2024) - Best Paper in Track Award
4. Phishing prevention techniques: past, present and future (2021) - Best Paper Award
5. Institutional Recommendation and Ranking System Based on Integrated Datasets and Analysis (2020) - Best Paper Award

Awards & Recognition: Multiple awards from 2019-2025 including hackathon wins at MIT, Harvard, Duke, UNICEF, COP28, and more.`,
        relatedLinks: [
          { title: "Research", url: `${baseUrl}/research` },
          { title: "Projects", url: `${baseUrl}/projects` },
          { title: "About", url: `${baseUrl}/about` },
          { title: "Contact", url: `${baseUrl}/contact` },
          { title: "Personal Blog", url: "https://wiki.vinamrasharma.com" },
        ],
      });
      break;

    case "/about":
      content = generateLLMTxt({
        title: "About Vinamra Sharma",
        description: "Learn about Vinamra Sharma's academic journey, research contributions, and entrepreneurial endeavors.",
        url: `${baseUrl}/about`,
        author: "Vinamra Sharma",
        keywords: ["academic journey", "education", "PhD", "MSc", "B.Tech", "research", "entrepreneurship"],
        content: `Vinamra Sharma's academic journey spans from India to Scotland:

Education:
- PhD in Computing Science (2025-Present): University of Glasgow, researching Transfer Learning for Adaptive Compiler Optimization in Edge Devices under Dr. José Cano Reyes.
- MSc in Computing Science (2022-2023): University of Glasgow, specialized in Edge AI and On-Device Learning. Thesis grade: A3. Collaborated with STMicroelectronics.
- B.Tech in Computer Science & Engineering (2018-2022): BTKIT, India. Graduated with First Class Honours (84%, Top 1% of class). Merit-Based Scholar.

Key Achievements: 65+ awards, 110+ hackathons, 5 publications, 550+ collaborators from 38+ countries.

Skills: Programming Languages (Python3, C++, C, JavaScript, Swift, OCaml), Libraries (TensorFlow, PyTorch, NLTK, OpenCV), Frameworks (React.js, FastAPI, LangChain, LLVM, MLIR), LLM APIs/SDKs, DevOps & Cloud, Tools.

Projects: Mcurio (AI education platform), ClimateThread (sustainability platform), and many hackathon-winning projects.`,
        relatedLinks: [
          { title: "Research", url: `${baseUrl}/research` },
          { title: "Projects", url: `${baseUrl}/projects` },
          { title: "Contact", url: `${baseUrl}/contact` },
        ],
      });
      break;

    case "/research":
      content = generateLLMTxt({
        title: "Research - Vinamra Sharma",
        description: "Research in AI compilers, Edge AI, and Ethical AI at University of Glasgow.",
        url: `${baseUrl}/research`,
        author: "Vinamra Sharma",
        keywords: ["AI compilers", "Edge AI", "ethical AI", "research publications", "compiler optimization"],
        content: `Research focuses on optimizing AI compilers and distributed systems to accelerate machine learning workloads across diverse hardware platforms.

Research Themes:
1. AI Compilers & Optimization: Developing adaptive compiler optimizations using transfer learning techniques.
2. Edge AI & On-Device Learning: Exploring techniques for deploying AI to edge devices with limited computational resources.
3. Ethical AI & Bias Detection: Investigating fairness and bias in AI systems, particularly on edge devices.

Publications:
- EdgeAI Models for Human Activity Recognition on Low-Power Devices (2025)
- Biases in Edge Language Models: Detection, Analysis, and Mitigation (2025)
- Efficient Tiny Machine Learning for Human Activity Recognition on Low-Power Edge Devices (2024) - Best Paper in Track Award
- Phishing prevention techniques: past, present and future (2021) - Best Paper Award
- Institutional Recommendation and Ranking System Based on Integrated Datasets and Analysis (2020) - Best Paper Award

Research Achievements: Best Paper in Track Award (IEEE RTSI 2024), Best Research Paper Awards (Springer, IEEE).`,
        relatedLinks: [
          { title: "Google Scholar", url: "https://scholar.google.com/citations?user=ivJzcpAAAAAJ" },
          { title: "Projects", url: `${baseUrl}/projects` },
        ],
      });
      break;

    case "/projects":
      content = generateLLMTxt({
        title: "Projects - Vinamra Sharma",
        description: "35+ innovative projects across AI, sustainability, health, and social impact.",
        url: `${baseUrl}/projects`,
        author: "Vinamra Sharma",
        keywords: ["projects", "hackathon", "AI projects", "sustainability", "social impact"],
        content: `35+ projects across multiple sectors including AI & Health, Sustainability & AI, Social Impact, IoT & Robotics, Education, and more.

Featured Projects:
- Mcurio: Free Decentralised AI-powered EdTech platform
- ClimateThread: Centralized hub for climate events and resources
- TerraVerde: Overall Winner at COP28, UNICEF Open Source Award - AI-powered renewable energy site recommendations
- SustainEdge: GenAI Carbon Footprint Calculator - Best-of-the-Rest (x3)
- EcoChum: AI-Powered Climate Mental Health Platform - Mystery Award (x2)
- Carbon Karma: Aggregating unused carbon credits for good

Award-Winning Projects: Multiple hackathon wins including MakeMIT, HackDuke, BioHack, COP28, and more.

Technologies: React, Node.js, Python, Machine Learning, AI, NLP, Computer Vision, Mobile Apps, Web Platforms, and more.`,
        relatedLinks: [
          { title: "DevPost Profile", url: "https://devpost.com/vnmrsharma" },
          { title: "Research", url: `${baseUrl}/research` },
        ],
      });
      break;

    case "/personal":
      content = generateLLMTxt({
        title: "Personal - Vinamra Sharma",
        description: "Hobbies, interests, and personal blog at wiki.vinamrasharma.com",
        url: `${baseUrl}/personal`,
        author: "Vinamra Sharma",
        keywords: ["hobbies", "personal", "blog", "cooking", "poetry", "cafe hopping"],
        content: `Personal interests and hobbies beyond research and engineering:

Hobbies:
- Cooking: Creative escape and experimentation with flavors and techniques
- Writing Poems: Expressing thoughts and emotions through verse
- Cafe Hopping: Exploring different cafes for great coffee, ambiance, and working environments

Blog: wiki.vinamrasharma.com - Random thoughts on life, philosophy, and technology. A space for reflection and sharing thoughts that don't fit into academic papers or technical documentation.

Personal Philosophy: Life is multidimensional. Exploring it fully through diverse experiences, conversations, and reflections.`,
        relatedLinks: [
          { title: "Wiki Blog", url: "https://wiki.vinamrasharma.com" },
        ],
      });
      break;

    case "/contact":
      content = generateLLMTxt({
        title: "Contact - Vinamra Sharma",
        description: "Get in touch for research collaborations, speaking engagements, and opportunities.",
        url: `${baseUrl}/contact`,
        author: "Vinamra Sharma",
        keywords: ["contact", "email", "collaboration", "speaking", "mentorship"],
        content: `Contact Information:
- Email: vinamrasharma5@gmail.com
- Academic Email: v.sharma.3@research.gla.ac.uk
- Location: Glasgow, UK

Available For:
- Research collaborations
- Speaking engagements
- Panel discussions
- Advisory roles
- Hackathon judging
- Mentorship opportunities

Social Media:
- LinkedIn: linkedin.com/in/vinamra-sharma
- GitHub: github.com/vnmrsharma
- Twitter: twitter.com/vnmrsharma
- Google Scholar: scholar.google.com/citations?user=ivJzcpAAAAAJ
- DevPost: devpost.com/vnmrsharma
- Wiki: wiki.vinamrasharma.com

Typically responds within a week.`,
        relatedLinks: [
          { title: "About", url: `${baseUrl}/about` },
          { title: "Research", url: `${baseUrl}/research` },
        ],
      });
      break;

    default:
      content = generateLLMTxt({
        title: "Vinamra Sharma",
        description: "PhD candidate in AI compilers, AI Engineer, and founder.",
        url: `${baseUrl}${path}`,
        author: "Vinamra Sharma",
        keywords: ["Vinamra Sharma", "AI researcher", "AI Engineer"],
        content: "Visit the main website to learn more about Vinamra Sharma's research, projects, and achievements.",
        relatedLinks: [
          { title: "Home", url: `${baseUrl}/` },
        ],
      });
  }

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

