export default function BehanceEmbed({
  embedId,
  title,
}: {
  embedId: string;
  title: string;
}) {
  return (
    <div className="relative aspect-[404/316] w-full overflow-hidden rounded-xl border border-border">
      <iframe
        src={`https://www.behance.net/embed/project/${embedId}?ilo0=1`}
        title={title}
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
