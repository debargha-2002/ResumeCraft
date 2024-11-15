import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [dots, setDots] = useState('');

 
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length === 3) {
          return ''; // Reset after 3 dots
        }
        return prev + '.'; // Add one dot at a time
      });
    }, 500); // Update every 500ms (0.5 seconds)

    // Cleanup interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white flex flex-1 items-center justify-center font-semibold sm:text-2xl text-xs">
      Wait while we craft your resume   <span className="ml-1 w-4">{dots}</span>
    </div>
  );
};

export default Loading;
