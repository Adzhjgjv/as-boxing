import Image, { type ImageProps } from "next/image"

type PictureImageProps = Omit<ImageProps, "src"> & {
  webpSrc: string
  avifSrc: string
}

export function PictureImage({ webpSrc, avifSrc, alt, ...props }: PictureImageProps) {
  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <Image src={webpSrc} alt={alt} {...props} />
    </picture>
  )
}
