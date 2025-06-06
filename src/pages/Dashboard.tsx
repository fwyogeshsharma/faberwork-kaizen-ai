
import React from 'react';
import Navigation from '@/components/Navigation';
import AIInsightCard from '@/components/AIInsightCard';
import ProjectCard from '@/components/ProjectCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, CheckCircle, AlertTriangle, Plus } from 'lucide-react';

const Dashboard = () => {
  const insights = [
    {
      type: 'suggestion' as const,
      title: 'Optimize Sprint Scope',
      description: 'Based on team velocity, consider reducing the current sprint scope by 20% to improve delivery predictability.',
      confidence: 87
    },
    {
      type: 'warning' as const,
      title: 'Potential Blocker Detected',
      description: 'Task "API Integration" has been in progress for 5 days. Consider reassigning or breaking it down.',
      confidence: 92
    },
    {
      type: 'success' as const,
      title: 'Team Efficiency Improved',
      description: 'Your team\'s cycle time has decreased by 15% this week. Great progress on reducing handoff delays!',
      confidence: 95
    }
  ];

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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Good morning! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your projects today.</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Projects</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tasks This Week</p>
                  <p className="text-2xl font-bold text-gray-900">47</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">28</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">At Risk</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Insights */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">AI Insights</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <AIInsightCard key={index} {...insight} />
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Projects</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>

        {/* Kaizen Pulse */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Weekly Kaizen Pulse</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">+15%</p>
                <p className="text-sm text-gray-600">Cycle Time Improvement</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">8</p>
                <p className="text-sm text-gray-600">AI Suggestions Applied</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">2.5h</p>
                <p className="text-sm text-gray-600">Time Saved This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
