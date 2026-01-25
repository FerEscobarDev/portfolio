"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
}

export default function BrowserFrame({ src, alt, url }: BrowserFrameProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full max-w-[280px] mx-auto"
    >
      {/* Browser Window */}
      <div className="rounded-lg overflow-hidden shadow-2xl bg-[#1a1a1a] border border-white/10">
        {/* Title Bar */}
        <div className="flex items-center gap-2 px-3 py-2.5 bg-[#2d2d2d] border-b border-white/5">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
          </div>

          {/* URL Bar */}
          {url && (
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#1a1a1a] rounded-md max-w-[180px]">
                <svg
                  className="w-3 h-3 text-white/40 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
                <span className="text-[10px] text-white/50 truncate font-mono">
                  {url.replace(/^https?:\/\//, "")}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Browser Content */}
        <div className="relative aspect-[16/10] bg-[#0a0a0a]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 280px, 280px"
          />
        </div>
      </div>

      {/* Reflection/Shadow */}
      <div className="h-4 mx-4 bg-gradient-to-b from-black/20 to-transparent rounded-b-full blur-sm" />
    </motion.div>
  );
}
