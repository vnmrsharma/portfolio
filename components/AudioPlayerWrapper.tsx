"use client";

import dynamic from "next/dynamic";

const AudioPlayer = dynamic(() => import("@/components/AudioPlayer"), {
  ssr: false,
  loading: () => (
    <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/20 shadow-xl">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
        <div className="h-2 bg-gray-200 rounded"></div>
        <div className="flex justify-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  ),
});

interface AudioPlayerWrapperProps {
  src: string;
  title: string;
}

export default function AudioPlayerWrapper({ src, title }: AudioPlayerWrapperProps) {
  return <AudioPlayer src={src} title={title} />;
}

