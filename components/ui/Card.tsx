import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Card({ title, description, children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg border border-indigo-100 bg-white shadow-lg ${className}`}>
      {(title || description) && (
        <div className="border-b border-indigo-100 p-4 bg-indigo-50">
          {title && <h3 className="text-lg font-semibold text-indigo-800">{title}</h3>}
          {description && <p className="text-sm text-indigo-600">{description}</p>}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
} 