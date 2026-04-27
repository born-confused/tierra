'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollVideo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);

    if (!video.paused) return;
    video.play().catch(() => {});
  };

  return (
    <section className="scroll-video-section">
      <video
        ref={videoRef}
        className="scroll-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/tierra-video-poster.webp"
      >
        <source src="/tierra-loop.mp4" type="video/mp4" />
      </video>

      <button
        className="video-sound-toggle"
        onClick={toggleSound}
        aria-label={isMuted ? 'Turn sound on' : 'Turn sound off'}
        type="button"
      >
        <span className="sound-text">{isMuted ? 'Tap for sound' : 'Tap to mute'}</span>
      </button>
    </section>
  );
}