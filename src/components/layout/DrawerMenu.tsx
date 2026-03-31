'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Linkedin, Instagram } from 'lucide-react';
import { contactInfo } from '@/data/projects';

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'PROJECTS', href: '/#projects' },
  { label: 'ABOUT',    href: '/kurumsal' },
  { label: 'BLOG',     href: '/blog' },
  { label: 'CONTACT',  href: '/#contact' },
];

export default function DrawerMenu({ open, onClose }: DrawerMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/50"
          />

          {/* Drawer — full width on mobile, 3/4 on desktop */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-full md:w-3/4 bg-[#1a1a1a] z-[70] overflow-y-auto"
          >
            <div className="min-h-full px-8 py-8 md:px-16 md:py-12">
              {/* Top bar */}
              <div className="flex justify-between items-start mb-16">
                <div className="bg-white px-6 py-3">
                  <Image
                    src="/logo.png"
                    alt="Atılım Mühendislik"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <button
                  onClick={onClose}
                  aria-label="Kapat"
                  className="w-12 h-12 flex items-center justify-center hover:bg-white/10 transition rounded text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                {/* Left — Contact */}
                <div className="text-white space-y-8">
                  <div>
                    <h3 className="text-xs font-semibold mb-3 tracking-[0.2em] text-white/60">
                      TÜRKİYE
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {contactInfo.addressTR}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold mb-3 tracking-[0.2em] text-white/60">
                      USA
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {contactInfo.addressUS}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold mb-3 tracking-[0.2em] text-white/60">
                      CONTACT
                    </h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-400 hover:text-white transition text-sm block"
                    >
                      {contactInfo.email}
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      TEL: {contactInfo.phone1}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold mb-3 tracking-[0.2em] text-white/60">
                      FOLLOW US
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href={contactInfo.linkedin}
                        className="text-gray-400 hover:text-white transition"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={contactInfo.instagram}
                        className="text-gray-400 hover:text-white transition"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right — Nav */}
                <nav className="text-white">
                  <ul className="space-y-6">
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.07 }}
                      >
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="text-4xl md:text-5xl font-light tracking-wider hover:text-gray-400 transition block"
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
