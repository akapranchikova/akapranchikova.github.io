import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = ImageProps;

export default function OptimizedImage({
  alt,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  loading = "lazy",
  priority,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : loading}
      placeholder="empty"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
