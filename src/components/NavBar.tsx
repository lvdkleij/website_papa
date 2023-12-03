'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import NavItem from './NavItem';
import NavItemWithDropdown from './NavItemWithDropdown';

export const NavBar: React.FC = () => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <>
      <button onClick={() => setDisplayNav(!displayNav)} className="sm:hidden px-3">
        <Image src="/menu.svg" alt="Bekijk services" width={24} height={24}></Image>
      </button>

      <nav
        className={`${
          displayNav ? 'block' : 'hidden'
        } sm:block max-sm:absolute max-sm:top-full max-sm:left-0 max-sm:w-full max-sm:z-10 max-sm:bg-white`}
      >
        <ul className="flex max-sm:flex-col">
          <li>
            <NavItem text="Home" uri="/" />
          </li>
          <li>
            <NavItemWithDropdown text="Diensten" />
          </li>
          <li>
            <NavItem text="Over mij" uri="/over-mij" />
          </li>
          <li>
            <NavItem text="Contact" uri="/contact" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
