'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import NavItem from './NavItem';

export const NavItemWithDropdown: React.FC<{ text: string; position?: 'absolute' | '' }> = ({
  text,
  position = '',
}) => {
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
      <div onMouseEnter={() => displayServicesSection(300)} onMouseLeave={() => hideServicesSection()}>
        <button className="py-3 px-5 text-lg w-full flex items-center" onClick={() => onClick()}>
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
        {displayServices && (
          <section className={`bg-white ${position}`}>
            <ul>
              <li>
                <NavItem text="Financieel beheer" uri="/financieel-beheer" fontSize="base" />
              </li>
              <li>
                <NavItem text="Operationeel management" uri="/operationeel-management" fontSize="base" />
              </li>
              <li>
                <NavItem text="Excel training" uri="/excel-training" fontSize="base" />
              </li>
            </ul>
          </section>
        )}
      </div>
    </>
  );
};

export default NavItemWithDropdown;
