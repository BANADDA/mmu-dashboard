import { Card } from '@/components/ui/Card';
import {
    LockClosedIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    PlusIcon,
    ShieldCheckIcon,
    TrashIcon,
    UserIcon,
    UserPlusIcon,
    UsersIcon,
} from '@heroicons/react/24/outline';

export default function UserManagementPage() {
  // Mock data for users
  const users = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@university.edu',
      role: 'Super Admin',
      department: 'IT Administration',
      status: 'Active',
      lastLogin: '2023-06-10 14:25',
    },
    {
      id: 2,
      name: 'Dr. Johnson Smith',
      email: 'j.smith@university.edu',
      role: 'Department Head',
      department: 'Computer Science',
      status: 'Active',
      lastLogin: '2023-06-09 10:15',
    },
    {
      id: 3,
      name: 'Prof. Maria Garcia',
      email: 'm.garcia@university.edu',
      role: 'Lecturer',
      department: 'Mathematics',
      status: 'Active',
      lastLogin: '2023-06-08 09:30',
    },
    {
      id: 4,
      name: 'Emily Wilson',
      email: 'e.wilson@university.edu',
      role: 'Staff',
      department: 'Student Affairs',
      status: 'Active',
      lastLogin: '2023-06-07 11:45',
    },
    {
      id: 5,
      name: 'Robert Chen',
      email: 'r.chen@university.edu',
      role: 'Lecturer',
      department: 'Physics',
      status: 'Inactive',
      lastLogin: '2023-05-20 16:10',
    },
  ];

  // Mock data for user roles
  const roles = [
    {
      id: 1,
      name: 'Super Admin',
      count: 2,
      description: 'Full system access with all permissions',
    },
    {
      id: 2,
      name: 'Department Head',
      count: 15,
      description: 'Manages department, courses, and faculty',
    },
    {
      id: 3,
      name: 'Lecturer',
      count: 240,
      description: 'Manages courses and student records',
    },
    {
      id: 4,
      name: 'Staff',
      count: 45,
      description: 'Administrative access to specific modules',
    },
  ];

  // Filter options
  const departments = ['All Departments', 'IT Administration', 'Computer Science', 'Mathematics', 'Physics', 'Student Affairs'];
  const userRoles = ['All Roles', 'Super Admin', 'Department Head', 'Lecturer', 'Staff'];
  const statuses = ['All Status', 'Active', 'Inactive', 'Locked', 'Pending'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">User Management</h1>
          <p className="text-indigo-700">Manage system users, roles and permissions</p>
        </div>
        <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          <PlusIcon className="mr-2 h-5 w-5" />
          Add New User
        </button>
      </div>

      <Card>
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-500" />
            <input
              type="search"
              placeholder="Search users..."
              className="w-full rounded-md border border-indigo-200 pl-10 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
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
              {userRoles.map((role, index) => (
                <option key={index} value={role === 'All Roles' ? '' : role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              {statuses.map((status, index) => (
                <option key={index} value={status === 'All Status' ? '' : status}>
                  {status}
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
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Email</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Role</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Department</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Status</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Last Login</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                  <td className="px-4 py-3 text-sm font-medium text-indigo-800">{user.name}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{user.email}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      user.role === 'Super Admin' 
                        ? 'bg-purple-100 text-purple-800'
                        : user.role === 'Department Head'
                        ? 'bg-blue-100 text-blue-800'
                        : user.role === 'Lecturer'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{user.department}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{user.lastLogin}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <button className="rounded-full p-1 text-indigo-600 hover:bg-indigo-100">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="rounded-full p-1 text-indigo-600 hover:bg-indigo-100">
                        <ShieldCheckIcon className="h-4 w-4" />
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
            <span className="font-medium">302</span> users
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

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="User Roles" description="Manage system roles and permissions">
          <div className="mt-4 space-y-4">
            {roles.map((role) => (
              <div key={role.id} className="flex items-start justify-between border-b border-indigo-100 pb-4 last:border-0">
                <div className="flex items-start gap-3">
                  <div className={`rounded-full p-2 ${
                    role.name === 'Super Admin' 
                      ? 'bg-purple-100 text-purple-800'
                      : role.name === 'Department Head'
                      ? 'bg-blue-100 text-blue-800'
                      : role.name === 'Lecturer'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {role.name === 'Super Admin' && <ShieldCheckIcon className="h-5 w-5" />}
                    {role.name === 'Department Head' && <UsersIcon className="h-5 w-5" />}
                    {role.name === 'Lecturer' && <UserIcon className="h-5 w-5" />}
                    {role.name === 'Staff' && <UserIcon className="h-5 w-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-indigo-800">{role.name}</h4>
                      <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-800">
                        {role.count} users
                      </span>
                    </div>
                    <p className="text-sm text-indigo-600">{role.description}</p>
                  </div>
                </div>
                <button className="rounded-full p-1 text-indigo-600 hover:bg-indigo-100">
                  <PencilIcon className="h-4 w-4" />
                </button>
              </div>
            ))}

            <button className="mt-2 flex w-full items-center justify-center rounded-md border border-dashed border-indigo-300 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50">
              <PlusIcon className="mr-2 h-4 w-4" />
              Create New Role
            </button>
          </div>
        </Card>

        <Card title="Quick Actions" description="Common user management tasks">
          <div className="mt-4 space-y-4">
            <button className="flex w-full items-center gap-3 rounded-md border border-indigo-200 p-3 text-left text-indigo-700 hover:bg-indigo-50">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                <UserPlusIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-800">Add New User</h4>
                <p className="text-sm text-indigo-600">Create a new system user account</p>
              </div>
            </button>
            
            <button className="flex w-full items-center gap-3 rounded-md border border-indigo-200 p-3 text-left text-indigo-700 hover:bg-indigo-50">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                <UsersIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-800">Bulk Import Users</h4>
                <p className="text-sm text-indigo-600">Import multiple users from CSV</p>
              </div>
            </button>
            
            <button className="flex w-full items-center gap-3 rounded-md border border-indigo-200 p-3 text-left text-indigo-700 hover:bg-indigo-50">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                <ShieldCheckIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-800">Permission Matrix</h4>
                <p className="text-sm text-indigo-600">Configure detailed system permissions</p>
              </div>
            </button>
            
            <button className="flex w-full items-center gap-3 rounded-md border border-indigo-200 p-3 text-left text-indigo-700 hover:bg-indigo-50">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                <LockClosedIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-800">Security Audit Log</h4>
                <p className="text-sm text-indigo-600">View user account activities</p>
              </div>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
} 