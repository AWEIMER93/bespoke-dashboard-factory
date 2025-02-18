
import { LineChart } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { PortfolioCard } from "@/components/PortfolioCard";
import { TopBanner } from "@/components/TopBanner";
import { StatsCard } from "@/components/StatsCard";
import { PerformanceChart } from "@/components/PerformanceChart";

const portfolioData = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    units: 104,
    value: 1721.3,
    change: 0.74,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    units: 124,
    value: 1521.3,
    change: 0.74,
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    units: 10,
    value: 1721.3,
    change: 0.74,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Microsoft_icon.svg",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    units: 110,
    value: 1721.3,
    change: 0.74,
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    units: 104,
    value: 1721.3,
    change: 0.74,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  },
];

const chartData = [
  { date: "Jan", value: 10000 },
  { date: "Feb", value: 12000 },
  { date: "Mar", value: 11000 },
  { date: "Apr", value: 13000 },
  { date: "May", value: 12500 },
  { date: "Jun", value: 14000 },
];

export default function Index() {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-background to-secondary/20">
      <Sidebar />
      <main className="flex-1 pl-64">
        <TopBanner />
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Welcome, Anthony
              </h1>
              <p className="text-muted-foreground">
                Here's your stock portfolio overview
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="glass-panel px-4 py-2 flex items-center space-x-2 hover:bg-secondary/40 transition-colors">
                <span>6M</span>
                <LineChart size={16} className="text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Total Holding"
              value="$ 12,304.11"
              change="+3.5% ($ 532)"
            />
            <StatsCard
              title="Total Profit"
              value="$ 2,156.89"
              change="+12.3% ($ 234)"
            />
            <StatsCard
              title="Total Investment"
              value="$ 10,147.22"
              subtitle="5 Active stocks"
            />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">My Portfolio</h2>
              <button className="text-primary hover:underline">See all</button>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {portfolioData.map((item) => (
                <PortfolioCard key={item.symbol} {...item} />
              ))}
            </div>
          </div>

          <PerformanceChart data={chartData} />
        </div>
      </main>
    </div>
  );
}
