import { Card } from '@/components/ui/Card';
import {
    AcademicCapIcon,
    BuildingOfficeIcon,
    CalendarDaysIcon,
    ClockIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon
} from '@heroicons/react/24/outline';

export default function SchedulingPage() {
  // Mock data for lectures
  const lectures = [
    {
      id: 1,
      course: 'CSC301',
      title: 'Data Structures and Algorithms',
      day: 'Monday',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      room: 'Block A, Room 202',
      lecturer: 'Dr. Johnson Smith',
      department: 'Computer Science',
      students: 78,
    },
    {
      id: 2,
      course: 'MTH201',
      title: 'Calculus II',
      day: 'Monday',
      startTime: '2:00 PM',
      endTime: '4:00 PM',
      room: 'Block C, Room 101',
      lecturer: 'Prof. Maria Garcia',
      department: 'Mathematics',
      students: 105,
    },
    {
      id: 3,
      course: 'ENG205',
      title: 'English Literature',
      day: 'Tuesday',
      startTime: '9:00 AM',
      endTime: '11:00 AM',
      room: 'Block B, Room 305',
      lecturer: 'Dr. Emily Wilson',
      department: 'English',
      students: 62,
    },
    {
      id: 4,
      course: 'PHY202',
      title: 'Physics for Engineers',
      day: 'Wednesday',
      startTime: '11:00 AM',
      endTime: '1:00 PM',
      room: 'Science Block, Lab 3',
      lecturer: 'Prof. Robert Chen',
      department: 'Physics',
      students: 85,
    },
    {
      id: 5,
      course: 'CSC401',
      title: 'Database Management Systems',
      day: 'Thursday',
      startTime: '1:00 PM',
      endTime: '3:00 PM',
      room: 'Block A, Room 204',
      lecturer: 'Dr. Sarah Adams',
      department: 'Computer Science',
      students: 72,
    },
  ];

  // Mock data for calendar days
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
  
  // Function to get lectures for a specific day and time
  const getLecturesForSlot = (day: string, time: string) => {
    return lectures.filter(lecture => 
      lecture.day === day && 
      lecture.startTime <= time && 
      lecture.endTime > time
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">Lecture Scheduling</h1>
          <p className="text-indigo-700">Manage and schedule lectures across departments</p>
        </div>
        <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          <PlusIcon className="mr-2 h-5 w-5" />
          Schedule New Lecture
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card title="Weekly Schedule" description="Current semester lecture timetable">
            <div className="overflow-x-auto mt-4">
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
                              className="p-1 mb-1 text-xs rounded bg-indigo-100 text-indigo-800 cursor-pointer hover:bg-indigo-200"
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
        </div>

        <div>
          <Card title="Quick Actions" description="Schedule management tools">
            <div className="mt-4 space-y-4">
              <button className="flex w-full items-center gap-2 rounded-md border border-indigo-200 p-3 text-indigo-700 hover:bg-indigo-50">
                <CalendarDaysIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium">View Full Calendar</span>
              </button>
              
              <button className="flex w-full items-center gap-2 rounded-md border border-indigo-200 p-3 text-indigo-700 hover:bg-indigo-50">
                <PlusIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium">Add Lecture</span>
              </button>
              
              <button className="flex w-full items-center gap-2 rounded-md border border-indigo-200 p-3 text-indigo-700 hover:bg-indigo-50">
                <PencilIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium">Edit Schedule</span>
              </button>
              
              <button className="flex w-full items-center gap-2 rounded-md border border-indigo-200 p-3 text-indigo-700 hover:bg-indigo-50">
                <BuildingOfficeIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium">Manage Rooms</span>
              </button>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-indigo-800 mb-2">Schedule Statistics</h4>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-indigo-700">Total Lectures</span>
                  </div>
                  <span className="font-medium text-indigo-900">184</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AcademicCapIcon className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-indigo-700">Active Lecturers</span>
                  </div>
                  <span className="font-medium text-indigo-900">48</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BuildingOfficeIcon className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-indigo-700">Used Rooms</span>
                  </div>
                  <span className="font-medium text-indigo-900">32</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card title="Upcoming Lectures" description="Recently scheduled classes">
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-indigo-200 text-left">
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Course</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Day</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Time</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Room</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Lecturer</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Department</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Students</th>
                <th className="px-4 py-3 text-sm font-semibold text-indigo-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {lectures.map((lecture) => (
                <tr key={lecture.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                  <td className="px-4 py-3 text-sm font-medium text-indigo-800">
                    {lecture.course}: {lecture.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{lecture.day}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">
                    {lecture.startTime} - {lecture.endTime}
                  </td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{lecture.room}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{lecture.lecturer}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{lecture.department}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{lecture.students}</td>
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
      </Card>
    </div>
  );
} 