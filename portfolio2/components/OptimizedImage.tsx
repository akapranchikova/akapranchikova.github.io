"use client";

import { useEffect, useMemo, useState } from "react";
import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = ImageProps;

export default function OptimizedImage({
  alt,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  loading = "lazy",
  priority,
  className,
  src,
  width,
  height,
  ...props
}: OptimizedImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isProjectImage = className?.includes("project-");
  const isLightboxEnabled = Boolean(isProjectImage && typeof src === "string" && typeof width === "number" && typeof height === "number");

  const modalSizes = useMemo(() => "100vw", []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const openLightbox = () => {
    if (!isLightboxEnabled) return;
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  return (
    <>
      <Image
        {...props}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : loading}
        placeholder="empty"
        style={{
          width: "100%",
          height: "auto",
          cursor: isLightboxEnabled ? "zoom-in" : undefined,
        }}
        onClick={openLightbox}
      />

      {isOpen && isLightboxEnabled ? (
        <button type="button" className="lightbox-overlay" onClick={closeLightbox} aria-label="Close image">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={modalSizes}
            priority
            className="lightbox-image"
            onClick={closeLightbox}
          />
        </button>
      ) : null}
    </>
  );
}
