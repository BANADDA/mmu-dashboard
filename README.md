# University Management Dashboard

A comprehensive administrative dashboard for university management system, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **User Authentication**: Role-based access control for Super Admins, Department Heads, and Lecturers
- **Dashboard Overview**: Quick stats, upcoming lectures, and recent activities
- **Department Management**: Create, edit, and view departments and faculties
- **Course Management**: Organize courses by department, faculty, level, and semester
- **Lecture Scheduling**: Calendar interface for scheduling lectures
- **Attendance Tracking**: Record and analyze student attendance
- **Student Management**: Student profiles and performance monitoring
- **Faculty Management**: Manage lecturers and their teaching loads
- **Analytics & Reporting**: Comprehensive reporting and data visualization

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Charts**: Chart.js with react-chartjs-2
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://your-repository-url/mmu-dashboard.git
   cd mmu-dashboard
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Project Structure

- `/app`: Next.js App Router pages and layouts
  - `/dashboard`: Dashboard pages and modules
  - `/auth`: Authentication related pages
  - `/api`: API routes
- `/components`: Reusable UI components
  - `/ui`: Basic UI components like Card, StatsCard, etc.
- `/lib`: Utility functions and API helpers
- `/types`: TypeScript type definitions

## Usage

1. Log in to the dashboard using the login form
2. Navigate through different modules using the sidebar
3. View and manage university data based on your role's permissions

## Deployment

This application can be easily deployed to platforms like Vercel:

```bash
npm run build
# or
yarn build
```

Follow the deployment instructions for your preferred hosting platform.

## License

[MIT](LICENSE)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 