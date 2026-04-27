'use client';

import { useEffect, useRef } from 'react';

export default function ScrollVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

  return (
    <section className="scroll-video-section">
      <video
        ref={videoRef}
        className="scroll-video"
        loop
        playsInline
        preload="metadata"
        poster="/tierra-video-poster.webp"
      >
        <source src="/tierra-loop.mp4" type="video/mp4" />
      </video>
    </section>
  );
}