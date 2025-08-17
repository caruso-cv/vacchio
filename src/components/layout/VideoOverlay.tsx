import Image from 'next/image';

export default function VideoOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-40 "
        poster="/webp/shadow.webp"
      >
        <source src="/webm/shadow.webm" type="video/webm" />
        {/* Fallback image for browsers that don't support WebM */}
        <Image 
          src="/webp/shadow.webp" 
          alt="Shadow effect" 
          fill
          className="object-cover "
        />
      </video>
    </div>
  );
} 