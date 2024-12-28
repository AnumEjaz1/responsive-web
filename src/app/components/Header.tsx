// src/components/Header.tsx
import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className="bg-white shadow sticky justify-between top-0 z-50 w-full">
     <div className="bg-gray-100 flex flex-wrap items-center justify-between space-x-4 px-12 py-8 rounded-md">
        {/* Left Section */}
        <div className="text-2xl font-bold text-blue-600">
          MORENT
        </div>

        {/* Center Section */}
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full max-w-md">
          <Image 
            src="/images/search1.png" 
            alt="Search Icon" 
            width={24} 
            height={24} 
            className="mr-2 object-contain" 
          />
          <input
            type="text"
            placeholder="Write something here"
            className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400"
            aria-label="Search"
          />
          <Image 
            src="/images/search2.png" 
            alt="Search Icon" 
            width={24} 
            height={24} 
            className="ml-2 object-contain" 
          />
        </div>

        {/* Right Section - Logos */}
        <div className='flex items-center space-x-4'>
          {['img header0.png', 'img header1.png', 'img header2.png', 'img header3.png'].map((src, index) => (
            <Image 
              key={index}
              src={`/images/${src}`} 
              alt={`Header Logo ${index + 1}`} 
              width={44} 
              height={44} 
              className="object-contain" 
            />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
