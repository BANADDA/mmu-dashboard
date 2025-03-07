"use client";

import { Card } from '@/components/ui/Card';
import {
    ArrowDownTrayIcon,
    CheckIcon,
    PlusIcon,
    UserGroupIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function MyAttendancePage() {
  // State for active course
  const [activeCourse, setActiveCourse] = useState('CSC301');

  // Mock data for lecturer's courses
  const myCourses = [
    { id: 1, code: 'CSC301', name: 'Data Structures and Algorithms', students: 78, attendanceRate: 92 },
    { id: 2, code: 'CSC401', name: 'Database Management Systems', students: 72, attendanceRate: 88 },
    { id: 3, code: 'CSC205', name: 'Programming Fundamentals', students: 95, attendanceRate: 85 },
  ];
  
  // Mock data for lecture dates
  const lectureDates = [
    { id: 1, course: 'CSC301', date: '2023-09-05', day: 'Monday', time: '10:00 AM - 12:00 PM', status: 'Recorded', present: 72, absent: 6 },
    { id: 2, course: 'CSC301', date: '2023-09-12', day: 'Monday', time: '10:00 AM - 12:00 PM', status: 'Recorded', present: 70, absent: 8 },
    { id: 3, course: 'CSC301', date: '2023-09-19', day: 'Monday', time: '10:00 AM - 12:00 PM', status: 'Pending', present: 0, absent: 0 },
    { id: 4, course: 'CSC401', date: '2023-09-07', day: 'Thursday', time: '1:00 PM - 3:00 PM', status: 'Recorded', present: 65, absent: 7 },
    { id: 5, course: 'CSC401', date: '2023-09-14', day: 'Thursday', time: '1:00 PM - 3:00 PM', status: 'Pending', present: 0, absent: 0 },
    { id: 6, course: 'CSC205', date: '2023-09-08', day: 'Friday', time: '2:00 PM - 3:30 PM', status: 'Recorded', present: 85, absent: 10 },
    { id: 7, course: 'CSC205', date: '2023-09-15', day: 'Friday', time: '2:00 PM - 3:30 PM', status: 'Pending', present: 0, absent: 0 },
  ];

  // Mock data for students
  const students = [
    { id: 1, name: 'John Smith', matricNumber: 'STD/2023/001', course: 'CSC301', status: 'Present', attendanceRate: 100 },
    { id: 2, name: 'Emily Johnson', matricNumber: 'STD/2023/002', course: 'CSC301', status: 'Present', attendanceRate: 92 },
    { id: 3, name: 'Michael Brown', matricNumber: 'STD/2023/003', course: 'CSC301', status: 'Absent', attendanceRate: 75 },
    { id: 4, name: 'Sarah Wilson', matricNumber: 'STD/2023/004', course: 'CSC301', status: 'Present', attendanceRate: 98 },
    { id: 5, name: 'David Lee', matricNumber: 'STD/2023/005', course: 'CSC301', status: 'Present', attendanceRate: 95 },
  ];

  // Filter lectures by the active course
  const filteredLectures = lectureDates.filter(lecture => lecture.course === activeCourse);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-indigo-900">My Attendance</h1>
        <p className="text-indigo-700">Manage attendance for your courses</p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {myCourses.map((course) => (
          <div 
            key={course.id} 
            className={`cursor-pointer hover:border-indigo-300 transition-colors ${
              activeCourse === course.code ? 'border-indigo-500 rounded-lg border bg-white p-4 shadow-lg' : 'rounded-lg border bg-white p-4 shadow-lg'
            }`}
            onClick={() => setActiveCourse(course.code)}
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-indigo-900">{course.code}</h2>
                <h3 className="text-md font-medium text-indigo-800">{course.name}</h3>
              </div>
              {activeCourse === course.code && (
                <span className="inline-flex rounded-full bg-indigo-100 p-1 text-indigo-800">
                  <CheckIcon className="h-4 w-4" />
                </span>
              )}
            </div>
            
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-indigo-700">
                <UserGroupIcon className="h-4 w-4 inline mr-1" />
                {course.students} Students
              </span>
              <span className="font-medium text-indigo-900">{course.attendanceRate}% Attendance</span>
            </div>
            
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  course.attendanceRate > 90 
                    ? 'bg-green-600' 
                    : course.attendanceRate > 80 
                    ? 'bg-yellow-500' 
                    : 'bg-red-600'
                }`} 
                style={{ width: `${course.attendanceRate}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card title={`${activeCourse} Attendance Records`} description="Manage lecture attendance">
            <div className="mt-4 space-y-2 mb-6">
              <div className="flex justify-between">
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  <PlusIcon className="mr-2 h-5 w-5" />
                  Record New Attendance
                </button>
                
                <div className="flex space-x-2">
                  <button className="inline-flex items-center rounded-md border border-indigo-200 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50">
                    <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                    Export Report
                  </button>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-indigo-200 text-left">
                    <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Date</th>
                    <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Day & Time</th>
                    <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Status</th>
                    <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Present</th>
                    <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Absent</th>
                    <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLectures.map((lecture) => (
                    <tr key={lecture.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                      <td className="px-4 py-3 text-sm font-medium text-indigo-800">{lecture.date}</td>
                      <td className="px-4 py-3 text-sm text-indigo-700">
                        {lecture.day}, {lecture.time}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          lecture.status === 'Recorded' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {lecture.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-indigo-700">
                        {lecture.status === 'Recorded' ? (
                          <span className="text-green-700">{lecture.present}</span>
                        ) : '-'}
                      </td>
                      <td className="px-4 py-3 text-sm text-indigo-700">
                        {lecture.status === 'Recorded' ? (
                          <span className="text-red-600">{lecture.absent}</span>
                        ) : '-'}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {lecture.status === 'Recorded' ? (
                          <button className="rounded-md bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-200">
                            View Details
                          </button>
                        ) : (
                          <button className="rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-200">
                            Take Attendance
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div>
          <Card title="Attendance Summary" description={`${activeCourse} statistics`}>
            <div className="mt-4 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-indigo-800 mb-3">Overall Attendance Rate</h4>
                <div className="flex items-center gap-3">
                  <div className="relative h-20 w-20">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">
                      <div className="text-center">
                        <span className="text-xl font-bold text-indigo-800">92%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-indigo-700">Present</span>
                        <span className="text-xs font-medium text-indigo-900">142 (92%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-indigo-700">Absent</span>
                        <span className="text-xs font-medium text-indigo-900">14 (8%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-red-600 h-1.5 rounded-full" style={{ width: '8%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-indigo-100">
                <h4 className="text-sm font-semibold text-indigo-800 mb-3">Students with Low Attendance</h4>
                <div className="space-y-2">
                  {students.filter(s => s.attendanceRate < 80).map((student) => (
                    <div key={student.id} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-indigo-800">{student.name}</p>
                        <p className="text-xs text-indigo-600">{student.matricNumber}</p>
                      </div>
                      <span className="text-xs font-medium text-red-600">{student.attendanceRate}%</span>
                    </div>
                  ))}
                  {students.filter(s => s.attendanceRate < 80).length === 0 && (
                    <p className="text-sm text-indigo-600">No students with low attendance</p>
                  )}
                </div>
              </div>
              
              <div className="pt-4 border-t border-indigo-100">
                <h4 className="text-sm font-semibold text-indigo-800 mb-3">Attendance Trend</h4>
                <div className="h-36">
                  <div className="flex h-full items-end space-x-2">
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-indigo-600 rounded-t" style={{ height: '85%' }}></div>
                      <span className="mt-1 text-xs text-indigo-700">Week 1</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-indigo-600 rounded-t" style={{ height: '92%' }}></div>
                      <span className="mt-1 text-xs text-indigo-700">Week 2</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-indigo-600 rounded-t" style={{ height: '88%' }}></div>
                      <span className="mt-1 text-xs text-indigo-700">Week 3</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-indigo-600 rounded-t" style={{ height: '90%' }}></div>
                      <span className="mt-1 text-xs text-indigo-700">Week 4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card title="Student Attendance Detail" description={`${activeCourse} - Latest Session`}>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-indigo-200 text-left">
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Student</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Matric Number</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Status</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Overall Attendance</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.filter(student => student.course === activeCourse).map((student) => (
                <tr key={student.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                  <td className="px-4 py-3 text-sm font-medium text-indigo-800">{student.name}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{student.matricNumber}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      student.status === 'Present' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status === 'Present' ? (
                        <CheckIcon className="mr-1 h-3 w-3" />
                      ) : (
                        <XMarkIcon className="mr-1 h-3 w-3" />
                      )}
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-full max-w-[100px] bg-gray-200 rounded-full h-1.5">
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
                      <span className="text-sm text-indigo-700">{student.attendanceRate}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button className="rounded-md border border-indigo-200 px-2.5 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-50">
                      View History
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
} 