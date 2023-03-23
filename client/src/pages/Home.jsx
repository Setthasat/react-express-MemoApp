import React from 'react';
import AmongUs from '../../public/amonguss.jpeg';

function Home() {
  return (
    <div className='flex justify-center items-center'>
      <img src={AmongUs} className=' mt-[14%] rounded-full shadow-3xl shadow-white' />
    </div>
  );
}

export default Home;