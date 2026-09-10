import { StaggerGroup, StaggerItem } from "./motion/Stagger";

export type Stat = {
  value: string;
  label: string;
};

export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <StaggerGroup className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
      {stats.map((stat) => (
        <StaggerItem key={stat.label} className="bg-background px-6 py-8 sm:px-8 sm:py-10">
          <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm text-muted">{stat.label}</p>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
