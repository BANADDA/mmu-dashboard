"use client";

import {
    AcademicCapIcon,
    BookOpenIcon,
    BuildingLibraryIcon,
    CalendarIcon,
    ChartBarIcon,
    ClipboardDocumentCheckIcon,
    Cog6ToothIcon,
    HomeIcon,
    UserGroupIcon,
    UsersIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

type SidebarItemProps = {
  href: string;
  icon: ReactNode;
  title: string;
  active?: boolean;
};

// Group type for organizing sidebar items
type SidebarGroup = {
  title: string;
  items: Array<{
    href: string;
    icon: ReactNode;
    title: string;
  }>;
};

type UserRole = 'admin' | 'lecturer' | 'head';

const SidebarItem = ({ href, icon, title, active }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
        active
          ? 'bg-primary-600 text-white font-medium'
          : 'text-gray-500 hover:text-white hover:bg-primary-500'
      }`}
    >
      <div className="w-5 h-5">{icon}</div>
      <span>{title}</span>
    </Link>
  );
};

export function Sidebar() {
  const pathname = usePathname();
  const [userRole, setUserRole] = useState<UserRole>('admin');
  const [userName, setUserName] = useState('Admin User');
  const [userInitials, setUserInitials] = useState('AU');
  const [roleDisplay, setRoleDisplay] = useState('Super Admin');

  // Detect user role based on URL pattern or localstorage
  useEffect(() => {
    // Check for lecturer-specific routes
    if (pathname.includes('/my-')) {
      setUserRole('lecturer');
      setUserName('Lecturer User');
      setUserInitials('LU');
      setRoleDisplay('Lecturer');
    } else if (localStorage.getItem('userRole') === 'lecturer') {
      setUserRole('lecturer');
      setUserName('Lecturer User');
      setUserInitials('LU');
      setRoleDisplay('Lecturer');
    } else if (localStorage.getItem('userRole') === 'head') {
      setUserRole('head');
      setUserName('Department Head');
      setUserInitials('DH');
      setRoleDisplay('Department Head');
    }
  }, [pathname]);

  // Define navigation groups for admin
  const adminRouteGroups: SidebarGroup[] = [
    {
      title: "Main",
      items: [
        {
          href: '/dashboard',
          icon: <HomeIcon />,
          title: 'Dashboard'
        },
      ]
    },
    {
      title: "Academic",
      items: [
        {
          href: '/dashboard/departments',
          icon: <BuildingLibraryIcon />,
          title: 'Departments'
        },
        {
          href: '/dashboard/courses',
          icon: <BookOpenIcon />,
          title: 'Courses'
        },
        {
          href: '/dashboard/scheduling',
          icon: <CalendarIcon />,
          title: 'Lecture Scheduling'
        },
      ]
    },
    {
      title: "Management",
      items: [
        {
          href: '/dashboard/students',
          icon: <UserGroupIcon />,
          title: 'Students'
        },
        {
          href: '/dashboard/faculty',
          icon: <AcademicCapIcon />,
          title: 'Faculty'
        },
        {
          href: '/dashboard/attendance',
          icon: <ClipboardDocumentCheckIcon />,
          title: 'Attendance'
        },
      ]
    },
    {
      title: "Insights",
      items: [
        {
          href: '/dashboard/analytics',
          icon: <ChartBarIcon />,
          title: 'Analytics & Reports'
        },
      ]
    },
    {
      title: "System",
      items: [
        {
          href: '/dashboard/settings',
          icon: <Cog6ToothIcon />,
          title: 'Settings'
        },
        {
          href: '/dashboard/users',
          icon: <UsersIcon />,
          title: 'User Management'
        },
      ]
    }
  ];

  // Define navigation groups for lecturer
  const lecturerRouteGroups: SidebarGroup[] = [
    {
      title: "Main",
      items: [
        {
          href: '/dashboard/my-courses',
          icon: <BookOpenIcon />,
          title: 'My Courses'
        },
      ]
    },
    {
      title: "Teaching",
      items: [
        {
          href: '/dashboard/my-schedule',
          icon: <CalendarIcon />,
          title: 'My Schedule'
        },
        {
          href: '/dashboard/my-attendance',
          icon: <ClipboardDocumentCheckIcon />,
          title: 'My Attendance'
        },
        {
          href: '/dashboard/my-students',
          icon: <UserGroupIcon />,
          title: 'My Students'
        },
      ]
    },
    {
      title: "Insights",
      items: [
        {
          href: '/dashboard/analytics',
          icon: <ChartBarIcon />,
          title: 'Analytics & Reports'
        },
      ]
    },
    {
      title: "System",
      items: [
        {
          href: '/dashboard/settings',
          icon: <Cog6ToothIcon />,
          title: 'Settings'
        },
      ]
    }
  ];

  // Define navigation groups for department head (mix of admin and lecturer views)
  const headRouteGroups: SidebarGroup[] = [
    {
      title: "Main",
      items: [
        {
          href: '/dashboard',
          icon: <HomeIcon />,
          title: 'Dashboard'
        },
      ]
    },
    {
      title: "Department",
      items: [
        {
          href: '/dashboard/departments',
          icon: <BuildingLibraryIcon />,
          title: 'Department'
        },
        {
          href: '/dashboard/courses',
          icon: <BookOpenIcon />,
          title: 'Courses'
        },
        {
          href: '/dashboard/faculty',
          icon: <AcademicCapIcon />,
          title: 'Faculty'
        },
      ]
    },
    {
      title: "Teaching",
      items: [
        {
          href: '/dashboard/my-courses',
          icon: <BookOpenIcon />,
          title: 'My Courses'
        },
        {
          href: '/dashboard/my-schedule',
          icon: <CalendarIcon />,
          title: 'My Schedule'
        },
      ]
    },
    {
      title: "Insights",
      items: [
        {
          href: '/dashboard/analytics',
          icon: <ChartBarIcon />,
          title: 'Analytics & Reports'
        },
      ]
    },
  ];

  // Get the route groups based on user role
  const routeGroups = 
    userRole === 'lecturer' ? lecturerRouteGroups : 
    userRole === 'head' ? headRouteGroups : adminRouteGroups;

  return (
    <aside className="fixed left-0 top-0 z-10 h-screen w-64 bg-[#111827] text-white">
      <div className="flex h-16 items-center justify-center border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-primary-600 p-1.5">
            <AcademicCapIcon className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-lg font-bold text-white">MMU Dashboard</h2>
        </div>
      </div>
      <div className="py-4 px-3">
        <div className="space-y-8">
          {routeGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-2">
              <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {group.title}
              </h3>
              <nav className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <SidebarItem
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    title={item.title}
                    active={pathname === item.href}
                  />
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white">
            <span className="text-sm font-medium">{userInitials}</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">{userName}</p>
            <p className="text-xs text-gray-400">{roleDisplay}</p>
          </div>
        </div>
      </div>
    </aside>
  );
} 