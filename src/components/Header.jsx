import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import Nav from './Nav'

const Header = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu =()=>{
        setIsOpen(!isOpen);
    };


  return (
    <header className='fixed top-0 z-50 w-full transition-all duration-300 ease-in-out'>
    <div className='container flex items-center justify-between py-4'>
    <a className='text-500 font-500' href="/">
    Zest
    </a>
    <Nav />

    <button onClick={toggleMenu} className='z-50 text-black md:hidden'>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
       
    </button>
    </div>
    </header>
  )
}

export default Header