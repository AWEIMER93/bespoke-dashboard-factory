
interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  subtitle?: string;
  timeframe?: string;
}

export const StatsCard = ({ title, value, change, subtitle, timeframe = "6M" }: StatsCardProps) => {
  return (
    <div className="glass-panel p-6 hover:bg-secondary/40 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="text-sm text-muted-foreground">{timeframe}</div>
      </div>
      <div>
        <p className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          {value}
        </p>
        {change ? (
          <p className="text-sm text-green-400">{change}</p>
        ) : (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
};
