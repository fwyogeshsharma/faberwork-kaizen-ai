
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, AlertTriangle, CheckCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

interface AIInsightCardProps {
  type: 'suggestion' | 'warning' | 'success';
  title: string;
  description: string;
  confidence: number;
  onAction?: () => void;
  actionLabel?: string;
}

const AIInsightCard: React.FC<AIInsightCardProps> = ({
  type,
  title,
  description,
  confidence,
  onAction,
  actionLabel = 'Apply'
}) => {
  const getIcon = () => {
    switch (type) {
      case 'suggestion':
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'suggestion':
        return 'border-l-blue-500';
      case 'warning':
        return 'border-l-yellow-500';
      case 'success':
        return 'border-l-green-500';
    }
  };

  return (
    <Card className={`border-l-4 ${getBorderColor()}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-sm">
          {getIcon()}
          <span>{title}</span>
          <span className="ml-auto text-xs text-gray-500">{confidence}% confidence</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="w-3 h-3 mr-1" />
              Helpful
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsDown className="w-3 h-3 mr-1" />
              Not helpful
            </Button>
          </div>
          {onAction && (
            <Button size="sm" onClick={onAction}>
              {actionLabel}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightCard;
