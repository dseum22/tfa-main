import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoDesktop from '../images/logo-desktop.png'
import logoMobile from '../images/logo-mobile.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        for (let element of document.getElementsByClassName('nav-item block')) {
            element.addEventListener('click', () => setIsOpen(false));
        }
    });
    return (
        <nav className='bg-primary-200 shadow-md fixed w-full z-30'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-20'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        <button type='button'
                            className='inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-yellow-200 focus:outline-none'
                            aria-controls='mobile-menu' aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                            <span className='sr-only'>Open main menu</span>
                            <svg className='h-9 w-9' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                            </svg>
                        </button>
                    </div>
                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-shrink-0 flex items-center'>
                            <Link to='/'>
                                <img className='hidden lg:block h-14 w-auto' src={logoDesktop} alt='Tutoring for All logo desktop'></img>
                                <img className='block lg:hidden h-14 w-auto' src={logoMobile} alt='Tutoring for All logo mobile'></img>
                            </Link>
                        </div>
                        <div className='hidden sm:block sm:ml-6 my-auto'>
                            <div className='flex space-x-4'>
                                <NavLink className='nav-item' exact to='/' activeClassName='active'>Home</NavLink>
                                <NavLink className='nav-item' to='/about' activeClassName='active'>About</NavLink>
                                <NavLink className='nav-item' to='/enroll' activeClassName='active'>Enroll</NavLink>
                                <NavLink className='nav-item' to='/volunteer' activeClassName='active'>Volunteer</NavLink>
                                <NavLink className='nav-item' to='/partner' activeClassName='active'>Partner</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        <Link className='text-lg uppercase px-4 py-3 bg-yellow-400 font-bold rounded-lg transition duration-500 ease-in-out transform hover:scale-110 tracking-wider' to='/donate'>Donate</Link>
                    </div>
                </div>
                <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                        <NavLink className='nav-item block' exact to='/' activeClassName='active'>Home</NavLink>
                        <NavLink className='nav-item block' to='/about' activeClassName='active'>About</NavLink>
                        <NavLink className='nav-item block' to='/enroll' activeClassName='active'>Enroll</NavLink>
                        <NavLink className='nav-item block' to='/volunteer' activeClassName='active'>Volunteer</NavLink>
                        <NavLink className='nav-item block' to='/partner' activeClassName='active'>Partner</NavLink>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar

