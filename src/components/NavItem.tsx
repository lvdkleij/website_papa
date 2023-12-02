import Link from 'next/link';
import React from 'react';

export const NavItem: React.FC<{ text: string; uri: string }> = ({ text, uri }) => {
  return (
    <Link href={uri} className="py-3 px-5 text-lg inline-block">
      {text}
    </Link>
  );
};

export default NavItem;
