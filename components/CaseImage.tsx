import Image from "next/image";

export default function CaseImage({
  src,
  width,
  height,
  alt = "",
}: {
  src: string;
  width: number;
  height: number;
  alt?: string;
}) {
  return (
    <div className="full-bleed not-prose my-8 overflow-hidden border border-border">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes="(min-width: 1024px) 1272px, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
