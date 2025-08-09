'use client'

import React, { useRef, useEffect, useState } from 'react'

interface ScrollColorImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
}

export default function ScrollColorImage({ 
  src, 
  alt, 
  className = "w-full h-auto backdrop-blur-lg transition-all duration-700 ease-out",
  containerClassName = "mb-12 overflow-hidden"
}: ScrollColorImageProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isImageCentered, setIsImageCentered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return
      
      const rect = imageRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const imageCenterY = rect.top + rect.height / 2
      const viewportCenterY = windowHeight / 2
      
      // Check if image is vertically centered
      const distanceFromCenter = Math.abs(imageCenterY - viewportCenterY)
      const isCentered = distanceFromCenter < 400
      
      setIsImageCentered(isCentered)
    }

    // No initial check: default stays grayscale until user scrolls/resizes
    
    // Add scroll listener with throttling
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', throttledScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div ref={imageRef} className={containerClassName}>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-all duration-700 ease-out ${
          isImageCentered ? '' : 'grayscale'
        }`}
      />
    </div>
  )
}
