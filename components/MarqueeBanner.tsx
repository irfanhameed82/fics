"use client";
import React from 'react';

const MarqueeBanner: React.FC = () => {
  return (
    <div className="w-full h-12 bg-[#00547E] overflow-hidden flex items-center">
      <div className="whitespace-nowrap animate-marquee ">
        <span className="inline-block px-6 text-white">
            FICS Junior 2025{' '}
          <a
            href="https://forms.gle/5wuGkm44KXb8Hi8r7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline hover:text-gray-200 text-white"
          >
            Register Now
          </a>
        </span>
        <span className="inline-block px-6 text-white">
          FICS International 2025{' '}
          <a
            href="/idea"
            className="font-medium underline hover:text-gray-200"
            rel="noopener noreferrer"
          >
            Register now
          </a>
        </span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MarqueeBanner;