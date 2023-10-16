import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { categories } from "./Search";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  function redirectToCategory() {
    setCategoryOpen(!isCategoryOpen);
    setMenuOpen(false);
  }

  return (
    <>
      <header className='w-full bg-white border-b border-slate-200'>
        <div className="relative flex items-center justify-between mx-4">
          <div className="max-w-full px-4 w-60">
            <div className="w-full py-5 text-2xl ">
              Congruence
            </div>
          </div>
          <div className="flex items-center justify-end w-full px-4">
            <div>
              <button
                onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }}
                id="navbarToggler"
                className={` ${isMenuOpen && "navbarTogglerActive"
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
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none z-20 ${!isMenuOpen && "hidden"
                  } `}
              >
                <div className="block lg:flex">
                  <div className="relative">
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} to="/">Home</Link>
                  </div>
                  <div className="relative">
                    <Link className='flex items-center gap-2 py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => setCategoryOpen(!isCategoryOpen)}>
                      <div>Category</div>
                      {isCategoryOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 15l6 -6l6 6" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 9l6 6l6 -6" />
                        </svg>
                      }
                    </Link>
                    <div className={`absolute z-20 bg-white py-6 px-10  shadow-2xl rounded-md top-full right-0 text-sm w-[300px] md:w-[550px] ${!isCategoryOpen && "hidden"
                      }`}>
                      <div className="grid grid-cols-1 gap-x-2 gap-y-0 md:grid-cols-2">
                        {categories.map((res, index) => {
                          return (
                            <Link key={index} onClick={() => redirectToCategory()} to={`/category/${res}`}>
                              <div className="mb-3 cursor-pointer hover:font-bold">
                                {res}
                              </div>
                            </Link>)
                        })}
                      </div>
                    </div >
                  </div >
                  {/* <div className="relative">
                      <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => setOpen(!open)} to="/press-release">Press Release</Link>
                    </div>
                    <div className="relative">
                      <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => setOpen(!open)} to="/offering">Offering</Link>
                    </div> */}
                  < div className="relative" >
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} to="/contact">Contact</Link>
                  </ div>
                  <div className="relative">
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} to="/about">About</Link>
                  </div>
                </div >
              </nav >
            </div >
          </div >
        </div >
        {/* <div>
        </div > */}
      </header >
    </>
  );
};

export default Navbar;
