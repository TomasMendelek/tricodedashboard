"use client";

import { UserButton } from '@clerk/nextjs';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">Tricode</div>
      </div>
      <div>
        <UserButton />
      </div>
    </nav>
  );
};

export default Nav;
