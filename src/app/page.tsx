import AboveTheFold from '@/components/AboveTheFold';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LetsWorkTogether from '@/components/LetsWorkTogether';
import References from '@/components/References';
import ServicesSection from '@/components/ServicesSection';
import WhoAmISection from '@/components/WhoAmISection';
import WorkWithMe from '@/components/WorkWithMe';

export default function Home() {
  return (
    <>
      <Header />
      <AboveTheFold />
      <WhoAmISection />
      <ServicesSection />
      <WorkWithMe />
      <References />
      <LetsWorkTogether />
      <Footer />
    </>
  );
}
