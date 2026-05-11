import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const mediaItems = [
  { type: "image", src: "/src/imports/Screenshot_2026-05-09_161737-1.png", duration: 10000 },
  { type: "image", src: "/src/imports/WhatsApp_Image_2026-03-29_at_18.37.04-1.jpeg", duration: 10000 },
  { type: "image", src: "/src/imports/WhatsApp_Image_2026-05-09_at_16.30.32__1_-1.jpeg", duration: 10000 },
  { type: "image", src: "/src/imports/WhatsApp_Image_2026-05-09_at_16.30.32-2.jpeg", duration: 10000 },
  { type: "image", src: "/src/imports/WhatsApp_Image_2026-05-10_at_11.30.03.jpeg", duration: 20000 },
  { type: "video", src: "/src/imports/Video_Project_3-1.mp4", duration: 15000 },
];

export function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Start slideshow immediately
  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const currentItem = mediaItems[currentIndex];

    // Set video start time to 5 seconds
    if (currentItem.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 5;
    }

    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, currentItem.duration);

    return () => clearTimeout(timeout);
  }, [currentIndex, isReady]);

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="wait">
        {currentItem.type === "image" ? (
          <motion.img
            key={currentIndex}
            src={currentItem.src}
            alt="RAV Background"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <motion.video
            key={currentIndex}
            ref={videoRef}
            src={currentItem.src}
            autoPlay
            muted
            playsInline
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/30 to-background/60" />
    </div>
  );
}
