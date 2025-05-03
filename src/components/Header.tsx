
import React from 'react';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center glass-card mb-6 rounded-lg">
      <div className="flex items-center gap-2">
        <Brain size={28} className="text-vibrant-purple" />
        <h1 className="text-2xl font-bold text-gradient">RAG System</h1>
      </div>
      <Button variant="outline" className="border-vibrant-purple/50 hover:bg-vibrant-purple/10">
        Reset Index
      </Button>
    </header>
  );
};

export default Header;
