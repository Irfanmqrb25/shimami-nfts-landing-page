import React from 'react';
import Logo from "../assets/Logo.svg";
import Profile from "../assets/Profile.svg"
import Button from './Button';


const Navbar = () => {
    return (
        <div className='flex flex-row items-center justify-between'>
            <div className='flex items-center'>
                <img src={Logo} alt="Logo" width={53} height={53} />
                <h1 className='brand text-4xl text-white'>HIHAMI</h1>
            </div>
            <div>
                <div className='bg-list p-3 rounded'>
                    <ul className='flex flex-row space-x-7 text-white'>
                        <li className='text-sm nav-list cursor-pointer'>EXPLORE</li>
                        <li className='text-sm nav-list cursor-pointer'>TRENDING NFTs</li>
                        <li className='text-sm nav-list cursor-pointer'>AUTIONED NFTs</li>
                        <li className='text-sm nav-list cursor-pointer'>INFLUENCERS</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-row space-x-7'>
                <Button text={"Connect Wallet"} title={"connect"} />
                <div>
                    <img src={Profile} alt="Profile" className='rounded-full' width={40} height={40} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
