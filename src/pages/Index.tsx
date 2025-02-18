
import { LineChart } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { PortfolioCard } from "@/components/PortfolioCard";
import { useState } from "react";

const portfolioData = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    units: 104,
    value: 1721.3,
    change: 0.74,
    logo: "/lovable-uploads/c873c3fd-b993-49ec-a71c-032451751303.png",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    units: 124,
    value: 1521.3,
    change: 0.74,
    logo: "/lovable-uploads/c873c3fd-b993-49ec-a71c-032451751303.png",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    units: 10,
    value: 1721.3,
    change: 0.74,
    logo: "/lovable-uploads/c873c3fd-b993-49ec-a71c-032451751303.png",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    units: 110,
    value: 1721.3,
    change: 0.74,
    logo: "/lovable-uploads/c873c3fd-b993-49ec-a71c-032451751303.png",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    units: 104,
    value: 1721.3,
    change: 0.74,
    logo: "/lovable-uploads/c873c3fd-b993-49ec-a71c-032451751303.png",
  },
];

export default function Index() {
  const [timeframe, setTimeframe] = useState("6M");

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 pl-64">
        <div className="p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-1">Welcome, Naya</h1>
              <p className="text-muted-foreground">
                Here's your stock portfolio overview
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="glass-panel px-4 py-2 flex items-center space-x-2">
                <span>6M</span>
                <LineChart size={16} className="text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="glass-panel p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Total Holding</h2>
                <div className="text-sm text-muted-foreground">6M</div>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">$ 12,304.11</p>
                <p className="text-sm text-green-400">+3.5% ($ 532)</p>
              </div>
            </div>
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

          <div className="glass-panel p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Portfolio Performance</h2>
              <div className="flex space-x-2">
                {["1D", "1W", "1M", "6M", "1Y"].map((tf) => (
                  <button
                    key={tf}
                    className={`px-4 py-1 rounded-full text-sm ${
                      timeframe === tf
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-white/5"
                    }`}
                    onClick={() => setTimeframe(tf)}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Chart placeholder - Implement with recharts
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
