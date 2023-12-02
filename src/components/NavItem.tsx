import Link from 'next/link';
import React from 'react';

export const NavItem: React.FC<{ text: string; uri: string; fontSize?: 'lg' | 'base' }> = ({
  text,
  uri,
  fontSize = 'lg',
}) => {
  return (
    <Link href={uri} className={`py-3 px-5 text-${fontSize} inline-block`}>
      {text}
    </Link>
  );
};

export default NavItem;
