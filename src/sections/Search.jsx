import React from 'react';
import arrowButton from '../assets/arrowbutton.svg';
import '../styles/Search.css';

const Search = () => {
    return (
        <section className='bg-search flex flex-col justify-center items-center p-44 space-y-8'>
            <h1 className='text-white text-5xl tracking-wide'>Ready For Next NFT Drop?</h1>
            <div className='border border-[#F81DFB] p-1 space-x-5 rounded-lg'>
                <input type="text" placeholder='info@gmail.com' className='bg-transparent text-white p-3 w-[424px] focus:outline-none' />
                <button className='bg-[#F81DFB] py-4 px-1 rounded-lg'><img src={arrowButton} alt="" width={45} /></button>
            </div>
        </section>
    );
}

export default Search;
