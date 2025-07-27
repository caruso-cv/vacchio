'use client';

export default function VideoOverlay() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-60"
      >
        <source src="/webm/shadow.webm" type="video/webm" />
        <source src="/mov/shadow.mov" type="video/quicktime" />
      </video>
    </div>
  );
} 