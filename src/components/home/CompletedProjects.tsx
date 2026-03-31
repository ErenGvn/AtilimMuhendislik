'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { completedProjects } from '@/data/projects';
import LightboxModal from '@/components/project/LightboxModal';

export default function CompletedProjects() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  return (
    <>
      <section id="completed" className="section-padding bg-brand-dark-2">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">
              Referanslarımız
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white gold-underline">
              Tamamlanmış Projeler
            </h2>
            <p className="mt-6 text-brand-gray text-sm sm:text-base max-w-xl leading-relaxed">
              Yıllar içinde hayata geçirdiğimiz projeler, kalitemizin ve güvenilirliğimizin
              canlı kanıtlarıdır.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {completedProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setLightbox({ images: project.gallery, index: 0 })}
                className="relative aspect-square cursor-pointer overflow-hidden group"
              >
                <Image
                  src={project.coverImage}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-brand-gold text-xs mb-1">
                      <CheckCircle size={12} />
                      <span>{project.completedYear}</span>
                    </div>
                    <p className="font-serif text-white text-sm">{project.name}</p>
                    <p className="text-white/60 text-xs mt-0.5">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <LightboxModal
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
