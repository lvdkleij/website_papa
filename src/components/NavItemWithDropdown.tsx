'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import NavItem from './NavItem';

export const NavItemWithDropdown: React.FC<{
  text: string;
}> = ({ text }) => {
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
    if (displayServices) {
      hideServicesSection();
    } else {
      displayServicesSection(0);
    }
  }
  const rotationStyle = {
    transform: displayServices ? 'rotate(-180deg)' : 'none',
    transition: 'transform 0.3s ease',
  };

  return (
    <>
      <div
        onMouseEnter={() => displayServicesSection(300)}
        onMouseLeave={hideServicesSection}
        aria-haspopup="menu"
        aria-expanded={displayServices}
      >
        <button className={`py-3 px-5 text-base sm:text-lg w-full flex items-center`} onClick={onClick}>
          {text}
          <Image
            className="ml-2"
            style={rotationStyle}
            src="/expand_more.svg"
            alt="Bekijk services"
            width={12}
            height={12}
          ></Image>
        </button>
        {displayServices && <DropdownMenu />}
      </div>
    </>
  );
};

const DropdownMenu = () => (
  <section className="bg-white sm:absolute">
    <ul>
      <li>
        <NavItem text="Financieel beheer" uri="/financieel-beheer" className="max-sm:px-8" />
      </li>
      <li>
        <NavItem text="Operationeel management" uri="/operationeel-management" className="max-sm:px-8" />
      </li>
      <li>
        <NavItem text="Excel training" uri="/excel-training" className="max-sm:px-8" />
      </li>
    </ul>
  </section>
);

export default NavItemWithDropdown;
