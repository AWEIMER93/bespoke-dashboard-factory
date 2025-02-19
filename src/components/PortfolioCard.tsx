
import { useStockQuote } from "@/services/finnhubService";

interface PortfolioCardProps {
  symbol: string;
  name: string;
  units: number;
  value: number;
  logo: string;
}

export const PortfolioCard = ({
  symbol,
  name,
  units,
  logo,
}: PortfolioCardProps) => {
  const { data: quote, isLoading } = useStockQuote(symbol);
  
  const currentValue = quote ? units * quote.c : 0;
  // Calculate percentage change from previous close
  const change = quote ? ((quote.c - quote.pc) / quote.pc) * 100 : 0;
  const isPositive = change >= 0;

  return (
    <div className="glass-panel p-4 relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 flex items-center justify-center">
          <img 
            src={logo} 
            alt={name} 
            className="w-6 h-6 object-contain filter brightness-0 invert" 
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold">{symbol}</p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Units {units}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold">${currentValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          <p
            className={`text-sm ${
              isPositive ? "text-green-400" : "text-red-400"
            }`}
          >
            {isPositive ? "+" : ""}
            {change.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};
