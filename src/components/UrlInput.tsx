
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Syringe } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const UrlInput = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleIngest = async () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Mock API call - in a real app, this would call your FastAPI endpoint
      console.log("Ingesting URL:", url);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Success",
        description: "URL has been ingested successfully",
      });
      setUrl('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to ingest URL",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="glass-card animate-fade-in">
      <div className="flex justify-center -mt-8 mb-2">
        <div className="bg-gradient-to-r from-vibrant-blue to-vibrant-purple p-3 rounded-full shadow-lg">
          <Syringe size={24} className="text-white" />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-2">
          <Globe size={20} className="text-vibrant-blue" />
          Ingest URL
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-background/60 border-white/10"
          />
          <Button 
            onClick={handleIngest} 
            disabled={isLoading}
            className="bg-gradient-to-r from-vibrant-blue to-vibrant-purple hover:opacity-90 text-white"
          >
            {isLoading ? 'Ingesting...' : 'Ingest'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UrlInput;
