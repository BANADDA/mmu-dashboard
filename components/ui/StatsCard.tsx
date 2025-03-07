import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatsCard({ title, value, icon, trend, className = '' }: StatsCardProps) {
  return (
    <div className={`rounded-lg border border-indigo-100 bg-white p-4 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-indigo-600">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-800">{value}</h3>
          {trend && (
            <div className="flex items-center mt-1">
              <span 
                className={`text-xs font-medium ${
                  trend.isPositive ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
              </span>
              <span className="text-xs text-gray-500 ml-1">from previous period</span>
            </div>
          )}
        </div>
        <div className="rounded-full bg-indigo-100 p-3 text-indigo-600">
          {icon}
        </div>
      </div>
    </div>
  );
} 