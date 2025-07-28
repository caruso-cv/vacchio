import Image from 'next/image';

export default function VideoOverlay() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-40 scale-x-[-1]"
        poster="/webp/shadow.webp"
      >
        <source src="/webm/shadow.webm" type="video/webm" />
        {/* Fallback image for browsers that don't support WebM */}
        <Image 
          src="/webp/shadow.webp" 
          alt="Shadow effect" 
          fill
          className="object-cover scale-x-[-1]"
        />
      </video>
    </div>
  );
} 