import React from 'react';
import { ClockLoader } from 'react-spinners';

function Navbar() {
  return (
  
      <div className='w-screen max-w-full h-[4rem] backdrop-blur-3xl fixed top-0 flex justify-between items-center'>
        <div className='sm:pl-6 pl-2 '>
          <div className='bg-white w-auto px-5 py-1 rounded-tl-3xl rounded-br-3xl'>
            <ClockLoader size={25} />
          </div>
        </div>
        <div className='pr-10 flex justify-center items-center gap-7 text-white font-sans'>
          <div>
            <a href='/'>Home</a>
          </div>
          <div>
            <a href='/forms'>Forms</a>
          </div>
          <div>
            <a href='/blog'>Blogs</a>
          </div>
        </div>
      </div>
  );
}

export default Navbar;