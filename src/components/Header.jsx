import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`flex justify-center items-center w-full bg-white`}>
        <div className="container">
          <div className="relative flex items-center justify-between -mx-4">
            <div className="max-w-full px-4 w-60">
              <div className="block w-full py-5 text-2xl">
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
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Home
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Payment
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      About
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Blog
                    </ListItem>
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

const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
  );
};
