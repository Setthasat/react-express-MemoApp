import React from 'react';
import AmongUs from '../../public/amonguss.jpeg';

function Home() {
  return (
    <div className='flex justify-center items-center mt-[10%]'>
      <img src={AmongUs} className=' rounded-full shadow-3xl shadow-white' />
    </div>
  );
}

export default Home;