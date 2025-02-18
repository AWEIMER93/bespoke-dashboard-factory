
import { Bell, Search } from "lucide-react";

export const TopBanner = () => {
  return (
    <div className="h-16 border-b border-white/10 bg-secondary/30 backdrop-blur-sm flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search stocks..."
          className="h-10 w-[280px] rounded-full bg-white/5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 hover:bg-white/5 rounded-full transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary animate-pulse" />
        </button>
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
          <span className="text-sm font-medium text-primary">A</span>
        </div>
      </div>
    </div>
  );
};
