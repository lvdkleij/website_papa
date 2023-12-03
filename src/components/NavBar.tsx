'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavItem from './NavItem';
import NavItemWithDropdown from './NavItemWithDropdown';
import { useMediaQuery } from 'react-responsive';

export const NavBar: React.FC = () => {
  const _isSmallScreen = useMediaQuery({ maxWidth: 650 });
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>();

  useEffect(() => setIsSmallScreen(_isSmallScreen), [_isSmallScreen]);

  return isSmallScreen === undefined ? <></> : isSmallScreen ? <SmallScreenNav /> : <LargeScreenNav />;
};

const SmallScreenNav: React.FC = () => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <>
      <ul>
        <li>
          <button onClick={() => setDisplayNav(!displayNav)}>
            <Image src="/menu.svg" alt="Bekijk services" width={24} height={24}></Image>
          </button>
        </li>
      </ul>
      {displayNav && <Ff />}
    </>
  );
};

const Ff: React.FC = () => {
  return (
    <nav className="absolute top-full left-0 w-full z-10 bg-white">
      <ul className="flex flex-col">
        <li>
          <Link href="/" className="py-3 px-5 text-base w-full inline-block">
            Home
          </Link>
        </li>
        <li>
          <NavItemWithDropdown text="Services" />
        </li>
        <li>
          <Link href="/over-mij" className="py-3 px-5 text-base w-full inline-block">
            Over mij
          </Link>
        </li>
        <li>
          <Link href="/contact" className="py-3 px-5 text-base w-full inline-block">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const LargeScreenNav: React.FC = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <NavItem text="Home" uri="/" />
        </li>
        <li>
          <NavItemWithDropdown text="Services" position="absolute" />
        </li>
        <li>
          <NavItem text="Over mij" uri="/over-mij" />
        </li>
        <li>
          <NavItem text="Contact" uri="/contact" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
