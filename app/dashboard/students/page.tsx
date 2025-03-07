import { Card } from '@/components/ui/Card';
import {
    AcademicCapIcon,
    ChartBarIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function StudentsPage() {
  // Mock data for students
  const students = [
    {
      id: 1,
      name: 'John Smith',
      matricNumber: 'STD/2023/001',
      email: 'john.smith@university.edu',
      department: 'Computer Science',
      faculty: 'Engineering',
      level: '300 Level',
      gpa: 3.8,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      matricNumber: 'STD/2023/042',
      email: 'sarah.j@university.edu',
      department: 'Business Management',
      faculty: 'Business',
      level: '200 Level',
      gpa: 3.5,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Michael Brown',
      matricNumber: 'STD/2023/078',
      email: 'mike.brown@university.edu',
      department: 'Electrical Engineering',
      faculty: 'Engineering',
      level: '400 Level',
      gpa: 3.9,
      status: 'Active',
    },
    {
      id: 4,
      name: 'Emily Davis',
      matricNumber: 'STD/2023/115',
      email: 'emily.d@university.edu',
      department: 'English',
      faculty: 'Arts',
      level: '200 Level',
      gpa: 3.6,
      status: 'Active',
    },
    {
      id: 5,
      name: 'Robert Wilson',
      matricNumber: 'STD/2023/156',
      email: 'robert.w@university.edu',
      department: 'Physics',
      faculty: 'Science',
      level: '300 Level',
      gpa: 3.7,
      status: 'Active',
    },
  ];

  // Filter options
  const faculties = ['All Faculties', 'Engineering', 'Science', 'Arts', 'Business'];
  const departments = ['All Departments', 'Computer Science', 'Business Management', 'Electrical Engineering', 'English', 'Physics'];
  const levels = ['All Levels', '100 Level', '200 Level', '300 Level', '400 Level', '500 Level'];
  const statuses = ['All Status', 'Active', 'Inactive', 'Graduated', 'On Leave'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">Students</h1>
          <p className="text-indigo-700">Manage all university students</p>
        </div>
        <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          <PlusIcon className="mr-2 h-5 w-5" />
          Add New Student
        </button>
      </div>

      <Card>
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-500" />
            <input
              type="search"
              placeholder="Search students..."
              className="w-full rounded-md border border-indigo-200 pl-10 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              {faculties.map((faculty, index) => (
                <option key={index} value={faculty === 'All Faculties' ? '' : faculty}>
                  {faculty}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              {departments.map((department, index) => (
                <option key={index} value={department === 'All Departments' ? '' : department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              {levels.map((level, index) => (
                <option key={index} value={level === 'All Levels' ? '' : level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-indigo-200 text-left">
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Name</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Matric Number</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Email</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Department</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Faculty</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Level</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">GPA</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Status</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                  <td className="px-4 py-3 text-sm font-medium text-indigo-800">{student.name}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{student.matricNumber}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{student.email}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{student.department}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{student.faculty}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{student.level}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{student.gpa}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <button className="rounded-full p-1 text-indigo-600 hover:bg-indigo-100">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="rounded-full p-1 text-red-600 hover:bg-red-50">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-indigo-600">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
            <span className="font-medium">12,345</span> students
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-md border border-indigo-200 px-3 py-1 text-sm text-indigo-700 hover:bg-indigo-50">
              Previous
            </button>
            <button className="rounded-md bg-indigo-600 px-3 py-1 text-sm text-white hover:bg-indigo-700">
              1
            </button>
            <button className="rounded-md border border-indigo-200 px-3 py-1 text-sm text-indigo-700 hover:bg-indigo-50">
              2
            </button>
            <button className="rounded-md border border-indigo-200 px-3 py-1 text-sm text-indigo-700 hover:bg-indigo-50">
              3
            </button>
            <button className="rounded-md border border-indigo-200 px-3 py-1 text-sm text-indigo-700 hover:bg-indigo-50">
              Next
            </button>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Student Statistics" description="Overview of student enrollment">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
              <div className="flex items-center gap-2">
                <UserGroupIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-800">Total Students</span>
              </div>
              <span className="font-semibold text-indigo-900">12,345</span>
            </div>
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
              <div className="flex items-center gap-2">
                <AcademicCapIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-800">Graduating Students</span>
              </div>
              <span className="font-semibold text-indigo-900">1,456</span>
            </div>
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
              <div className="flex items-center gap-2">
                <ChartBarIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-800">Average GPA</span>
              </div>
              <span className="font-semibold text-indigo-900">3.4</span>
            </div>
          </div>
        </Card>

        <Card title="Top Departments" description="Departments with most students">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Computer Science</span>
              <span className="text-sm font-semibold text-indigo-900">2,310 students</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Business Management</span>
              <span className="text-sm font-semibold text-indigo-900">1,845 students</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Electrical Engineering</span>
              <span className="text-sm font-semibold text-indigo-900">1,340 students</span>
            </div>
          </div>
        </Card>

        <Card title="Student Levels" description="Distribution by academic level">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">100 Level</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">200 Level</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '28%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">28%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">300 Level</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '22%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">22%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">400 Level</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">25%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 