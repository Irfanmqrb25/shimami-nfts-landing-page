import React from 'react';

const Button = ({ text, type, title }) => {
    return (
        <div className='flex flex-row'>
            <div className={`${title === "connect" ? "small-box1" : ""}
                            ${title === "explore" ? "small-box3" : ""}
                            ${title === "create" ? "small-box5" : ""}
                `}>
                <div className='small-box-inside1'></div>
            </div>
            <div className={`bg-button-nav py-2 px-5 flex my-auto cursor-pointer 
                            ${type === "secondary" && "secondary-button"}`}>
                <p className='text-white text-button-nav hover:text-zinc-200'>{text}</p>
            </div>
            <div className={`${title === "connect" ? "small-box2" : ""}
                            ${title === "explore" ? "small-box4" : ""}
                            ${title === "create" ? "small-box6" : ""}
                `}>
                <div className='small-box-inside2'></div>
            </div>
        </div>
    );
}

export default Button;
