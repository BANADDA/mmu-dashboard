import { Card } from '@/components/ui/Card';
import {
    BuildingLibraryIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';

export default function DepartmentsPage() {
  // Mock data
  const departments = [
    { 
      id: 1, 
      name: 'Computer Science', 
      faculty: 'Engineering', 
      location: 'Main Campus',
      courseCount: 24,
      studentCount: 450,
      lecturerCount: 18,
      head: 'Prof. John Smith'
    },
    { 
      id: 2, 
      name: 'Mathematics', 
      faculty: 'Science', 
      location: 'North Campus',
      courseCount: 18,
      studentCount: 320,
      lecturerCount: 14,
      head: 'Dr. Sarah Johnson'
    },
    { 
      id: 3, 
      name: 'English', 
      faculty: 'Arts', 
      location: 'South Campus',
      courseCount: 15,
      studentCount: 280,
      lecturerCount: 12,
      head: 'Prof. Michael Brown'
    },
    { 
      id: 4, 
      name: 'Physics', 
      faculty: 'Science', 
      location: 'Main Campus',
      courseCount: 20,
      studentCount: 310,
      lecturerCount: 15,
      head: 'Dr. Rebecca Clark'
    },
    { 
      id: 5, 
      name: 'Mechanical Engineering', 
      faculty: 'Engineering', 
      location: 'North Campus',
      courseCount: 26,
      studentCount: 400,
      lecturerCount: 20,
      head: 'Prof. Richard Wilson'
    },
    { 
      id: 6, 
      name: 'Business Administration', 
      faculty: 'Business', 
      location: 'Main Campus',
      courseCount: 22,
      studentCount: 520,
      lecturerCount: 16,
      head: 'Dr. Emily Davis'
    },
  ];

  const faculties = [
    { id: 1, name: 'Engineering', departmentCount: 5 },
    { id: 2, name: 'Science', departmentCount: 4 },
    { id: 3, name: 'Arts', departmentCount: 3 },
    { id: 4, name: 'Business', departmentCount: 2 },
    { id: 5, name: 'Medicine', departmentCount: 3 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Department Management</h1>
        <button className="flex items-center gap-1 rounded-md bg-primary-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700">
          <PlusIcon className="h-4 w-4" />
          Add Department
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <Card title="Department Directory">
            <div className="mb-4 flex items-center justify-between">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search departments..."
                  className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <select className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                  <option value="">All Faculties</option>
                  {faculties.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                  ))}
                </select>
                <select className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                  <option value="">All Locations</option>
                  <option value="main">Main Campus</option>
                  <option value="north">North Campus</option>
                  <option value="south">South Campus</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {departments.map((department) => (
                    <tr key={department.id} className="hover:bg-gray-50">
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-primary-100 text-primary-600">
                            <BuildingLibraryIcon className="h-5 w-5" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium">{department.name}</div>
                            <div className="text-sm text-gray-500">Head: {department.head}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="text-sm">{department.faculty}</div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="text-sm">{department.location}</div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm">
                        {department.courseCount}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm">
                        {department.studentCount}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-2">
                          <button className="rounded-md bg-primary-50 p-1 text-primary-600 hover:bg-primary-100">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button className="rounded-md bg-red-50 p-1 text-red-600 hover:bg-red-100">
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">6</span> departments
              </div>
              <div className="flex items-center space-x-2">
                <button className="rounded-md border px-3 py-1 text-sm disabled:opacity-50">
                  Previous
                </button>
                <button className="rounded-md border bg-primary-50 px-3 py-1 text-sm font-medium text-primary-600">
                  1
                </button>
                <button className="rounded-md border px-3 py-1 text-sm disabled:opacity-50">
                  Next
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card title="Faculties" className="mb-6">
            <div className="space-y-3">
              {faculties.map((faculty) => (
                <div key={faculty.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div className="font-medium">{faculty.name}</div>
                  <div className="rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700">
                    {faculty.departmentCount} departments
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Manage Faculties
              </button>
            </div>
          </Card>

          <Card title="Department Details" description="Create or edit department information">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="Enter department name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Faculty</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                  <option value="">Select faculty</option>
                  {faculties.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Campus Location</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                  <option value="">Select location</option>
                  <option value="main">Main Campus</option>
                  <option value="north">North Campus</option>
                  <option value="south">South Campus</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department Head</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="Enter department head"
                />
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700">
                  Save Department
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
} 