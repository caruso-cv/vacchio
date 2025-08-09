'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ScrollColorVideoProps {
  src: string
  className?: string
  containerClassName?: string
  muted?: boolean
}

export default function ScrollColorVideo({
  src,
  className = 'w-full h-auto transition-all duration-700 ease-out',
  containerClassName = 'mb-12 rounded-lg overflow-hidden border',
  muted = true,
}: ScrollColorVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isCentered, setIsCentered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const imageCenterY = rect.top + rect.height / 2
      const viewportCenterY = windowHeight / 2
      const distanceFromCenter = Math.abs(imageCenterY - viewportCenterY)
      const centered = distanceFromCenter < 400
      setIsCentered(centered)

      const vid = videoRef.current
      if (!vid) return

      if (centered) {
        vid.loop = true
        // Ensure autoplay works on mobile by keeping muted
        vid.muted = muted
        if (vid.paused) {
          vid.play().catch(() => {})
        }
      } else {
        vid.loop = false
        // Pause but keep frame for a clean grayscale preview
        if (!vid.paused) {
          vid.pause()
        }
      }
    }

    // Do not run initial check so it defaults to paused + grayscale on mount
    let ticking = false
    const throttled = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttled, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttled)
      window.removeEventListener('resize', handleScroll)
    }
  }, [muted])

  return (
    <div ref={containerRef} className={containerClassName}>
      <video
        ref={videoRef}
        className={`${className} transition-all duration-700 ease-out ${isCentered ? 'opacity-90' : 'opacity-90 '}`}
        style={{
          filter: isCentered
            ? 'grayscale(0)'
            : 'grayscale(1)',
        }}
        playsInline
        muted={muted}
        preload="metadata"
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  )
}
