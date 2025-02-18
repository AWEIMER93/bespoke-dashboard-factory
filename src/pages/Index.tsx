
import { LineChart, Bell, Search } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { PortfolioCard } from "@/components/PortfolioCard";
import { useState } from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
  const [timeframe, setTimeframe] = useState("6M");

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 pl-64">
        {/* Top Banner */}
        <div className="h-16 border-b border-white/10 bg-secondary/30 backdrop-blur-sm flex items-center justify-between px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search stocks..."
              className="h-10 w-[280px] rounded-full bg-white/5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-white/5 rounded-full">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-medium text-primary">A</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-1">Welcome, Anthony</h1>
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

          <div className="grid grid-cols-3 gap-6 mb-8">
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
            <div className="glass-panel p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Total Profit</h2>
                <div className="text-sm text-muted-foreground">6M</div>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">$ 2,156.89</p>
                <p className="text-sm text-green-400">+12.3% ($ 234)</p>
              </div>
            </div>
            <div className="glass-panel p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Total Investment</h2>
                <div className="text-sm text-muted-foreground">6M</div>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">$ 10,147.22</p>
                <p className="text-sm text-muted-foreground">5 Active stocks</p>
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
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={chartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.1)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="date"
                    stroke="rgba(255,255,255,0.5)"
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.5)"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.9)",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    labelStyle={{ color: "rgba(255,255,255,0.7)" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
