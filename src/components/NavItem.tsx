import Link from 'next/link';
import React from 'react';

export const NavItem: React.FC<{
  text: string;
  uri: string;
  className?: string;
}> = ({ text, uri, className = '' }) => {
  return (
    <Link href={uri} className={`py-3 px-5 text-base sm:text-lg inline-block ${className}`}>
      {text}
    </Link>
  );
};

export default NavItem;
