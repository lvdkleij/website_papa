'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header: React.FC = () => {
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
      <header className="h-28 bg-white fixed top-0 left-0 right-0 flex items-center w-full">
        <section className="flex-none w-32 p-3">Logo</section>
        <section className="flex justify-end p-3">
          <ul className="flex">
            <li>
              <Link href="/" className="py-3 px-5 text-lg inline-block">
                Home
              </Link>
            </li>
            <li onMouseEnter={() => displayServicesSection(300)} onMouseLeave={() => hideServicesSection()}>
              <button className="py-3 px-5 text-lg flex items-center" onClick={() => onClick()}>
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
        </section>
      </header>
      <div className="h-28"></div>
    </>
  );
};

export default Header;
