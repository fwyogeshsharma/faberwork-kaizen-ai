
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, AlertCircle } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  progress: number;
  dueDate: string;
  teamSize: number;
  status: 'on-track' | 'at-risk' | 'delayed';
  tasksCompleted: number;
  totalTasks: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  progress,
  dueDate,
  teamSize,
  status,
  tasksCompleted,
  totalTasks
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'bg-green-100 text-green-800';
      case 'at-risk':
        return 'bg-yellow-100 text-yellow-800';
      case 'delayed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number, status: string) => {
    if (status === 'delayed') return 'bg-red-500';
    if (status === 'at-risk') return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">{name}</CardTitle>
          <Badge className={getStatusColor(status)}>
            {status === 'at-risk' && <AlertCircle className="w-3 h-3 mr-1" />}
            {status.replace('-', ' ')}
          </Badge>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>Due {dueDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{teamSize} members</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          {tasksCompleted} of {totalTasks} tasks completed
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
