import { DashboardLayout } from '@/components/DashboardLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'University Management Dashboard',
  description: 'Administrative dashboard for university management system',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
} 