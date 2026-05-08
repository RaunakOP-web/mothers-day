"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real app, you'd integrate an audio element here:
    // const audio = document.getElementById('bg-music') as HTMLAudioElement;
    // if (isPlaying) audio.pause(); else audio.play();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors duration-500 relative ${
          isPlaying ? "bg-white text-gold" : "bg-champagne text-gold-dark"
        }`}
        aria-label="Toggle background music"
      >
        {/* Animated rings when playing */}
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full border-2 border-gold-light animate-[musicPulse_2s_infinite]"></span>
            <span className="absolute inset-0 rounded-full border-2 border-gold animate-[musicPulse_2s_infinite_1s]"></span>
          </>
        )}

        {/* Note icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 z-10"
        >
          {isPlaying ? (
            // Music playing icon
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
          ) : (
            // Music muted icon
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06z" />
          )}
        </svg>

        {isPlaying && (
          <path
            fillRule="evenodd"
            d="M15.89 8.11a.75.75 0 011.06 0 5.25 5.25 0 010 7.42.75.75 0 11-1.06-1.06 3.75 3.75 0 000-5.3.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        )}
      </motion.button>

      {/* Hidden audio element (placeholder for real music) */}
      <audio id="bg-music" loop>
        <source src="/placeholder-music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
