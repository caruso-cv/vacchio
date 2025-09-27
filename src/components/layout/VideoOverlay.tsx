'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function VideoOverlay() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  if (isSafari) {
    return (
      <div className="fixed inset-0 pointer-events-none z-10">
        <Image 
          src="/webp/shadow.webp" 
          alt="Shadow effect" 
          fill
          className="object-cover opacity-80"
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-40"
        aria-hidden="true"
        role="presentation"
      >
        <source src="/webm/shadow.webm" type="video/webm" />
        {/* Fallback image for browsers that don't support WebM */}
        <Image 
          src="/webp/shadow.webp" 
          alt="Shadow effect" 
          fill
          className="object-cover"
        />
      </video>
    </div>
  );
} 