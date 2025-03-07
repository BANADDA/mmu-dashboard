"use client";

import { Card } from '@/components/ui/Card';
import {
    ArrowPathIcon,
    BellIcon,
    BookOpenIcon,
    BuildingOfficeIcon,
    CalendarDaysIcon,
    ClockIcon,
    PencilIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function MySchedulePage() {
  // Mock data for lecturer's schedule - this would be filtered by the lecturer's ID in a real app
  const myLectures = [
    {
      id: 1,
      course: 'CSC301',
      title: 'Data Structures and Algorithms',
      day: 'Monday',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      room: 'Block A, Room 202',
      students: 78,
      upcoming: true,
      recurring: true,
    },
    {
      id: 2,
      course: 'CSC301',
      title: 'Data Structures and Algorithms',
      day: 'Wednesday',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      room: 'Block A, Room 202',
      students: 78,
      upcoming: false,
      recurring: true,
    },
    {
      id: 3,
      course: 'CSC401',
      title: 'Database Management Systems',
      day: 'Thursday',
      startTime: '1:00 PM',
      endTime: '3:00 PM',
      room: 'Block A, Room 204',
      students: 72,
      upcoming: false,
      recurring: true,
    },
    {
      id: 4,
      course: 'CSC205',
      title: 'Programming Fundamentals',
      day: 'Tuesday',
      startTime: '2:00 PM',
      endTime: '3:30 PM',
      room: 'Block B, Room 105',
      students: 95,
      upcoming: false,
      recurring: true,
    },
    {
      id: 5,
      course: 'CSC205',
      title: 'Programming Fundamentals',
      day: 'Friday',
      startTime: '2:00 PM',
      endTime: '3:30 PM',
      room: 'Block B, Room 105',
      students: 95,
      upcoming: false,
      recurring: true,
    },
  ];

  // Days of the week for the weekly schedule
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
  
  // Function to get lectures for a specific day and time
  const getLecturesForSlot = (day: string, time: string) => {
    return myLectures.filter(lecture => 
      lecture.day === day && 
      lecture.startTime <= time && 
      lecture.endTime > time
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-indigo-900">My Teaching Schedule</h1>
        <p className="text-indigo-700">Your class schedule for this semester</p>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="grid grid-cols-6 border-b border-indigo-200">
              <div className="p-3 font-medium text-indigo-800 bg-indigo-50 border-r border-indigo-200"></div>
              {days.map((day, index) => (
                <div key={index} className="p-3 font-medium text-indigo-800 bg-indigo-50 border-r border-indigo-200">
                  {day}
                </div>
              ))}
            </div>
            
            {timeSlots.map((time, timeIndex) => (
              <div key={timeIndex} className="grid grid-cols-6 border-b border-indigo-100">
                <div className="p-3 font-medium text-indigo-700 bg-indigo-50 border-r border-indigo-200">
                  {time}
                </div>
                
                {days.map((day, dayIndex) => {
                  const slotLectures = getLecturesForSlot(day, time);
                  return (
                    <div key={dayIndex} className="p-2 border-r border-indigo-100 min-h-[80px]">
                      {slotLectures.map((lecture) => (
                        <div 
                          key={lecture.id} 
                          className={`p-2 mb-1 text-xs rounded cursor-pointer ${
                            lecture.upcoming 
                              ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                              : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                          }`}
                        >
                          <div className="font-medium">{lecture.course}</div>
                          <div>{lecture.room}</div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="Upcoming Lectures" description="Your next scheduled classes">
        <div className="mt-4 space-y-4">
          {myLectures.filter(lecture => lecture.upcoming).map((lecture) => (
            <div key={lecture.id} className="flex items-start border-b border-indigo-100 pb-4 last:border-0">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 mr-4">
                <ClockIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-indigo-900">{lecture.course}: {lecture.title}</h3>
                  <span className="inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                    Next Up
                  </span>
                </div>
                <div className="mt-1 space-y-1">
                  <div className="flex items-center text-sm text-indigo-700">
                    <CalendarDaysIcon className="h-4 w-4 mr-1 text-indigo-500" />
                    {lecture.day}, {lecture.startTime} - {lecture.endTime}
                  </div>
                  <div className="flex items-center text-sm text-indigo-700">
                    <BuildingOfficeIcon className="h-4 w-4 mr-1 text-indigo-500" />
                    {lecture.room}
                  </div>
                  <div className="flex items-center text-sm text-indigo-700">
                    <UserGroupIcon className="h-4 w-4 mr-1 text-indigo-500" />
                    {lecture.students} Students
                  </div>
                </div>
              </div>
              <div className="ml-4 flex space-x-2">
                <button className="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200">
                  <BookOpenIcon className="h-3 w-3 mr-1" />
                  Materials
                </button>
                <button className="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200">
                  <PencilIcon className="h-3 w-3 mr-1" />
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Schedule Changes" description="Recent modifications to your schedule">
          <div className="mt-4 space-y-4">
            <div className="flex items-start border-b border-indigo-100 pb-3">
              <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 mr-3">
                <ArrowPathIcon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-indigo-800">Room Change for CSC301</p>
                <p className="text-sm text-indigo-600">Changed from Block A, Room 201 to Block A, Room 202</p>
                <p className="text-xs text-indigo-500">2 days ago</p>
              </div>
            </div>
            
            <div className="flex items-start border-b border-indigo-100 pb-3">
              <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 mr-3">
                <ArrowPathIcon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-indigo-800">Time Change for CSC205</p>
                <p className="text-sm text-indigo-600">Changed from 1:00 PM to 2:00 PM on Tuesdays and Fridays</p>
                <p className="text-xs text-indigo-500">1 week ago</p>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Schedule Reminders" description="Set notifications for your classes">
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-3">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  <BellIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-indigo-800">15 Minutes Before Class</p>
                  <p className="text-sm text-indigo-600">Notifications for all classes</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between border-b border-indigo-100 pb-3">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  <BellIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-indigo-800">1 Hour Before Class</p>
                  <p className="text-sm text-indigo-600">Email reminders for all classes</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  <BellIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-indigo-800">Schedule Changes</p>
                  <p className="text-sm text-indigo-600">Get notified about any changes</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 