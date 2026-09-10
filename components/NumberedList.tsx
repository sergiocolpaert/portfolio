export type NumberedListItem = {
  index: string;
  title: string;
};

export default function NumberedList({ items }: { items: NumberedListItem[] }) {
  return (
    <ul className="border-t border-border">
      {items.map((item) => (
        <li key={item.index} className="group relative border-b border-border">
          <span
            aria-hidden
            className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          />
          <div className="relative flex items-center justify-between gap-6 px-1 py-7 transition-colors duration-500 group-hover:text-background sm:py-9">
            <span className="flex items-baseline gap-4 sm:gap-6">
              <span className="text-xs text-muted transition-colors duration-500 group-hover:text-background/60">
                {item.index}
              </span>
              <span className="font-display text-2xl font-medium tracking-tight sm:text-4xl">
                {item.title}
              </span>
            </span>
            <span className="shrink-0 text-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1 sm:text-3xl">
              ↗
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
