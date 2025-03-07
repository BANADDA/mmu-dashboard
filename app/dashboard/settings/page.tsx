"use client";

import { Card } from '@/components/ui/Card';
import {
    BellIcon,
    Cog6ToothIcon,
    DocumentTextIcon,
    PaintBrushIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function SettingsPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('general');

  // Tabs for settings
  const tabs = [
    { id: 'general', name: 'General', icon: <Cog6ToothIcon className="h-5 w-5" /> },
    { id: 'appearance', name: 'Appearance', icon: <PaintBrushIcon className="h-5 w-5" /> },
    { id: 'notifications', name: 'Notifications', icon: <BellIcon className="h-5 w-5" /> },
    { id: 'security', name: 'Security', icon: <ShieldCheckIcon className="h-5 w-5" /> },
    { id: 'academic', name: 'Academic', icon: <DocumentTextIcon className="h-5 w-5" /> },
  ];

  // Options for various settings
  const languages = ['English', 'French', 'Spanish', 'Arabic', 'Chinese'];
  const timezones = ['UTC', 'UTC+1:00', 'UTC+2:00', 'UTC+3:00', 'UTC+4:00', 'UTC+5:00', 'UTC-5:00', 'UTC-8:00'];
  const dateFormats = ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD', 'DD-MMM-YYYY'];
  const themes = ['Light', 'Dark', 'System Default'];
  const academicYears = ['2023-2024', '2024-2025', '2025-2026'];
  const semesters = ['First Semester', 'Second Semester', 'Summer'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <Card title="System Settings" description="Basic configuration options">
              <div className="mt-4 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">Time Zone</label>
                    <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                      {timezones.map((timezone, index) => (
                        <option key={index}>{timezone}</option>
                      ))}
                    </select>
                    <p className="mt-1 text-xs text-indigo-500">Affects all date and time displays</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">Date Format</label>
                    <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                      {dateFormats.map((format, index) => (
                        <option key={index}>{format}</option>
                      ))}
                    </select>
                    <p className="mt-1 text-xs text-indigo-500">Used throughout the system</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-indigo-700 mb-1">Language</label>
                  <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                    {languages.map((language, index) => (
                      <option key={index}>{language}</option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-indigo-500">Interface language for all users</p>
                </div>

                <div className="pt-4 border-t border-indigo-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-indigo-800">System Maintenance Mode</h4>
                      <p className="text-xs text-indigo-600">Enable during scheduled maintenance</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="Contact Information" description="University contact details">
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-indigo-700 mb-1">University Name</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="Enter university name"
                    defaultValue="Modern Metropolitan University"
                  />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      placeholder="Enter email address"
                      defaultValue="info@university.edu"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      placeholder="Enter phone number"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-indigo-700 mb-1">Address</label>
                  <textarea
                    className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="Enter university address"
                    rows={3}
                    defaultValue="123 University Avenue, Academic City, State 12345"
                  />
                </div>
              </div>
            </Card>
          </div>
        );
        
      case 'appearance':
        return (
          <div className="space-y-6">
            <Card title="Theme Settings" description="Customize the dashboard appearance">
              <div className="mt-4 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-indigo-700 mb-1">Theme Mode</label>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    {themes.map((theme, index) => (
                      <div
                        key={index}
                        className={`border rounded-md p-4 text-center cursor-pointer ${
                          index === 0 ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        <span className="text-sm font-medium text-indigo-800">{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-indigo-100">
                  <label className="block text-sm font-medium text-indigo-700 mb-1">Primary Color</label>
                  <div className="grid grid-cols-6 gap-2 mt-2">
                    {['#4f46e5', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'].map((color, index) => (
                      <div
                        key={index}
                        className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
                          index === 0 ? 'border-gray-400' : 'border-transparent'
                        }`}
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-indigo-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-indigo-800">Compact Mode</h4>
                      <p className="text-xs text-indigo-600">Reduce spacing and show more content</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );
      
      case 'notifications':
        return (
          <Card title="Notification Preferences" description="Manage system notifications">
            <div className="mt-4 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-indigo-800">Email Notifications</h4>
                  <p className="text-xs text-indigo-600">Receive system alerts via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              
              <div className="pt-4 border-t border-indigo-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-indigo-800">Browser Notifications</h4>
                    <p className="text-xs text-indigo-600">Show alerts in browser</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
              
              <div className="pt-4 border-t border-indigo-100">
                <h4 className="text-sm font-medium text-indigo-800 mb-4">Notification Types</h4>
                
                <div className="space-y-4">
                  {[
                    'New student registrations',
                    'Course schedule changes',
                    'Attendance updates',
                    'Grade submissions',
                    'System maintenance alerts',
                    'Security alerts',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-indigo-700">{item}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={index < 4} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        );
        
      case 'security':
        return (
          <div className="space-y-6">
            <Card title="Password Policy" description="Configure password requirements">
              <div className="mt-4 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">Minimum Password Length</label>
                    <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                      {[8, 10, 12, 14, 16].map((length) => (
                        <option key={length}>{length} characters</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">Password Expiry</label>
                    <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                      {['30 days', '60 days', '90 days', '180 days', 'Never'].map((period, index) => (
                        <option key={index}>{period}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-indigo-100">
                  <div className="flex items-center">
                    <input
                      id="require-uppercase"
                      type="checkbox"
                      checked
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="require-uppercase" className="ml-2 block text-sm text-indigo-700">
                      Require at least one uppercase letter
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="require-number"
                      type="checkbox"
                      checked
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="require-number" className="ml-2 block text-sm text-indigo-700">
                      Require at least one number
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="require-special"
                      type="checkbox"
                      checked
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="require-special" className="ml-2 block text-sm text-indigo-700">
                      Require at least one special character
                    </label>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card title="Two-Factor Authentication" description="Enhanced security settings">
              <div className="mt-4 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-indigo-800">Require 2FA for all users</h4>
                    <p className="text-xs text-indigo-600">All users must set up two-factor authentication</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                
                <div className="pt-4 border-t border-indigo-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-indigo-800">Session Timeout</h4>
                      <p className="text-xs text-indigo-600">Logout inactive users after</p>
                    </div>
                    <select className="w-40 rounded-md border border-indigo-200 px-3 py-1.5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                      {['15 minutes', '30 minutes', '1 hour', '2 hours', '4 hours'].map((time, index) => (
                        <option key={index}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );
        
      case 'academic':
        return (
          <div className="space-y-6">
            <Card title="Academic Calendar" description="Configure academic year settings">
              <div className="mt-4 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-indigo-700 mb-1">Current Academic Year</label>
                  <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                    {academicYears.map((year, index) => (
                      <option key={index}>{year}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-indigo-700 mb-1">Current Semester</label>
                  <select className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                    {semesters.map((semester, index) => (
                      <option key={index}>{semester}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">Semester Start Date</label>
                    <input
                      type="date"
                      className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      defaultValue="2023-09-01"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">Semester End Date</label>
                    <input
                      type="date"
                      className="w-full rounded-md border border-indigo-200 px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      defaultValue="2023-12-15"
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-indigo-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-indigo-800">Lock Past Semester Data</h4>
                      <p className="text-xs text-indigo-600">Prevent editing of data from previous semesters</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-indigo-900">Settings</h1>
        <p className="text-indigo-700">Configure your university management system</p>
      </div>

      <div className="flex overflow-x-auto border-b border-indigo-200 pb-px space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center whitespace-nowrap pb-4 pt-2 text-sm font-medium ${
              activeTab === tab.id
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-indigo-500 hover:border-b-2 hover:border-indigo-300 hover:text-indigo-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {renderTabContent()}
      </div>

      <div className="flex justify-end space-x-4 pt-4 border-t border-indigo-200">
        <button className="rounded-md border border-indigo-300 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50">
          Cancel
        </button>
        <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          Save Changes
        </button>
      </div>
    </div>
  );
} 