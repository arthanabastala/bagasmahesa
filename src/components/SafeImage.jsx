import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle = '',
  eager = false,
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#F4F4F5] text-[#64748B] p-6 text-center ${className}`}
        role="img"
        aria-label={alt || fallbackTitle || 'Gambar tidak tersedia'}
      >
        <ImageIcon className="w-7 h-7 mb-2 text-[#94A3B8]" strokeWidth={1.5} />
        <span className="text-xs font-medium text-[#64748B] max-w-[20ch] truncate">
          {fallbackTitle || alt || 'Visual'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
