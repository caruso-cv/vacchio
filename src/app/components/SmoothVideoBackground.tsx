'use client';

import { useEffect, useRef} from 'react';

export default function SmoothVideoBackground() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    const video3 = video3Ref.current;

    if (!video1 || !video2 || !video3) return;

    const videos = [video1, video2, video3];
    let videoIndex = 0;

    const initializeVideos = async () => {
      // Load all videos and set them to random start times to avoid sync
      for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        video.muted = true;
        video.playbackRate = 0.7;
        
        await new Promise<void>((resolve) => {
          const handleLoadedData = () => {
            video.removeEventListener('loadeddata', handleLoadedData);
            // Start each video at a different offset
            video.currentTime = (video.duration / 3) * i;
            resolve();
          };
          video.addEventListener('loadeddata', handleLoadedData);
          video.load();
        });
      }

      // Set initial opacities
      video1.style.opacity = '1';
      video2.style.opacity = '0';
      video3.style.opacity = '0';

      // Start all videos playing
      await Promise.all(videos.map(video => video.play()));

      // Wait a moment for videos to stabilize before starting rotation
      setTimeout(() => {
        startCrossfadeRotation();
      }, 2000); // Give 2 seconds for videos to properly start and stabilize
    };

    const startCrossfadeRotation = () => {
      intervalRef.current = setInterval(() => {
        const currentVid = videos[videoIndex];
        const nextIndex = (videoIndex + 1) % 3;
        const nextVid = videos[nextIndex];

        // Prepare next video
        nextVid.style.transition = 'none'; // Remove transition temporarily
        nextVid.style.opacity = '0';
        nextVid.currentTime = 0;
        nextVid.play();

        // Force a reflow to ensure the opacity is set
        nextVid.offsetHeight;

        // Add transition back and start crossfade
        nextVid.style.transition = 'opacity 3s ease-in-out';
        currentVid.style.transition = 'opacity 3s ease-in-out';
        
        // Begin crossfade after a small delay
        setTimeout(() => {
          currentVid.style.opacity = '0';
          nextVid.style.opacity = '1';
        }, 50);

        videoIndex = nextIndex;
      }, 8000); // Switch every 8 seconds for long, smooth crossfades
    };

    // Handle video ended events to restart seamlessly
    const handleVideoEnd = (video: HTMLVideoElement) => {
      video.currentTime = 0;
      video.play();
    };

    videos.forEach(video => {
      video.addEventListener('ended', () => handleVideoEnd(video));
    });

    initializeVideos();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      videos.forEach(video => {
        video.removeEventListener('ended', () => handleVideoEnd(video));
      });
    };
  }, []);

  return (
    <div className="video-container">
      <video
        ref={video1Ref}
        className="video-background"
        muted
        loop
        playsInline
      >
        <source src="/webm/plant.webm" type="video/webm; codecs=av01.0.05M.08" />
        <source src="/mp4/plant.mp4" type="video/mp4" />
      </video>
      <video
        ref={video2Ref}
        className="video-background"
        muted
        loop
        playsInline
      >
        <source src="/webm/plant.webm" type="video/webm; codecs=av01.0.05M.08" />
        <source src="/mp4/plant.mp4" type="video/mp4" />
      </video>
      <video
        ref={video3Ref}
        className="video-background"
        muted
        loop
        playsInline
      >
        <source src="/webm/plant.webm" type="video/webm; codecs=av01.0.05M.08" />
        <source src="/mp4/plant.mp4" type="video/mp4" />
      </video>
    </div>
  );
} 