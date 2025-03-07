"use client";

import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-100 to-indigo-200">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
        <footer className="border-t border-indigo-200 p-4 text-center text-sm text-indigo-700 bg-indigo-50">
          &copy; {new Date().getFullYear()} University Management System - All rights reserved
        </footer>
      </div>
    </div>
  );
} 