
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Filter, Search } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Complete redesign of the customer shopping experience',
      progress: 75,
      dueDate: 'Dec 15',
      teamSize: 8,
      status: 'on-track' as const,
      tasksCompleted: 24,
      totalTasks: 32
    },
    {
      id: '2',
      name: 'Mobile App MVP',
      description: 'Cross-platform mobile application development',
      progress: 45,
      dueDate: 'Jan 20',
      teamSize: 5,
      status: 'at-risk' as const,
      tasksCompleted: 12,
      totalTasks: 28
    },
    {
      id: '3',
      name: 'Data Analytics Dashboard',
      description: 'Real-time analytics and reporting system',
      progress: 30,
      dueDate: 'Nov 30',
      teamSize: 4,
      status: 'delayed' as const,
      tasksCompleted: 8,
      totalTasks: 25
    },
    {
      id: '4',
      name: 'API Integration',
      description: 'Third-party service integrations and webhook setup',
      progress: 90,
      dueDate: 'Dec 1',
      teamSize: 3,
      status: 'on-track' as const,
      tasksCompleted: 18,
      totalTasks: 20
    }
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
            <p className="text-gray-600">Manage and track all your team's projects</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} onClick={() => handleProjectClick(project.id)}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
