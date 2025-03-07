import { Card } from '@/components/ui/Card';
import {
    ArrowDownIcon,
    ArrowDownTrayIcon,
    ArrowUpIcon,
    ClipboardDocumentCheckIcon,
    FunnelIcon,
    PlusIcon
} from '@heroicons/react/24/outline';

export default function AttendancePage() {
  // Mock data
  const courses = [
    { id: 1, code: 'CSC 301', name: 'Data Structures and Algorithms', lecturer: 'Dr. John Smith', attendance: 92 },
    { id: 2, code: 'CSC 305', name: 'Software Engineering', lecturer: 'Prof. Jane Doe', attendance: 88 },
    { id: 3, code: 'MTH 201', name: 'Calculus II', lecturer: 'Dr. Michael Johnson', attendance: 78 },
    { id: 4, code: 'ENG 205', name: 'English Literature', lecturer: 'Prof. Sarah Williams', attendance: 85 },
    { id: 5, code: 'PHY 202', name: 'Physics for Engineers', lecturer: 'Dr. Robert Brown', attendance: 81 },
    { id: 6, code: 'CHM 203', name: 'Organic Chemistry', lecturer: 'Dr. Emily Davis', attendance: 76 },
  ];

  // Mock recent attendance records
  const recentRecords = [
    { 
      id: 1, 
      course: 'CSC 301', 
      date: '2023-06-15', 
      time: '10:00 AM', 
      present: 45, 
      absent: 3, 
      percentage: 94 
    },
    { 
      id: 2, 
      course: 'MTH 201', 
      date: '2023-06-14', 
      time: '9:00 AM', 
      present: 38, 
      absent: 12, 
      percentage: 76 
    },
    { 
      id: 3, 
      course: 'ENG 205', 
      date: '2023-06-14', 
      time: '2:00 PM', 
      present: 42, 
      absent: 6, 
      percentage: 87 
    },
    { 
      id: 4, 
      course: 'PHY 202', 
      date: '2023-06-13', 
      time: '12:00 PM', 
      present: 39, 
      absent: 9, 
      percentage: 81 
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Attendance Management</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-50 border">
            <FunnelIcon className="h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-50 border">
            <ArrowDownTrayIcon className="h-4 w-4" />
            Export
          </button>
          <button className="flex items-center gap-1 rounded-md bg-primary-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700">
            <PlusIcon className="h-4 w-4" />
            Record New
          </button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <Card className="lg:col-span-2" title="Recent Attendance Records">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Present</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Absent</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="font-medium">{record.course}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div>{record.date}</div>
                      <div className="text-sm text-gray-500">{record.time}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm">
                      {record.present} students
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm">
                      {record.absent} students
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        record.percentage >= 90
                          ? 'bg-green-100 text-green-800'
                          : record.percentage >= 80
                          ? 'bg-blue-100 text-blue-800'
                          : record.percentage >= 70
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {record.percentage}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Attendance Rates by Course">
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{course.code}</p>
                  <p className="text-sm text-gray-500">{course.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                    {course.attendance >= 85 ? (
                      <ArrowUpIcon className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDownIcon className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <span className={`font-medium ${
                    course.attendance >= 85 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {course.attendance}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Record Attendance" description="Take attendance for a scheduled lecture">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.code}: {course.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
            <input
              type="time"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
            <input
              type="time"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700">
            <ClipboardDocumentCheckIcon className="h-5 w-5" />
            Start Attendance Session
          </button>
        </div>
      </Card>
    </div>
  );
} 