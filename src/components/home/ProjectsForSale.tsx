'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

const statusColors: Record<string, string> = {
  'Devam Ediyor': 'bg-blue-500',
  'Tamamlandı':   'bg-green-600',
  'Planlama':     'bg-yellow-500',
};

export default function ProjectsForSale() {
  return (
    <section id="projects" className="bg-white text-black px-4 md:px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((project, index) => {
          const isRight = index % 2 !== 0;
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                isRight ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full md:flex-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Play/detail button */}
                  <Link href={`/projects/${project.slug}`}>
                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition">
                      <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:flex-1 ${isRight ? 'md:text-right' : ''}`}>
                {/* Status badge */}
                <span className={`inline-block text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm mb-3 ${statusColors[project.statusLabel] ?? 'bg-gray-500'}`}>
                  {project.statusLabel}
                </span>

                <h3 className="text-2xl md:text-3xl font-light mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-1">{project.subtitle}</p>
                <p className="text-gray-500 text-sm mb-2">{project.location}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
                  {project.description}
                </p>

                <div className={`flex gap-4 ${isRight ? 'md:justify-end' : ''}`}>
                  <Link href={`/projects/${project.slug}`}>
                    <button className="px-5 py-2.5 border border-gray-300 text-sm hover:bg-gray-100 transition rounded-sm">
                      Detaylar
                    </button>
                  </Link>
                  <a
                    href={project.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-black text-white text-sm hover:bg-gray-800 transition rounded-sm"
                  >
                    Konum
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
