
import React from 'react';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Smooth gradient background similar to the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-800 to-orange-600"></div>
      
      {/* Light glow in the center */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/50 opacity-60"></div>
      
      {/* Animated colorful glow circles */}
      <div className="absolute top-[20%] left-[25%] w-[45rem] h-[45rem] rounded-full bg-blue-500/20 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] right-[15%] w-[40rem] h-[40rem] rounded-full bg-purple-500/30 blur-[120px] animate-pulse-slow [animation-delay:1s]"></div>
      <div className="absolute bottom-[30%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-pink-500/20 blur-[100px] animate-pulse-slow [animation-delay:1.5s]"></div>
      <div className="absolute top-[5%] right-[20%] w-[30rem] h-[30rem] rounded-full bg-orange-400/20 blur-[100px] animate-pulse-slow [animation-delay:2s]"></div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-[radial-gradient(white,_transparent_1px)] bg-[length:25px_25px] opacity-[0.02]"></div>
    </div>
  );
};

export default BackgroundEffects;
