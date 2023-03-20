import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

function SingleCard({ items }) {
    return (
        <div className='bg-black h-[30rem] m-[3rem] w-[40rem] mx-auto rounded-2xl font-sans shadow-2xl'>
            {/* HEADER (TITLE ZONE) */}
            <div className='text-white text-[1.5rem] flex justify-center items-center border-b-[1px]'>
                <div className='flex justify-between items-center mt-3 mb-1 gap-4'>
                    <div className='flex justify-center items-center'>
                        <p className=''>Title : <span className='pl-4'>{items.title}</span></p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='pl-4'><AiFillCheckCircle /></button>
                    </div>
                </div>
            </div>
            {/* BODY (DESCRIPTION ZONE)*/}
            <div className='h-[23rem] m-[2rem] border text-white p-4ß' >
                <p className='h-full overflow-ellipsis overflow-hidden'>{items.description}</p>
            </div>
        </div>
    );
}

export default SingleCard;