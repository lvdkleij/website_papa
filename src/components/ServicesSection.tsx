import Link from 'next/link';
import { title } from 'process';
import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white mt-20 mb-20 flex align-center justify-center">
      {/* <div className="w-full  mb-12">
        <h1 className="font-semibold text-center text-3xl">Diensten</h1>
      </div> */}
      <section className="flex max-md:flex-wrap justify-center gap-5 lg:max-w-screen-lg mx-8">
        <ServiceCard
          title="Financieel beheer"
          description="LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link={{ title: 'lflf', uri: '/financieel-beheer' }}
          bgColor="bg-orange-100"
        />
        <ServiceCard
          title="Operationeel management"
          description="LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link={{ title: 'lflf', uri: '/operationeel-management' }}
          bgColor="bg-lime-100"
        />
        <ServiceCard
          title="Excel training"
          description="LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link={{ title: 'lflf', uri: '/excel-training' }}
          bgColor="bg-blue-100"
        />
      </section>
    </section>
  );
};

const ServiceCard: React.FC<{
  title: string;
  description: string;
  link: { title: string; uri: string };
  bgColor: string;
}> = ({ title, description, link, bgColor }) => {
  return (
    <section className={`flex flex-col w-min-[20rem] p-8 md:w-2/6 ${bgColor}`}>
      <div className="h-24 mb-5">Image</div>
      <h2 className="text-center font-semibold text-2xl mb-5"> {title}</h2>
      <div className="flex-auto mb-5">
        <p className="text-center mb-3">{description}</p>
      </div>
      <Link href={link.uri} className="border-solid border-grey-200 inline-block text-center border-2 py-4 font-medium">
        Lees meer
      </Link>
    </section>
  );
};

export default ServicesSection;
