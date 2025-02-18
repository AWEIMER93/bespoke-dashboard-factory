
interface PortfolioCardProps {
  symbol: string;
  name: string;
  units: number;
  value: number;
  change: number;
  logo: string;
}

export const PortfolioCard = ({
  symbol,
  name,
  units,
  value,
  change,
  logo,
}: PortfolioCardProps) => {
  const isPositive = change >= 0;

  return (
    <div className="glass-panel p-4">
      <div className="flex items-center space-x-3">
        <img src={logo} alt={name} className="w-8 h-8" />
        <div className="flex-1">
          <p className="font-semibold">{symbol}</p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Units {units}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold">${value.toLocaleString()}</p>
          <p
            className={`text-sm ${
              isPositive ? "text-green-400" : "text-red-400"
            }`}
          >
            {isPositive ? "+" : ""}
            {change}%
          </p>
        </div>
      </div>
    </div>
  );
};
