'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { forSaleProjects } from '@/data/projects';

export default function ProjectsForSale() {
  return (
    <section id="projects" className="bg-white px-4 md:px-8 py-14">
      {/* Section header */}
      <h2 className="text-center text-sm font-semibold tracking-[0.2em] uppercase text-black mb-8">
        Satıştaki Projeler
      </h2>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {forSaleProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer bg-gray-200">
                <Image
                  src={project.coverImage}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 50vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Project name — bottom left */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm md:text-base font-semibold tracking-wider">
                    {project.name}
                  </span>
                </div>

                {/* Arrow button — bottom center */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="w-11 h-11 bg-black flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 1L10 6L2 11V1Z"
                        fill="white"
                        className="group-hover:fill-black transition-colors duration-300"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
