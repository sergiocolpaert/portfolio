import Container from "@/components/Container";

export default function MetaStrip({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="border-y border-border">
      <Container>
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`border-border px-0 py-6 md:px-6 md:py-8 ${
                i % 2 === 1 ? "border-l pl-6" : ""
              } ${i >= 2 ? "border-t md:border-t-0" : ""} ${
                i > 0 ? "md:border-l" : "md:pl-0"
              }`}
            >
              <dt className="text-xs tracking-widest text-muted uppercase">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
