"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    // Create smooth fade and slide animation
    gsap.fromTo(
      content,
      {
        opacity: 0,
        y: 20,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );

    // Cleanup function
    return () => {
      gsap.killTweensOf(content);
    };
  }, [pathname]);

  return (
    <div ref={containerRef} className="w-full">
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
