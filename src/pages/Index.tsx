
import React, { useState } from 'react';
import Header from '@/components/Header';
import UrlInput from '@/components/UrlInput';
import QueryInput from '@/components/QueryInput';
import ResponseDisplay from '@/components/ResponseDisplay';
import BackgroundEffects from '@/components/BackgroundEffects';

const Index = () => {
  const [queryResponse, setQueryResponse] = useState<string | null>(null);

  return (
    <>
      <BackgroundEffects />
      
      <div className="min-h-screen w-full py-8 px-4 max-w-5xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <UrlInput />
            <QueryInput onQueryResult={setQueryResponse} />
          </div>
          
          <div>
            <ResponseDisplay response={queryResponse} />
          </div>
        </div>
        
        <footer className="mt-12 text-center text-sm text-white/50">
          <p>RAG System Interface • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
};

export default Index;
