"use client";

import { Card } from '@/components/ui/Card';
import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    BookOpenIcon,
    ChartBarIcon,
    EnvelopeIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    PhoneIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function MyStudentsPage() {
  // State for active course
  const [activeCourse, setActiveCourse] = useState('CSC301');

  // Mock data for lecturer's courses
  const myCourses = [
    { id: 1, code: 'CSC301', name: 'Data Structures and Algorithms', students: 78 },
    { id: 2, code: 'CSC401', name: 'Database Management Systems', students: 72 },
    { id: 3, code: 'CSC205', name: 'Programming Fundamentals', students: 95 },
  ];
  
  // Mock data for students
  const students = [
    { 
      id: 1, 
      name: 'John Smith', 
      matricNumber: 'STD/2023/001', 
      email: 'john.s@university.edu',
      phone: '+1 (555) 123-4567',
      course: 'CSC301', 
      department: 'Computer Science',
      level: '300 Level',
      gpa: 3.8,
      attendanceRate: 95,
      lastAssignmentGrade: 'A',
    },
    { 
      id: 2, 
      name: 'Emily Johnson', 
      matricNumber: 'STD/2023/002', 
      email: 'emily.j@university.edu',
      phone: '+1 (555) 234-5678',
      course: 'CSC301', 
      department: 'Computer Science',
      level: '300 Level',
      gpa: 3.9,
      attendanceRate: 98,
      lastAssignmentGrade: 'A+',
    },
    { 
      id: 3, 
      name: 'Michael Brown', 
      matricNumber: 'STD/2023/003', 
      email: 'michael.b@university.edu',
      phone: '+1 (555) 345-6789',
      course: 'CSC301', 
      department: 'Computer Science',
      level: '300 Level',
      gpa: 3.5,
      attendanceRate: 85,
      lastAssignmentGrade: 'B+',
    },
    { 
      id: 4, 
      name: 'Sarah Wilson', 
      matricNumber: 'STD/2023/004', 
      email: 'sarah.w@university.edu',
      phone: '+1 (555) 456-7890',
      course: 'CSC301', 
      department: 'Computer Science',
      level: '300 Level',
      gpa: 3.7,
      attendanceRate: 92,
      lastAssignmentGrade: 'A-',
    },
    { 
      id: 5, 
      name: 'David Lee', 
      matricNumber: 'STD/2023/005', 
      email: 'david.l@university.edu',
      phone: '+1 (555) 567-8901',
      course: 'CSC301', 
      department: 'Computer Science',
      level: '300 Level',
      gpa: 3.4,
      attendanceRate: 88,
      lastAssignmentGrade: 'B',
    },
    { 
      id: 6, 
      name: 'Jennifer Adams', 
      matricNumber: 'STD/2023/012', 
      email: 'jennifer.a@university.edu',
      phone: '+1 (555) 678-9012',
      course: 'CSC401', 
      department: 'Computer Science',
      level: '400 Level',
      gpa: 3.8,
      attendanceRate: 95,
      lastAssignmentGrade: 'A',
    },
    { 
      id: 7, 
      name: 'Robert Davis', 
      matricNumber: 'STD/2023/046', 
      email: 'robert.d@university.edu',
      phone: '+1 (555) 789-0123',
      course: 'CSC205', 
      department: 'Computer Science',
      level: '200 Level',
      gpa: 3.6,
      attendanceRate: 90,
      lastAssignmentGrade: 'A-',
    },
  ];

  // Filter students by the active course
  const filteredStudents = students.filter(student => student.course === activeCourse);

  // Performance statistics
  const courseStats = {
    averageGPA: filteredStudents.reduce((sum, student) => sum + student.gpa, 0) / filteredStudents.length,
    averageAttendance: filteredStudents.reduce((sum, student) => sum + student.attendanceRate, 0) / filteredStudents.length,
    gradeDistribution: {
      'A+': filteredStudents.filter(s => s.lastAssignmentGrade === 'A+').length,
      'A': filteredStudents.filter(s => s.lastAssignmentGrade === 'A').length,
      'A-': filteredStudents.filter(s => s.lastAssignmentGrade === 'A-').length,
      'B+': filteredStudents.filter(s => s.lastAssignmentGrade === 'B+').length,
      'B': filteredStudents.filter(s => s.lastAssignmentGrade === 'B').length,
      'B-': filteredStudents.filter(s => s.lastAssignmentGrade === 'B-').length,
      'C+': filteredStudents.filter(s => s.lastAssignmentGrade === 'C+').length,
      'C': filteredStudents.filter(s => s.lastAssignmentGrade === 'C').length,
      'D': filteredStudents.filter(s => s.lastAssignmentGrade === 'D').length,
      'F': filteredStudents.filter(s => s.lastAssignmentGrade === 'F').length,
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-indigo-900">My Students</h1>
        <p className="text-indigo-700">View and manage students in your courses</p>
      </div>

      <div className="flex overflow-x-auto border-b border-indigo-200 pb-px space-x-4">
        {myCourses.map((course) => (
          <button
            key={course.id}
            className={`flex items-center whitespace-nowrap pb-4 pt-2 text-sm font-medium ${
              activeCourse === course.code
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-indigo-500 hover:border-b-2 hover:border-indigo-300 hover:text-indigo-700'
            }`}
            onClick={() => setActiveCourse(course.code)}
          >
            <BookOpenIcon className="mr-2 h-5 w-5" />
            {course.code}: {course.name} ({course.students})
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div className="relative w-full md:w-96">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-500" />
          <input
            type="search"
            placeholder="Search students..."
            className="w-full rounded-md border border-indigo-200 pl-10 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        
        <div className="flex space-x-3">
          <button className="inline-flex items-center rounded-md bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200">
            <ArrowDownTrayIcon className="mr-2 h-4 w-4" />
            Export List
          </button>
          <button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <ChartBarIcon className="mr-2 h-4 w-4" />
            Performance Report
          </button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-indigo-200 text-left">
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Name</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Matric Number</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Contact</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Level</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">GPA</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Attendance</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Last Grade</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                  <td className="px-4 py-3 text-sm font-medium text-indigo-800">{student.name}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{student.matricNumber}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex flex-col text-indigo-700">
                      <div className="flex items-center">
                        <EnvelopeIcon className="h-3 w-3 mr-1" />
                        {student.email}
                      </div>
                      <div className="flex items-center">
                        <PhoneIcon className="h-3 w-3 mr-1" />
                        {student.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{student.level}</td>
                  <td className="px-4 py-3 text-sm font-medium text-indigo-800">{student.gpa}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full ${
                            student.attendanceRate > 90 
                              ? 'bg-green-600' 
                              : student.attendanceRate > 80 
                              ? 'bg-yellow-500' 
                              : 'bg-red-600'
                          }`} 
                          style={{ width: `${student.attendanceRate}%` }}
                        ></div>
                      </div>
                      <span>{student.attendanceRate}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      student.lastAssignmentGrade.startsWith('A') 
                        ? 'bg-green-100 text-green-800'
                        : student.lastAssignmentGrade.startsWith('B') 
                        ? 'bg-blue-100 text-blue-800'
                        : student.lastAssignmentGrade.startsWith('C') 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.lastAssignmentGrade}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button className="rounded-md bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-200">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <Card title="Class Performance" description={`${activeCourse} Statistics`}>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-700">Average GPA</span>
              <span className="text-sm font-medium text-indigo-900">{courseStats.averageGPA.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-700">Average Attendance</span>
              <span className="text-sm font-medium text-indigo-900">{courseStats.averageAttendance.toFixed(1)}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-700">Total Students</span>
              <span className="text-sm font-medium text-indigo-900">{filteredStudents.length}</span>
            </div>
            <div className="pt-4 border-t border-indigo-100">
              <button className="w-full rounded-md border border-indigo-200 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50">
                View Detailed Analytics
              </button>
            </div>
          </div>
        </Card>

        <Card title="Grade Distribution" description="Latest Assignment Results">
          <div className="mt-4 space-y-3">
            {Object.entries(courseStats.gradeDistribution)
              .filter(([_grade, count]) => count > 0)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([grade, count], index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
                    grade.startsWith('A') 
                      ? 'bg-green-100 text-green-800'
                      : grade.startsWith('B') 
                      ? 'bg-blue-100 text-blue-800'
                      : grade.startsWith('C') 
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {grade}
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${
                          grade.startsWith('A') 
                          ? 'bg-green-600'
                          : grade.startsWith('B') 
                          ? 'bg-blue-600'
                          : grade.startsWith('C') 
                          ? 'bg-yellow-500'
                          : 'bg-red-600'
                        }`} 
                        style={{ width: `${(count / filteredStudents.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-8 text-right text-sm text-indigo-700">{count}</div>
                </div>
              ))}
          </div>
        </Card>

        <Card title="Upcoming Actions" description="Tasks for this class">
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3 pb-3 border-b border-indigo-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                <PencilIcon className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-indigo-800">Grade Assignments</h4>
                <p className="text-xs text-indigo-600">20 pending submissions</p>
                <button className="mt-1 text-xs text-indigo-600 hover:text-indigo-800">Start Grading →</button>
              </div>
            </div>
            
            <div className="flex items-start gap-3 pb-3 border-b border-indigo-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                <ChartBarIcon className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-indigo-800">Mid-term Evaluation</h4>
                <p className="text-xs text-indigo-600">Due in 2 weeks</p>
                <button className="mt-1 text-xs text-indigo-600 hover:text-indigo-800">Prepare Evaluation →</button>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                <AcademicCapIcon className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-indigo-800">Progress Report</h4>
                <p className="text-xs text-indigo-600">Required for 5 students</p>
                <button className="mt-1 text-xs text-indigo-600 hover:text-indigo-800">Generate Reports →</button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 