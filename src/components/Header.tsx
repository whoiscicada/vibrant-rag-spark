
import React from 'react';
import { Brain, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center glass-card mb-6 rounded-lg border border-white/10">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full bg-white/5">
          <Brain size={28} className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-500 to-orange-400" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">RAG System</h1>
      </div>
      <Button 
        variant="outline" 
        className="border-white/10 hover:border-white/30 hover:bg-white/5 text-white flex items-center gap-2"
      >
        <RefreshCw size={16} className="mr-1" />
        Reset Index
      </Button>
    </header>
  );
};

export default Header;
