'use client';

import { useState } from 'react';
import LightboxModal from './LightboxModal';

interface GalleryButtonProps {
  images: string[];
}

export default function GalleryButton({ images }: GalleryButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-500 transition-colors group"
      >
        Galeri İçin Tıkla
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>

      {open && (
        <LightboxModal images={images} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
