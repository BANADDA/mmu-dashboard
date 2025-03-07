"use client";

import { Card } from '@/components/ui/Card';
import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    ArrowTrendingUpIcon,
    BuildingLibraryIcon,
    ChartBarIcon,
    ClipboardDocumentCheckIcon,
    PresentationChartLineIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement
);

export default function AnalyticsPage() {
  // Mock data for enrollment trends
  const enrollmentData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Total Enrollment',
        data: [10200, 10800, 11500, 12000, 12345],
        borderColor: 'rgb(79, 70, 229)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const enrollmentOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 9000,
      },
    },
  };

  // Mock data for faculty distribution
  const facultyData = {
    labels: ['Engineering', 'Science', 'Arts', 'Business', 'Social Sciences', 'Medicine'],
    datasets: [
      {
        label: 'Faculty Members',
        data: [85, 72, 64, 58, 42, 27],
        backgroundColor: [
          'rgba(79, 70, 229, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(168, 85, 247, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Mock data for course distribution
  const courseData = {
    labels: ['100 Level', '200 Level', '300 Level', '400 Level', '500 Level'],
    datasets: [
      {
        label: 'Courses',
        data: [52, 68, 74, 45, 17],
        backgroundColor: 'rgba(79, 70, 229, 0.8)',
        borderColor: 'rgb(79, 70, 229)',
        borderWidth: 1,
      },
    ],
  };

  const courseOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Mock data for attendance rates
  const attendanceData = {
    labels: ['Engineering', 'Science', 'Arts', 'Business', 'Social Sciences'],
    datasets: [
      {
        label: 'Attendance Rate (%)',
        data: [89, 87, 85, 84, 83],
        backgroundColor: 'rgba(79, 70, 229, 0.7)',
        borderColor: 'rgb(79, 70, 229)',
        borderWidth: 1,
      },
    ],
  };

  // Mock data for performance metrics
  const performanceMetrics = [
    { name: 'Overall Graduation Rate', value: '92%', trend: '+2.5%', positive: true },
    { name: 'Average GPA', value: '3.4', trend: '+0.1', positive: true },
    { name: 'Course Completion Rate', value: '94%', trend: '+1.2%', positive: true },
    { name: 'Student Retention', value: '88%', trend: '-0.8%', positive: false },
  ];

  // Mock data for reports
  const reports = [
    { id: 1, name: 'Enrollment Statistics Report', date: 'June 15, 2023', size: '2.4 MB' },
    { id: 2, name: 'Academic Performance Analysis', date: 'May 28, 2023', size: '3.1 MB' },
    { id: 3, name: 'Faculty Workload Report', date: 'May 10, 2023', size: '1.8 MB' },
    { id: 4, name: 'Attendance Compliance Report', date: 'April 22, 2023', size: '2.2 MB' },
    { id: 5, name: 'Financial Overview Report', date: 'April 05, 2023', size: '4.5 MB' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">Analytics & Reports</h1>
          <p className="text-indigo-700">University performance metrics and data insights</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="rounded-md border border-indigo-200 px-3 py-1.5 text-sm text-indigo-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
            <option>Current Semester</option>
            <option>Previous Semester</option>
            <option>Year 2023</option>
            <option>Year 2022</option>
            <option>Custom Range</option>
          </select>
          <button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">
            <ArrowDownTrayIcon className="mr-2 h-4 w-4" />
            Export Data
          </button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute right-0 top-0 h-16 w-16 opacity-10">
              <div className="absolute right-2 top-3 text-indigo-500">
                {index === 0 && <AcademicCapIcon className="h-10 w-10" />}
                {index === 1 && <ChartBarIcon className="h-10 w-10" />}
                {index === 2 && <ClipboardDocumentCheckIcon className="h-10 w-10" />}
                {index === 3 && <UserGroupIcon className="h-10 w-10" />}
              </div>
            </div>
            <h3 className="text-sm font-medium text-indigo-600">{metric.name}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-3xl font-bold text-indigo-900">{metric.value}</p>
              <p className={`ml-2 text-sm font-medium ${
                metric.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card title="Enrollment Trends" description="Student enrollment over the years">
          <div className="h-80 p-4">
            <Line data={enrollmentData} options={enrollmentOptions} />
          </div>
        </Card>

        <Card title="Faculty Distribution" description="Faculty members by department">
          <div className="h-80 p-4 flex items-center justify-center">
            <Doughnut data={facultyData} />
          </div>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card title="Course Distribution" description="Courses by academic level">
          <div className="h-80 p-4">
            <Bar data={courseData} options={courseOptions} />
          </div>
        </Card>

        <Card title="Attendance Rates" description="Average attendance by faculty">
          <div className="h-80 p-4">
            <Bar data={attendanceData} options={courseOptions} />
          </div>
        </Card>
      </div>

      <Card title="Available Reports" description="Download detailed analytical reports">
        <div className="mt-4 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-indigo-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-800">Report Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-800">Generated Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-800">Size</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                  <td className="px-4 py-3 text-sm font-medium text-indigo-800">{report.name}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{report.date}</td>
                  <td className="px-4 py-3 text-sm text-indigo-700">{report.size}</td>
                  <td className="px-4 py-3 text-sm">
                    <button className="inline-flex items-center rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-200">
                      <ArrowDownTrayIcon className="mr-1 h-3 w-3" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card title="Data Collection Methods" description="How the university gathers analytical data">
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                <ClipboardDocumentCheckIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-800">Attendance Tracking</h4>
                <p className="text-sm text-indigo-700">Electronic attendance systems in all classrooms with student ID scanning</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                <ChartBarIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-800">Performance Assessment</h4>
                <p className="text-sm text-indigo-700">Regular evaluations and examinations with standardized grading</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                <PresentationChartLineIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-800">Survey Feedback</h4>
                <p className="text-sm text-indigo-700">Periodic student and faculty surveys for qualitative insights</p>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Report Generation" description="How to create custom analytical reports">
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                <ArrowTrendingUpIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-800">1. Select Metrics</h4>
                <p className="text-sm text-indigo-700">Choose from over 50 KPIs to include in your custom report</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                <BuildingLibraryIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-800">2. Filter by Department</h4>
                <p className="text-sm text-indigo-700">Narrow down data to specific faculties, departments, or courses</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                <ArrowDownTrayIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-800">3. Export & Share</h4>
                <p className="text-sm text-indigo-700">Generate reports in PDF, Excel, or interactive dashboard format</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 