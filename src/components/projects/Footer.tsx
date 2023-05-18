import React from 'react';

interface IFooterProps {

}

const Footer = (props : IFooterProps) => {
    return (
    <>
        <div
            className='fixed bottom-[10%] left-3/4 z-10 block tracking-[2px] text-base text-white'
        >
            scroll
        </div>
    </>
    );
};

export default Footer;