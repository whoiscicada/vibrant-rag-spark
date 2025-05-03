
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

type QueryInputProps = {
  onQueryResult: (result: string) => void;
};

const QueryInput = ({ onQueryResult }: QueryInputProps) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleQuery = async () => {
    if (!query) {
      toast({
        title: "Error",
        description: "Please enter a question",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Mock API call - in a real app, this would call your FastAPI endpoint
      console.log("Querying:", query);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Sample response - in a real app, this would come from your API
      const mockResponse = `This is a sample response for the query: "${query}". In a real implementation, this would be the answer from the RAG system based on the ingested documents.`;
      
      onQueryResult(mockResponse);
      setQuery('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process query",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="glass-card animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search size={20} className="text-vibrant-pink" />
          Ask a Question
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Textarea
            placeholder="Enter your question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[100px] bg-background/60 border-white/10"
          />
          <Button 
            onClick={handleQuery} 
            disabled={isLoading}
            className="bg-gradient-to-r from-vibrant-pink to-vibrant-purple hover:opacity-90 text-white self-end"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QueryInput;
