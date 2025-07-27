export default function VideoOverlay() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-50"
        poster="/webp/shadow.webp"
      >
        <source src="/webm/shadow.webm" type="video/webm" />
        {/* Fallback image for browsers that don't support WebM */}
        <img 
          src="/webp/shadow.webp" 
          alt="Shadow effect" 
          className="w-full h-full object-cover"
        />
      </video>
    </div>
  );
} 