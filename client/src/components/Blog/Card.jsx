import React from 'react';
import SingleCard from './SingleCard';

function Card({ apiData }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-[3rem]'>
            {apiData.map((items, index) => (
                <div key={index}>
                    <SingleCard items={items} />
                </div>
            ))}
        </div>
    );
}

export default Card;