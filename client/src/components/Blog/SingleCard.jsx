import axios from 'axios';
import React, { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

function SingleCard({ items }) {

    const changeIsComplete = async (event) => {
        event.preventDefault();
        const data = {
            _id: items._id
        };
        try {
            await axios.patch('http://localhost:8888/api/update/isComplete', data);
        } catch (err) {
            console.log(err);
            return;
        }

        window.location.reload();
    };

    return (
        <div className='bg-white/10 backdrop-blur-3xl h-[30rem] m-[3rem] w-[30rem] mx-auto rounded-2xl font-sans shadow-2xl border-[2px] border-white/40'>
            {/* HEADER (TITLE ZONE) */}
            <div className='text-white text-[1.5rem] flex justify-center items-center border-b-white/40  border-b-[1px]'>
                <div className='flex justify-between items-center mt-3 mb-1 gap-4'>
                    <div className='flex justify-center items-center'>
                        <p className='-ml-[5rem]'>{items.date.slice(8, 11)} / {items.date.slice(5, 7)} / {items.date.slice(0, 4)}</p>
                    </div>
                    <div className='flex justify-center -mr-[13rem] items-center'>
                        <button onClick={changeIsComplete} className='rounded-full border border-white/60 w-auto'>
                            <AiFillCheckCircle color={items.isComplete === false ? 'red' : 'green'} />
                        </button>
                    </div>
                </div>
            </div>
            {/* BODY (DESCRIPTION ZONE)*/}
            <div className='h-[23rem] m-[2rem] border border-white/40 text-white p-4 rounded-2xl' >
                <div className='flex justify-center items-center'>
                    <p className='flex justify-center items-center mb-2 px-16 py-1 text-[2rem] font-bold underline underline-offset-8'>{items.title}</p>
                </div>
                <p className='h-[16.5rem] overflow-ellipsis overflow-hidden text-white/80'>{items.description}</p>
            </div>
        </div>
    );
}

export default SingleCard;