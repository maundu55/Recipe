import React from 'react'
import { Menu } from 'lucide-react';
import Nav from './Nav'

const Header = () => {
  return (
    <header className='fixed top-0 z-50 w-full transition-all duration-300 ease-in-out'>
    <div className='container flex items-center justify-between py-4'>
    <a className='text-500 font-500' href="/">
    Zest
    </a>
    <Nav />

    <button className='z-50 text-white md:hidden'>
        <Menu/>
    </button>
    </div>
    </header>
  )
}

export default Header