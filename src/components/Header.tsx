import Link from 'next/link';
import React from 'react';
import NavBar from './NavBar';

const Header: React.FC = () => {
  return (
    <>
      <header className="h-20 md:h-28 bg-white fixed top-0 left-0 right-0 flex items-center w-full justify-between">
        <Logo />
        <NavBar />
      </header>
      <div className="h-20 md:h-28"></div>
    </>
  );
};

const Logo: React.FC = () => {
  return (
    <section className="flex-none w-36 p-3">
      <Link href="/">Logo</Link>
    </section>
  );
};

export default Header;
