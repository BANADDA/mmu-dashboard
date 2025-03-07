"use client";

import {
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    BellIcon,
    Cog8ToothIcon,
    MagnifyingGlassIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b bg-white px-4 shadow-md md:px-6 bg-gradient-to-r from-indigo-50 to-indigo-100">
      <div className="flex items-center gap-3">
        <button className="rounded-full p-2 text-indigo-600 hover:bg-indigo-100 md:hidden">
          <Bars3Icon className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold text-indigo-800 md:text-xl">Dashboard Overview</h1>
      </div>
      
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-400" />
          <input
            className="w-72 rounded-full border border-indigo-200 bg-white pl-10 pr-4 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Search anything..."
            type="search"
          />
        </div>
        
        <div className="flex items-center gap-1">
          <button className="relative rounded-full p-2 text-indigo-600 hover:bg-indigo-100">
            <BellIcon className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          
          <button className="rounded-full p-2 text-indigo-600 hover:bg-indigo-100">
            <Cog8ToothIcon className="h-5 w-5" />
          </button>
          
          <div className="relative group">
            <button className="flex items-center gap-2 rounded-full p-1 text-indigo-700 hover:bg-indigo-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200 text-indigo-700">
                <span className="text-sm font-medium">AU</span>
              </div>
              <div className="hidden md:block pr-1">
                <div className="text-sm font-medium text-indigo-800">Admin User</div>
                <div className="text-xs text-indigo-600">Super Admin</div>
              </div>
            </button>
            
            <div className="absolute right-0 top-full mt-1 hidden w-48 rounded-md border border-indigo-200 bg-white py-1 shadow-lg group-hover:block">
              <Link href="/dashboard/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-50">
                <UserCircleIcon className="h-4 w-4" />
                <span>My Profile</span>
              </Link>
              <Link href="/dashboard/settings" className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-50">
                <Cog8ToothIcon className="h-4 w-4" />
                <span>Settings</span>
              </Link>
              <div className="my-1 border-t border-indigo-100"></div>
              <Link href="/" className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-50">
                <ArrowRightOnRectangleIcon className="h-4 w-4" />
                <span>Sign out</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 