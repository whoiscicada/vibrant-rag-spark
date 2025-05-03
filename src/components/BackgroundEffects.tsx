
import React from 'react';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Rainbow gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      
      {/* Animated colorful glow circles */}
      <div className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] rounded-full bg-vibrant-purple/30 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] right-[20%] w-[25rem] h-[25rem] rounded-full bg-vibrant-pink/30 blur-[100px] animate-pulse-slow [animation-delay:1s]"></div>
      <div className="absolute bottom-[40%] left-[30%] w-[20rem] h-[20rem] rounded-full bg-vibrant-blue/30 blur-[100px] animate-pulse-slow [animation-delay:2s]"></div>
      <div className="absolute top-[30%] right-[10%] w-[22rem] h-[22rem] rounded-full bg-vibrant-orange/20 blur-[100px] animate-pulse-slow [animation-delay:1.5s]"></div>
      <div className="absolute bottom-[20%] left-[10%] w-[18rem] h-[18rem] rounded-full bg-vibrant-green/20 blur-[100px] animate-pulse-slow [animation-delay:2.5s]"></div>
      
      {/* Rainbow gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40 opacity-70"></div>
      
      {/* Grid overlay with reduced opacity */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjUiIGQ9Ik01OSA1OUgxVjFoNTh2NTh6Ii8+PC9nPjwvc3ZnPg==')] opacity-[0.05]"></div>
      
      {/* Optional: subtle light particles or stars effect */}
      <div className="absolute inset-0 bg-[radial-gradient(white,_transparent_1px)] bg-[length:20px_20px] opacity-[0.03]"></div>
    </div>
  );
};

export default BackgroundEffects;
