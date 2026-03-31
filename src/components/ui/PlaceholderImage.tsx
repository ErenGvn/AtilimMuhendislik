'use client';

/**
 * Drop-in replacement for Image during development when real photos aren't added yet.
 * Usage: swap <Image .../> for <PlaceholderImage .../> temporarily.
 */
export default function PlaceholderImage({
  label = 'Görsel',
  className = '',
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full h-full bg-brand-dark-3 flex items-center justify-center ${className}`}
    >
      <span className="text-brand-gray/40 text-sm font-serif">{label}</span>
    </div>
  );
}
