import React, { useState } from 'react';
import axios from 'axios';
import { AiFillCheckCircle } from 'react-icons/ai';


function Body({ data }) {

  console.log(data);

  const [isComplete, setIsComplete] = useState(data.isComplete);

  const changeIsComplete = async (event) => {
    event.preventDefault();
    const dataId = {
      _id: data._id
    };
    try {
      await axios.patch('http://localhost:8888/api/update/isComplete', dataId);
    } catch (err) {
      console.log(err);
      return;
    }
    setIsComplete((prev) => !prev);
    console.log(isComplete, data.isComplete);
    console.log(data);
    // window.location.reload();
  };


  const dateTime = () => {
    return <p className='-ml-[5rem]'>{data.date.slice(8, 11)} / {data.date.slice(5, 7)} / {data.date.slice(0, 4)}</p>;
  };

  return (
    <div className='bg-white/10 backdrop-blur-3xl h-[30rem] m-[3rem] w-[30rem] mx-auto rounded-2xl font-sans shadow-2xl border-[2px] border-white/40'>
      {/* HEADER (TITLE ZONE) */}
      <div className='text-white text-[1.5rem] flex justify-center items-center border-b-white/40  border-b-[1px]'>
        <div className='flex justify-between items-center mt-3 mb-1 gap-4'>
          <div className='flex justify-center items-center'>
            {/* {dateTime()} */}
            <p className='-ml-[5rem]'>{data.date}</p>
          </div>
          <div className='flex justify-center -mr-[13rem] items-center'>
            <button onClick={changeIsComplete} className='rounded-full border border-white/60 w-auto'>
              <AiFillCheckCircle color={data.isComplete === false ? 'red' : 'green'} />
            </button>
          </div>
        </div>
      </div>
      {/* BODY (DESCRIPTION ZONE)*/}
      <div className='h-[23rem] m-[2rem] border border-white/40 text-white p-4 rounded-2xl' >
        <div className='flex justify-center items-center'>
          <p className='flex justify-center items-center mb-2 px-16 py-1 text-[2rem] font-bold underline underline-offset-8'>{data.title}</p>
        </div>
        <div className='flex justify-start items-center '>
          <p className='h-[16.5rem] overflow-x-auto text-white/80'>{data.description}</p>

        </div>
      </div>
    </div>
  );
}

export default Body;