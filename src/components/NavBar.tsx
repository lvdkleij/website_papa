'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import NavItem from './NavItem';
import NavItemWithDropdown from './NavItemWithDropdown';

export const NavBar: React.FC = () => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <>
      <button onClick={() => setDisplayNav(!displayNav)} className="md:hidden px-3">
        <Image src={`/${displayNav ? 'close' : 'menu'}.svg`} alt="Bekijk services" width={24} height={24}></Image>
      </button>

      <nav
        className={`${
          displayNav ? 'block' : 'hidden'
        } md:block max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:z-10 max-md:bg-white`}
      >
        <ul className="flex max-md:flex-col">
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
