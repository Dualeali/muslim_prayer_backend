import React from 'react';
import { Moon } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Moon className="w-8 h-8 text-earth-600" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-earth-500 rounded-full animate-pulse"></div>
        </div>
        <h1 className="logo-text">Muslim Prayer Tracker</h1>
      </div>
    </div>
  );
};

export default Logo;