import { Card } from '@/components/ui/Card';
import {
    AcademicCapIcon,
    BookOpenIcon,
    EnvelopeIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    PhoneIcon,
    PlusIcon,
    TrashIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function FacultyPage() {
  // Mock data for faculty members
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Johnson Smith',
      title: 'Professor',
      email: 'j.smith@university.edu',
      phone: '+1 (555) 123-4567',
      department: 'Computer Science',
      faculty: 'Engineering',
      specialization: 'Artificial Intelligence',
      courses: 3,
      students: 120,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Prof. Maria Garcia',
      title: 'Associate Professor',
      email: 'm.garcia@university.edu',
      phone: '+1 (555) 234-5678',
      department: 'Mathematics',
      faculty: 'Science',
      specialization: 'Number Theory',
      courses: 2,
      students: 95,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Dr. Robert Chen',
      title: 'Professor',
      email: 'r.chen@university.edu',
      phone: '+1 (555) 345-6789',
      department: 'Physics',
      faculty: 'Science',
      specialization: 'Quantum Mechanics',
      courses: 4,
      students: 110,
      status: 'Active',
    },
    {
      id: 4,
      name: 'Dr. Emily Wilson',
      title: 'Assistant Professor',
      email: 'e.wilson@university.edu',
      phone: '+1 (555) 456-7890',
      department: 'English',
      faculty: 'Arts',
      specialization: 'Modern Literature',
      courses: 5,
      students: 85,
      status: 'Active',
    },
    {
      id: 5,
      name: 'Dr. Sarah Adams',
      title: 'Associate Professor',
      email: 's.adams@university.edu',
      phone: '+1 (555) 567-8901',
      department: 'Computer Science',
      faculty: 'Engineering',
      specialization: 'Database Systems',
      courses: 3,
      students: 125,
      status: 'On Leave',
    },
  ];

  // Filter options
  const faculties = ['All Faculties', 'Engineering', 'Science', 'Arts', 'Social Sciences', 'Business'];
  const departments = ['All Departments', 'Computer Science', 'Mathematics', 'Physics', 'English', 'Business Management'];
  const titles = ['All Titles', 'Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer', 'Adjunct Professor'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">Faculty</h1>
          <p className="text-indigo-700">Manage university teaching staff</p>
        </div>
        <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          <PlusIcon className="mr-2 h-5 w-5" />
          Add New Faculty
        </button>
      </div>

      <Card>
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-500" />
            <input
              type="search"
              placeholder="Search faculty members..."
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
              {titles.map((title, index) => (
                <option key={index} value={title === 'All Titles' ? '' : title}>
                  {title}
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
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Title</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Contact</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Department</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Faculty</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Specialization</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Courses</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Students</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Status</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {facultyMembers.map((member) => (
                <tr key={member.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                  <td className="px-4 py-3 text-sm font-medium text-indigo-800">{member.name}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{member.title}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex flex-col">
                      <div className="flex items-center text-indigo-700">
                        <EnvelopeIcon className="mr-1 h-3 w-3" /> 
                        {member.email}
                      </div>
                      <div className="flex items-center text-indigo-700">
                        <PhoneIcon className="mr-1 h-3 w-3" /> 
                        {member.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{member.department}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{member.faculty}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{member.specialization}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{member.courses}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{member.students}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      member.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {member.status}
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
            <span className="font-medium">348</span> faculty members
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
        <Card title="Faculty Statistics" description="Overview of teaching staff">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
              <div className="flex items-center gap-2">
                <AcademicCapIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-800">Total Faculty</span>
              </div>
              <span className="font-semibold text-indigo-900">348</span>
            </div>
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
              <div className="flex items-center gap-2">
                <BookOpenIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-800">Active Courses</span>
              </div>
              <span className="font-semibold text-indigo-900">184</span>
            </div>
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
              <div className="flex items-center gap-2">
                <UserGroupIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-800">Student-Faculty Ratio</span>
              </div>
              <span className="font-semibold text-indigo-900">35:1</span>
            </div>
          </div>
        </Card>

        <Card title="Faculty by Rank" description="Distribution by academic rank">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Professors</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">35%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Associate Professors</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '28%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">28%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Assistant Professors</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '22%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">22%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Lecturers</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">15%</span>
            </div>
          </div>
        </Card>

        <Card title="Teaching Load" description="Average courses per faculty">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Engineering</span>
              <span className="text-sm font-semibold text-indigo-900">3.2 courses</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Science</span>
              <span className="text-sm font-semibold text-indigo-900">2.8 courses</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Arts</span>
              <span className="text-sm font-semibold text-indigo-900">3.5 courses</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Business</span>
              <span className="text-sm font-semibold text-indigo-900">2.7 courses</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 