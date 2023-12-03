import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-700 px-5 pt-20 pb-12 flex flex-wrap gap-y-8 gap-x-4 justify-between">
      <BusinessInfo />
      <SevicesInfo />
      <GeneralInfo />
    </footer>
  );
};

const SevicesInfo: React.FC = () => {
  return (
    <section className="flex-auto min-w-[300px] text-white">
      <h2 className="mb-4 font-medium text-2xl">Diensten</h2>
      <ul className="text-lg">
        <li>
          <Link href="/financieel-beheer" className={`py-1 w-full inline-block`}>
            Financieel beheer
          </Link>
        </li>
        <li>
          <Link href="/operationeel-management" className={`py-1 w-full inline-block`}>
            Operationeel management
          </Link>
        </li>
        <li>
          <Link href="/excel-training" className={`py-1 w-full inline-block`}>
            Excel training
          </Link>
        </li>
      </ul>
    </section>
  );
};

const BusinessInfo: React.FC = () => {
  return (
    <section className="flex-auto min-w-[350px] text-white">
      <h2 className="mb-4 font-medium text-2xl">LOGO</h2>
      <ul className="text-lg">
        <li>Straatnaam 1</li>
        <li>Postcode Plaats</li>
        <li>Land</li>
        <br />
        <li>KVK-nummer: 1242151245</li>
        <li>BTW-identificatienummer: 5124124214 </li>
      </ul>
    </section>
  );
};

const GeneralInfo: React.FC = () => {
  return (
    <section className="text-white min-w-[300px] flex-auto">
      <h2 className="mb-4 font-medium text-2xl">Algemeen</h2>
      <ul className="text-lg">
        <li>
          <Link href="/over-mij" className={`py-1 w-full inline-block`}>
            Over mij
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`py-1 w-full inline-block`}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/excel-training" className={`py-1 w-full inline-block`}>
            Algemene voorwarden
          </Link>
        </li>
        <li>
          <Link href="/excel-training" className={`py-1 w-full inline-block`}>
            Privacy verklaring
          </Link>
        </li>
        <li>
          <Link href="/excel-training" className={`py-1 w-full inline-block`}>
            Cookie beleid
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
