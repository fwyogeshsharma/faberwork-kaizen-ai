
import React from 'react';
import Navigation from '@/components/Navigation';
import AIInsightCard from '@/components/AIInsightCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, CheckCircle, Filter } from 'lucide-react';

const Improvements = () => {
  const improvements = [
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
      type: 'suggestion' as const,
      title: 'Reduce Context Switching',
      description: 'Team members are working on 3+ tasks simultaneously. Consider limiting work in progress to 2 items per person.',
      confidence: 78
    },
    {
      type: 'success' as const,
      title: 'Team Efficiency Improved',
      description: 'Your team\'s cycle time has decreased by 15% this week. Great progress on reducing handoff delays!',
      confidence: 95
    },
    {
      type: 'suggestion' as const,
      title: 'Daily Standup Optimization',
      description: 'Standups are averaging 25 minutes. Consider timeboxing to 15 minutes and using async updates for detailed discussions.',
      confidence: 85
    }
  ];

  const stats = [
    { label: 'Suggestions Applied', value: '23', icon: CheckCircle, color: 'text-green-600' },
    { label: 'Time Saved', value: '12.5h', icon: Clock, color: 'text-blue-600' },
    { label: 'Efficiency Gain', value: '+18%', icon: TrendingUp, color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Improvements</h1>
            <p className="text-gray-600">AI-powered suggestions for continuous improvement</p>
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter Suggestions
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Kaizen Pulse */}
        <Card className="mb-8">
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

        {/* AI Suggestions */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Suggestions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {improvements.map((improvement, index) => (
              <AIInsightCard key={index} {...improvement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Improvements;
