
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

type ResponseDisplayProps = {
  response: string | null;
};

const ResponseDisplay = ({ response }: ResponseDisplayProps) => {
  if (!response) return null;

  return (
    <Card className="glass-card mt-6 animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare size={20} className="text-vibrant-green" />
          Response
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-black/30 p-4 rounded-md border border-white/5">
          <p className="text-white/90 whitespace-pre-wrap">{response}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResponseDisplay;
