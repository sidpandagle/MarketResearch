import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className='flex items-center w-full bg-white'>
        <div className="container">
          <div className="relative flex items-center justify-between mx-4">
            <div className="max-w-full px-4 w-60">
              <div className="w-full py-5 text-2xl ">
                Congruence
              </div>
            </div>
            <div className="flex items-center justify-end w-full px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={` ${open && "navbarTogglerActive"
                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                  </svg>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none z-20 ${!open && "hidden"
                    } `}
                >
                  <ul className="block lg:flex">
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => setOpen(!open)} to="/">Home</Link>
                    {/* <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => setOpen(!open)} to="/category">Category</Link>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => setOpen(!open)} to="/press-release">Press Release</Link>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => setOpen(!open)} to="/offering">Offering</Link> */}
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => setOpen(!open)} to="/contact">Contact</Link>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => setOpen(!open)} to="/about">About</Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
