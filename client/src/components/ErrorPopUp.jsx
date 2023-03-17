import React, { useEffect, useState } from 'react';


function ErrorPopUp({ setError }) {

    

    const handleClose = () => {
        setError(false);
    };

   
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <div className='ml-[255px] flex justify-center items-center fixed -mt-[13px] font-bold'>
                        <button onClick={handleClose} className="bg-red-600 my-1 px-[7px] text-[15px]  rounded-full text-white">x</button>
                    </div>
                    <p className='rounded-md bg-white px-9 h-[4.75rem] flex justify-center items-center'><span className='font-bold pr-2 '>Something</span> is not complete</p>
                </div>
            </div>
        </div>
    );
}

export default ErrorPopUp;