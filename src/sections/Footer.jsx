import React from 'react';
import Logo from '../assets/Logo.svg';
import '../styles/Footer.css';
import ytIcon from '../assets/yt-icon.svg';
import twtIcon from '../assets/twitter-icon.svg';
import fbIcon from '../assets/fb-icon.svg';
import googleIcon from '../assets/google-icon.svg';

const Footer = () => {
    return (
        <footer className='bg-footer container flex px-28 py-4 justify-between items-start'>
            <div className='flex items-center'>
                <img src={Logo} alt="Logo" width={53} height={53} />
                <h1 className='brand text-4xl text-white'>HIHAMI</h1>
            </div>
            <div className='flex flex-col text-gray-400'>
                <p className='mb-5'>
                    Shihami is the world's leading NFTs<br /> marketplace where you can discover,<br /> sell and bid NFTs and get rich
                </p>
                <div className='flex space-x-7 mb-9'>
                    <img src={ytIcon} alt="" width={25} height={25} />
                    <img src={twtIcon} alt="" width={25} height={25} />
                    <img src={fbIcon} alt="" width={13} height={25} />
                    <img src={googleIcon} alt="" width={25} height={25} />
                </div>
                <p className='text-sm mb-1'>Slicing UI by @Irfanmqrb</p>
                <p className='text-sm'>UI by @Faizansayani in figma</p>
            </div>
            <div className='flex flex-col text-gray-400 space-y-4'>
                <p className='text-white font-bold text-xl'>About</p>
                <p className='text-sm'>About NFT</p>
                <p className='text-sm'>Live Auctions</p>
                <p className='text-sm'>NFT Blog</p>
                <p className='text-sm'>Activity</p>
            </div>
            <div className='flex flex-col text-gray-400 space-y-4'>
                <p className='text-white font-bold text-xl'>Support</p>
                <p className='text-sm'>Help & Support</p>
                <p className='text-sm'>Item Details</p>
                <p className='text-sm'>Author Profile</p>
                <p className='text-sm'>Collection</p>
            </div>
        </footer>
    );
}

export default Footer;
