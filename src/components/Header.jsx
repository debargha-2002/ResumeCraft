
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-[0_1px_10px_#00B5E2] text-white py-8 mb-3 ">
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
        {/* Website Name */}
        <div className="sm:text-4xl text-3xl font-bold mb-1">
          ResumeCraft
        </div>

        {/* Catchy Subheading */}
        <div className="sm:text-lg text-xs font-semibold text-richblack-200">
          Build your professional future with a stunning resume in minutes.
        </div>
      </div>
    </header>
  );
};

export default Header;
