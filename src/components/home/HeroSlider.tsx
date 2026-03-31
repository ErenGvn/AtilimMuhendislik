'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '@/data/projects';

const INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[500px] md:h-[560px] overflow-hidden mx-4 md:mx-6 rounded-lg">
      {/* Images */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            i === current
              ? 'opacity-100 translate-x-0'
              : i < current
              ? 'opacity-0 -translate-x-full'
              : 'opacity-0 translate-x-full'
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-8 left-8 right-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-white mb-4">
              {slide.title}
            </h2>
            <div className="flex gap-4 items-center">
              <Link href={`/projects/${slide.projectSlug}`}>
                <button className="px-6 py-2.5 bg-white text-black text-sm font-medium hover:bg-gray-100 transition">
                  Keşfet
                </button>
              </Link>
              <Link href="/#contact">
                <button className="px-6 py-2.5 border border-white text-white text-sm font-medium hover:bg-white/10 transition">
                  İletişim
                </button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-0 right-0 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); resetTimer(); }}
              aria-label={`Slayt ${i + 1}`}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === current ? 'w-8 bg-white' : 'w-4 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
