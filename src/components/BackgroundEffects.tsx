
import React from 'react';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16161d]"></div>
      
      {/* Animated glow circles */}
      <div className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] rounded-full bg-vibrant-purple/20 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] right-[20%] w-[25rem] h-[25rem] rounded-full bg-vibrant-pink/20 blur-[100px] animate-pulse-slow [animation-delay:1s]"></div>
      <div className="absolute bottom-[40%] left-[30%] w-[20rem] h-[20rem] rounded-full bg-vibrant-blue/20 blur-[100px] animate-pulse-slow [animation-delay:2s]"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjUiIGQ9Ik01OSA1OUgxVjFoNTh2NTh6Ii8+PC9nPjwvc3ZnPg==')] opacity-[0.08]"></div>
    </div>
  );
};

export default BackgroundEffects;
