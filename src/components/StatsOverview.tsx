import React from 'react';
import { ProjectIdea } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, TrendingUp, Clock, Target } from 'lucide-react';

interface StatsOverviewProps {
  ideas: ProjectIdea[];
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ ideas }) => {
  const totalIdeas = ideas.length;
  const highPriorityCount = ideas.filter(idea => idea.priority === 'high').length;
  const tagsCount = new Set(ideas.flatMap(idea => idea.tags)).size;
  const recentIdeas = ideas.filter(idea => {
    const ideaDate = new Date(idea.dateCreated);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return ideaDate > weekAgo;
  }).length;

  const stats = [
    {
      title: 'Total Ideas',
      value: totalIdeas,
      icon: Lightbulb,
      description: 'Project ideas tracked',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'High Priority',
      value: highPriorityCount,
      icon: Target,
      description: 'Ideas needing attention',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Tags',
      value: tagsCount,
      icon: TrendingUp,
      description: 'Unique tags used',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'This Week',
      value: recentIdeas,
      icon: Clock,
      description: 'New ideas added',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <Card key={stat.title} className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <IconComponent className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};