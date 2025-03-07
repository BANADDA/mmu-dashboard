import { Card } from '@/components/ui/Card';
import { StatsCard } from '@/components/ui/StatsCard';
import {
    AcademicCapIcon,
    BookOpenIcon,
    BuildingLibraryIcon,
    CalendarIcon,
    ChartBarIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  // Mock data
  const stats = [
    {
      title: 'Total Students',
      value: '12,345',
      icon: <UserGroupIcon className="h-6 w-6" />,
      trend: { value: 5.2, isPositive: true }
    },
    {
      title: 'Total Lecturers',
      value: '348',
      icon: <AcademicCapIcon className="h-6 w-6" />,
      trend: { value: 2.8, isPositive: true }
    },
    {
      title: 'Departments',
      value: '42',
      icon: <BuildingLibraryIcon className="h-6 w-6" />,
    },
    {
      title: 'Courses',
      value: '256',
      icon: <BookOpenIcon className="h-6 w-6" />,
      trend: { value: 3.1, isPositive: true }
    },
    {
      title: 'Active Lectures',
      value: '184',
      icon: <CalendarIcon className="h-6 w-6" />,
    },
    {
      title: 'Attendance Rate',
      value: '87%',
      icon: <ChartBarIcon className="h-6 w-6" />,
      trend: { value: 1.5, isPositive: false }
    }
  ];

  // Mock upcoming lectures
  const upcomingLectures = [
    { id: 1, course: 'CSC 301', title: 'Data Structures and Algorithms', time: 'Today, 10:00 AM', room: 'Block A, Room 202' },
    { id: 2, course: 'ENG 205', title: 'English Literature', time: 'Today, 2:00 PM', room: 'Block B, Room 305' },
    { id: 3, course: 'MTH 201', title: 'Calculus II', time: 'Tomorrow, 9:00 AM', room: 'Block C, Room 101' },
    { id: 4, course: 'PHY 202', title: 'Physics for Engineers', time: 'Tomorrow, 12:00 PM', room: 'Science Block, Lab 3' },
  ];

  // Mock recent activities
  const recentActivities = [
    { id: 1, action: 'New student registered', time: '5 minutes ago', user: 'John Doe' },
    { id: 2, action: 'Lecture rescheduled', time: '1 hour ago', user: 'Dr. Smith' },
    { id: 3, action: 'Attendance recorded', time: '3 hours ago', user: 'Prof. Johnson' },
    { id: 4, action: 'Announcement published', time: 'Yesterday', user: 'Admin' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-indigo-900">Dashboard Overview</h1>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card title="Upcoming Lectures" description="Next scheduled lectures">
          <div className="space-y-4">
            {upcomingLectures.map((lecture) => (
              <div key={lecture.id} className="flex items-start border-b border-indigo-100 pb-3 last:border-0 last:pb-0">
                <div className="flex-1">
                  <p className="font-medium text-indigo-900">{lecture.course}: {lecture.title}</p>
                  <div className="mt-1 flex items-center text-sm text-indigo-700">
                    <CalendarIcon className="mr-1 h-4 w-4 text-indigo-500" />
                    {lecture.time}
                  </div>
                  <p className="text-sm text-indigo-600">{lecture.room}</p>
                </div>
                <button className="rounded-md bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-200">
                  View
                </button>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Recent Activities" description="Latest actions in the system">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start border-b border-indigo-100 pb-3 last:border-0 last:pb-0">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
                  <UserGroupIcon className="h-4 w-4 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-indigo-800">{activity.action}</p>
                  <p className="text-sm text-indigo-700">by {activity.user}</p>
                  <p className="text-sm text-indigo-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1">
        <Card title="Quick Actions" description="Common tasks you can perform">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { title: 'Schedule Lecture', icon: <CalendarIcon className="h-6 w-6" /> },
              { title: 'Record Attendance', icon: <ChartBarIcon className="h-6 w-6" /> },
              { title: 'Create Announcement', icon: <BookOpenIcon className="h-6 w-6" /> },
              { title: 'Generate Report', icon: <UserGroupIcon className="h-6 w-6" /> },
            ].map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center justify-center rounded-lg border border-indigo-200 p-4 text-center hover:bg-indigo-50"
              >
                <div className="mb-2 rounded-full bg-indigo-100 p-2 text-indigo-600">
                  {action.icon}
                </div>
                <span className="text-sm font-medium text-indigo-800">{action.title}</span>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
} 