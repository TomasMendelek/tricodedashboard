"use client";

import { UserButton } from '@clerk/nextjs';
import { useState } from 'react';
import Link from 'next/link';
import { Home, Clipboard, Calendar, Users, Menu } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className={`bg-gray-900 text-white h-screen p-4 transform ${isOpen ? "w-64" : "w-16"} transition-width duration-300 ease-in-out flex flex-col justify-between`}>
        <div>
          <div className="flex flex-row-reverse items-center justify-between w-full">
            <button onClick={toggleSidebar} className="focus:outline-none">
              <Menu size={isOpen ? 28 : 24} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            <div className={`ml-2 text-xl font-bold transition-opacity duration-200 ${isOpen ? "opacity-100 delay-100" : "opacity-0"}`}>
              Tricode
            </div>
          </div>
          <nav className={`flex flex-col gap-3 ${isOpen ? "space-y-5 mt-8" : "space-y-4 mt-10"} w-full`}>
            <Link href="/" className={`flex items-center ${isOpen ? "flex-row space-x-3" : "flex-col"} w-full`}>
              <Home size={isOpen ? 28 : 24} />
              <span className={`transition-all duration-200  ${isOpen ? "text-base ml-3 opacity-100 delay-100" : "mt-1 text-[12px] text-center text-gray-300"}`}>Home</span>
            </Link>
            <Link href="/kanban" className={`flex items-center ${isOpen ? "flex-row space-x-3" : "flex-col"} w-full`}>
              <Clipboard size={isOpen ? 28 : 24} />
              <span className={`transition-all duration-200 ${isOpen ? "text-base ml-3 opacity-100 delay-100" : "mt-1 text-[12px] text-center text-gray-300"}`}>Tablero</span>
            </Link>
            <Link href="/calendario" className={`flex items-center ${isOpen ? "flex-row space-x-3" : "flex-col"} w-full`}>
              <Calendar size={isOpen ? 28 : 24} />
              <span className={`transition-all duration-200 ${isOpen ? "text-base ml-3 opacity-100 delay-100" : "mt-1 text-[12px] text-center text-gray-300"}`}>Eventos</span>
            </Link>
            <Link href="/clientes" className={`flex items-center ${isOpen ? "flex-row space-x-3" : "flex-col"} w-full`}>
              <Users size={isOpen ? 28 : 24} />
              <span className={`transition-all duration-200 ${isOpen ? "text-base ml-3 opacity-100 delay-100" : "mt-1 text-[12px] text-center text-gray-300"}`}>Clientes</span>
            </Link>
          </nav>
        </div>
        <div className={`flex text-3xl ${isOpen ? "" : "items-center justify-center mt-auto"}`}>
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Nav;
