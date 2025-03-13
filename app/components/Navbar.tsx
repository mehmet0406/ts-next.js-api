'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowBack } from "react-icons/io5";

interface NavbarProps {
  title: string;
  detail: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ title, detail }) => {
  const router = useRouter();

  return (
    <div className='h-24 shadow-2xl flex items-center'>
      <div className='container mx-auto max-w-7xl flex items-center px-8'>
        {detail && (
          <button onClick={() => router.back()} className='cursor-pointer'>
            <span>
              <IoArrowBack size={35} />
            </span>
          </button>
        )}
        <h3 className='font-semibold text-2xl md:text-3xl text-center w-full'>{title}</h3>
      </div>
    </div>
  );
};

export default Navbar;
