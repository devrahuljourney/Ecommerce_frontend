import React from 'react';
import Typewriter from 'typewriter-effect';
import SearchFilter from './SearchFilter';

// Import the image correctly
const background = require('../../assets/background.png');

export default function SearchFilterAndCategoryList() {
  return (
    <div 
      className="relative w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${background})` }} 
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Typewriter text */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
        <div className="whitespace-nowrap flex flex-col justify-center items-center ">
          <p className="text-[25px] md:text-[36px] text-white font-bold inline-flex items-center">
            Your one stop shop for&nbsp;
            <span className="text-green">
              <Typewriter
                options={{
                  strings: [
                    'Sports', 
                    'Grocery', 
                    'Clothes', 
                    'Agriculture', 
                     
                    'Electronics', 
                    'Furniture', 
                    'Home Decor',
                    'Fashion',
                    'Health & Beauty'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <p className="text-[18px] md:text-[24px] text-white font-light">
            and beyond. We got you covered.
          </p>
        </div>
        <SearchFilter />
      </div>
    </div>
  );
}