import { Card } from '@/components/ui/Card';
import {
    AcademicCapIcon,
    BookOpenIcon,
    ClockIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';

export default function CoursesPage() {
  // Mock data
  const courses = [
    { 
      id: 1, 
      code: 'CSC301', 
      name: 'Data Structures and Algorithms', 
      department: 'Computer Science',
      faculty: 'Engineering',
      semester: 'Fall 2023',
      credits: 4,
      studentCount: 78,
      level: '300 Level',
      lecturer: 'Dr. Johnson Smith',
    },
    { 
      id: 2, 
      code: 'MTH201', 
      name: 'Calculus II', 
      department: 'Mathematics',
      faculty: 'Science',
      semester: 'Fall 2023',
      credits: 3,
      studentCount: 105,
      level: '200 Level',
      lecturer: 'Prof. Maria Garcia',
    },
    { 
      id: 3, 
      code: 'ENG205', 
      name: 'English Literature', 
      department: 'English',
      faculty: 'Arts',
      semester: 'Fall 2023',
      credits: 3,
      studentCount: 62,
      level: '200 Level',
      lecturer: 'Dr. Emily Wilson',
    },
    { 
      id: 4, 
      code: 'PHY202', 
      name: 'Physics for Engineers', 
      department: 'Physics',
      faculty: 'Science',
      semester: 'Fall 2023',
      credits: 4,
      studentCount: 85,
      level: '200 Level',
      lecturer: 'Prof. Robert Chen',
    },
    { 
      id: 5, 
      code: 'CSC401', 
      name: 'Database Management Systems', 
      department: 'Computer Science',
      faculty: 'Engineering',
      semester: 'Fall 2023',
      credits: 4,
      studentCount: 72,
      level: '400 Level',
      lecturer: 'Dr. Sarah Adams',
    },
  ];

  // Mock data for faculties and departments (for filter dropdowns)
  const faculties = ['All Faculties', 'Engineering', 'Science', 'Arts', 'Social Sciences', 'Business'];
  const departments = ['All Departments', 'Computer Science', 'Mathematics', 'English', 'Physics', 'Business Management'];
  const levels = ['All Levels', '100 Level', '200 Level', '300 Level', '400 Level', '500 Level'];
  const semesters = ['All Semesters', 'Fall 2023', 'Spring 2024', 'Summer 2024'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">Courses</h1>
          <p className="text-indigo-700">Manage all university courses</p>
        </div>
        <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          <PlusIcon className="mr-2 h-5 w-5" />
          Add New Course
        </button>
      </div>

      <Card>
        <div className="mb-6 grid gap-4 md:grid-cols-5">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-500" />
            <input
              type="search"
              placeholder="Search courses..."
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
          
          <div>
            <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              {semesters.map((semester, index) => (
                <option key={index} value={semester === 'All Semesters' ? '' : semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-indigo-200 text-left">
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Code</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Course Name</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Department</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Faculty</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Semester</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Credits</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Students</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Lecturer</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                  <td className="px-4 py-3 text-sm font-medium text-indigo-800">{course.code}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{course.name}</td>
                  <td className="px-4 py-3 text-sm text-indigo-600">{course.department}</td>
                  <td className="px-4 py-3 text-sm text-indigo-600">{course.faculty}</td>
                  <td className="px-4 py-3 text-sm text-indigo-600">{course.semester}</td>
                  <td className="px-4 py-3 text-sm text-indigo-600">{course.credits}</td>
                  <td className="px-4 py-3 text-sm text-indigo-600">{course.studentCount}</td>
                  <td className="px-4 py-3 text-sm text-indigo-600">{course.lecturer}</td>
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
            <span className="font-medium">45</span> courses
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
        <Card title="Course Statistics" description="Overview of course distribution">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
              <div className="flex items-center gap-2">
                <BookOpenIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-800">Total Courses</span>
              </div>
              <span className="font-semibold text-indigo-900">256</span>
            </div>
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
              <div className="flex items-center gap-2">
                <AcademicCapIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-800">Active This Semester</span>
              </div>
              <span className="font-semibold text-indigo-900">184</span>
            </div>
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-800">Average Credit Hours</span>
              </div>
              <span className="font-semibold text-indigo-900">3.5</span>
            </div>
          </div>
        </Card>

        <Card title="Top Departments" description="Departments with most courses">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Computer Science</span>
              <span className="text-sm font-semibold text-indigo-900">42 courses</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Business Management</span>
              <span className="text-sm font-semibold text-indigo-900">38 courses</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">Electrical Engineering</span>
              <span className="text-sm font-semibold text-indigo-900">36 courses</span>
            </div>
          </div>
        </Card>

        <Card title="Course Levels" description="Distribution by academic level">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">100 Level</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">20%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">200 Level</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-800">300 Level</span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <span className="text-sm font-semibold text-indigo-900">30%</span>
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