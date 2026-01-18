'use client';

import { useEffect, useRef } from 'react';

interface TechGridProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function TechGrid({ className = '', style }: TechGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const gridSize = 40;
    const lineColor = '#D1D5DB';
    const accentColor = '#5227FF';
    const accentOpacity = 0.6;

    const draw = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Add subtle accent dots at intersections (tech/AI theme)
      const time = Date.now() * 0.001;
      ctx.fillStyle = accentColor;
      
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          // Create a subtle pulsing effect
          const distance = Math.sqrt(
            Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)
          );
          const maxDistance = Math.sqrt(
            Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
          );
          const normalizedDistance = distance / maxDistance;
          
          // Pulsing effect based on position and time
          const pulse = (Math.sin(time * 2 + normalizedDistance * 5) + 1) / 2;
          const opacity = pulse * accentOpacity * (1 - normalizedDistance * 0.5);
          
          if (opacity > 0.1) {
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={style}
    />
  );
}

