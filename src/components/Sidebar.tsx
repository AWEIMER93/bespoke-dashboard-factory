
import {
  BarChart3,
  HelpCircle,
  LayoutDashboard,
  LineChart,
  PieChart,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-64 bg-secondary/30 backdrop-blur-sm border-r border-white/10">
      <div className="flex flex-col h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Stovest</h1>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link
              to="/"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg bg-primary/10 text-primary"
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-white/5"
            >
              <LineChart size={20} />
              <span>Portfolio</span>
            </Link>
            <Link
              to="/analysis"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-white/5"
            >
              <BarChart3 size={20} />
              <span>Analysis</span>
            </Link>
            <Link
              to="/market"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-white/5"
            >
              <PieChart size={20} />
              <span>Market</span>
            </Link>
          </div>
          
          <div className="mt-8">
            <p className="px-4 text-xs font-semibold text-muted-foreground mb-2">
              SUPPORT
            </p>
            <div className="space-y-2">
              <Link
                to="/community"
                className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-white/5"
              >
                <Users size={20} />
                <span>Community</span>
              </Link>
              <Link
                to="/help"
                className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-white/5"
              >
                <HelpCircle size={20} />
                <span>Help & Support</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
