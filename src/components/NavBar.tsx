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

  return <>{isSmallScreen ? <SmallScreenNav /> : <LargeScreenNav />}</>;
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
        <li>{/* <Services2 /> */}</li>
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
          <NavItemWithDropdown text="Services" />
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

const Services2: React.FC = () => {
  const [displayServices, setDisplayServices] = useState(false);

  return (
    <>
      <button
        className="py-3 px-5 text-base w-full flex items-center"
        onClick={() => setDisplayServices(!displayServices)}
      >
        Services
        <Image className="ml-2" src="/expand_more.svg" alt="Bekijk services" width={12} height={12}></Image>
      </button>
      {displayServices && (
        <section className="bg-white">
          <ul>
            <li>
              <Link href="/financieel-beheer" className="w-full py-3 px-8 text-base inline-block ">
                Financieel beheer
              </Link>
            </li>
            <li>
              <Link href="/operationeel-management" className="w-full py-3 px-8 text-base inline-block">
                Operationeel management
              </Link>
            </li>
            <li>
              <Link href="/excel-training" className="w-full py-3 px-8 text-base inline-block">
                Excel training
              </Link>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default NavBar;
