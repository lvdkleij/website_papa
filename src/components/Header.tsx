'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Header: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <>
      <header className="h-28 bg-white fixed top-0 left-0 right-0 flex items-center w-full justify-between">
        <section className="flex-none w-36 p-3">
          <Link href="/">Home</Link>
        </section>
        <section className="flex p-3">{isTabletOrMobile ? <SmallScreenHeader /> : <LargeScreenHeader />}</section>
      </header>
      <div className="h-28"></div>
    </>
  );
};

const SmallScreenHeader: React.FC = () => {
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
      {displayNav && <SmallScreenNav />}
    </>
  );
};

const SmallScreenNav: React.FC = () => {
  return (
    <nav className="absolute top-full left-0 w-full z-10 bg-white">
      <ul className="flex flex-col">
        <li>
          <Link href="/" className="py-3 px-5 text-base w-full inline-block">
            Home
          </Link>
        </li>
        <li>
          <Services2 />
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

const LargeScreenHeader: React.FC = () => {
  return (
    <ul className="flex">
      <li>
        <Link href="/" className="py-3 px-5 text-lg inline-block">
          Home
        </Link>
      </li>
      <li>
        <Services />
      </li>
      <li>
        <Link href="/over-mij" className="py-3 px-5 text-lg inline-block">
          Over mij
        </Link>
      </li>
      <li>
        <Link href="/contact" className="py-3 px-5 text-lg inline-block">
          Contact
        </Link>
      </li>
    </ul>
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

const Services: React.FC = () => {
  const [displayServices, setDisplayServices] = useState(false);
  const [displayServicesTimeout, setDisplayServicesTimeout] = useState<NodeJS.Timeout | null>(null);

  function displayServicesSection(delay: number) {
    if (displayServicesTimeout) {
      clearTimeout(displayServicesTimeout);
    }
    const timeout = setTimeout(() => setDisplayServices(true), delay);
    setDisplayServicesTimeout(timeout);
  }
  function hideServicesSection() {
    if (displayServicesTimeout) {
      clearTimeout(displayServicesTimeout);
    }
    setDisplayServicesTimeout(null);
    setDisplayServices(false);
  }

  function onClick() {
    displayServicesSection(0);
  }

  return (
    <>
      <button
        className="py-3 px-5 text-lg flex items-center"
        onClick={() => onClick()}
        onMouseEnter={() => displayServicesSection(300)}
        onMouseLeave={() => hideServicesSection()}
      >
        Services
        <Image className="ml-2" src="/expand_more.svg" alt="Bekijk services" width={12} height={12}></Image>
      </button>
      {displayServices && (
        <section className="absolute bg-white">
          <ul>
            <li>
              <Link href="/financieel-beheer" className="w-full py-3 px-5 text-base inline-block ">
                Financieel beheer
              </Link>
            </li>
            <li>
              <Link href="/operationeel-management" className="w-full py-3 px-5 text-base inline-block">
                Operationeel management
              </Link>
            </li>
            <li>
              <Link href="/excel-training" className="w-full py-3 px-5 text-base inline-block">
                Excel training
              </Link>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};
export default Header;
