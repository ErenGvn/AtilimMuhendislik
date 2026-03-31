'use client';

import { useState } from 'react';
import Image from 'next/image';
import LightboxModal from './LightboxModal';

interface ProjectGalleryProps {
  images: string[];
  startIndex?: number;
  thumb?: string;
}

export default function ProjectGallery({ images, startIndex = 0, thumb }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // When used as a single thumbnail (from project detail grid)
  if (thumb !== undefined) {
    return (
      <>
        <div
          className="relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => setLightboxIndex(startIndex)}
        >
          <Image
            src={thumb}
            alt={`Görsel ${startIndex + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        </div>

        {lightboxIndex !== null && (
          <LightboxModal
            images={images}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </>
    );
  }

  // Standalone full gallery (not currently used but kept for flexibility)
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={img}
              alt={`Görsel ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <LightboxModal
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
