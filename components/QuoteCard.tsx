"use client";

import { motion } from "framer-motion";

interface QuoteCardProps {
  quote: string;
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-[92%] max-w-2xl mx-auto my-24 md:my-32 p-10 md:p-16 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/60 flex items-center justify-center"
    >
      <p className="font-playfair text-2xl md:text-3xl text-brown leading-relaxed italic text-center m-0">
        &ldquo;{quote}&rdquo;
      </p>
    </motion.div>
  );
}
