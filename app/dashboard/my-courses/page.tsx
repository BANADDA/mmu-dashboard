"use client";

import { Card } from '@/components/ui/Card';
import {
    ArrowDownTrayIcon,
    BookOpenIcon,
    ChartBarIcon,
    ClockIcon,
    DocumentTextIcon,
    PencilIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function MyCoursesPage() {
  // Mock data for lecturer-specific courses
  // In a real app, this would be filtered by the logged-in lecturer's ID
  const myCourses = [
    { 
      id: 1, 
      code: 'CSC301', 
      name: 'Data Structures and Algorithms', 
      department: 'Computer Science',
      totalStudents: 78,
      schedule: 'Mon, Wed 10:00 AM - 12:00 PM',
      room: 'Block A, Room 202',
      completionRate: 65,
    },
    { 
      id: 2, 
      code: 'CSC401', 
      name: 'Database Management Systems', 
      department: 'Computer Science',
      totalStudents: 72,
      schedule: 'Thu 1:00 PM - 3:00 PM',
      room: 'Block A, Room 204',
      completionRate: 40,
    },
    { 
      id: 3, 
      code: 'CSC205', 
      name: 'Programming Fundamentals', 
      department: 'Computer Science',
      totalStudents: 95,
      schedule: 'Tue, Fri 2:00 PM - 3:30 PM',
      room: 'Block B, Room 105',
      completionRate: 75,
    },
  ];

  // Mock course materials
  const courseMaterials = [
    { id: 1, title: 'Week 1: Introduction to Data Structures', type: 'PDF', course: 'CSC301', date: '2023-09-05' },
    { id: 2, title: 'Assignment 1: Array Implementation', type: 'DOC', course: 'CSC301', date: '2023-09-10' },
    { id: 3, title: 'Week 1: Database Concepts', type: 'PDF', course: 'CSC401', date: '2023-09-07' },
    { id: 4, title: 'SQL Syntax Guide', type: 'PDF', course: 'CSC401', date: '2023-09-12' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-indigo-900">My Courses</h1>
        <p className="text-indigo-700">Courses you are teaching this semester</p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {myCourses.map((course) => (
          <Card key={course.id} className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-indigo-900">{course.code}</h2>
                <h3 className="text-md font-medium text-indigo-800">{course.name}</h3>
                <p className="text-sm text-indigo-600">{course.department}</p>
              </div>
              <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800">
                {course.completionRate}% Complete
              </span>
            </div>
            
            <div className="space-y-3 mb-4 text-sm">
              <div className="flex items-center text-indigo-700">
                <UserGroupIcon className="h-4 w-4 mr-2 text-indigo-500" />
                <span>{course.totalStudents} Students</span>
              </div>
              
              <div className="flex items-center text-indigo-700">
                <ClockIcon className="h-4 w-4 mr-2 text-indigo-500" />
                <span>{course.schedule}</span>
              </div>
              
              <div className="flex items-center text-indigo-700">
                <BookOpenIcon className="h-4 w-4 mr-2 text-indigo-500" />
                <span>{course.room}</span>
              </div>
            </div>
            
            <div className="mt-auto pt-4 border-t border-indigo-100 flex justify-between">
              <button className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800">
                <DocumentTextIcon className="h-4 w-4 mr-1" />
                Course Materials
              </button>
              
              <button className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800">
                <ChartBarIcon className="h-4 w-4 mr-1" />
                Attendance
              </button>
            </div>
          </Card>
        ))}
      </div>

      <Card title="Recent Course Materials" description="Materials you've uploaded for your courses">
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-indigo-200 text-left">
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Title</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Course</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Type</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Date</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courseMaterials.map((material) => (
                <tr key={material.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                  <td className="px-4 py-3 text-sm font-medium text-indigo-800">{material.title}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{material.course}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{material.type}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{material.date}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <button className="rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-200">
                        <ArrowDownTrayIcon className="h-3 w-3 inline mr-1" />
                        Download
                      </button>
                      <button className="rounded-full p-1 text-indigo-600 hover:bg-indigo-100">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Upcoming Tasks" description="Your upcoming responsibilities">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 mr-3">
                  <ClockIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-indigo-800">Grade CSC301 Assignments</p>
                  <p className="text-sm text-indigo-600">Due in 2 days</p>
                </div>
              </div>
              <span className="text-xs font-medium text-yellow-700 bg-yellow-50 px-2.5 py-0.5 rounded-full">Pending</span>
            </div>
            
            <div className="flex items-center justify-between border-b border-indigo-100 pb-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 mr-3">
                  <DocumentTextIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-indigo-800">Upload CSC401 Week 2 Materials</p>
                  <p className="text-sm text-indigo-600">Due tomorrow</p>
                </div>
              </div>
              <span className="text-xs font-medium text-yellow-700 bg-yellow-50 px-2.5 py-0.5 rounded-full">Pending</span>
            </div>
            
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-800 mr-3">
                  <ChartBarIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-indigo-800">Submit CSC205 Attendance</p>
                  <p className="text-sm text-indigo-600">Due in 3 days</p>
                </div>
              </div>
              <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full">In Progress</span>
            </div>
          </div>
        </Card>

        <Card title="Course Analytics" description="Student performance and engagement">
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-indigo-800">CSC301 - Student Engagement</span>
                <span className="text-sm font-medium text-indigo-900">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-indigo-800">CSC401 - Student Engagement</span>
                <span className="text-sm font-medium text-indigo-900">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-indigo-800">CSC205 - Student Engagement</span>
                <span className="text-sm font-medium text-indigo-900">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">
              View detailed analytics →
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
} 