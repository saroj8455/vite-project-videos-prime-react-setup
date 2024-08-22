import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
export default function Header() {
  return (
    <header>
      <div className='bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-800'>
        <img
          src='https://blocks.primereact.org/demo/images/blocks/logos/bastion-300.svg'
          alt='bastion-300'
          height='30'
          className='mr-0 lg:mr-6'
        />
        <a className='p-ripple cursor-pointer block lg:hidden text-gray-400'>
          <i className='pi pi-bars text-4xl' />
        </a>
        {/* Menu */}
        <div className='align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none border-gray-800'>
          <ul className='list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row'>
            <li>
              <Link
                to='/'
                className='flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full'
              >
                <i className='pi pi-home mr-2' />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full'
              >
                <i className='pi pi-discord mr-2' />
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Menu */}
      </div>
      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
