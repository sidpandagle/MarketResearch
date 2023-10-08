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
              <div className=" w-full py-5 text-2xl">
                Congruence
              </div>
            </div>
            <div className="flex items-center justify-end w-full px-4">
              <div>
                <button
                  // @click="navbarOpen = !navbarOpen"
                  onClick={() => setOpen(!open)}
                  // :className="navbarOpen && 'navbarTogglerActive' "
                  id="navbarToggler"
                  className={` ${open && "navbarTogglerActive"
                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                </button>
                <nav
                  // :className="!navbarOpen && 'hidden' "
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"
                    } `}
                >
                  <ul className="block lg:flex">
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' to="/">Home</Link>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' to="/category">Category</Link>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' to="/press-release">Press Release</Link>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' to="/offering">Offering</Link>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' to="/contact">Contact</Link>
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' to="/about">About</Link>
                    {/* <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' to="/">Home</Link> */}
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
