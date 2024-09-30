"use client";

import MainBackground from '../components/MainBackground';
import TableOfCost from '../components/TableOfCost';

import dynamic from "next/dynamic";

const ServiceGaranty = dynamic(() => import('../components/ServiceGaranty'));

const MainTarifs = dynamic(() => import('../components/MainTarifs'), { ssr: false });
// const TableOfCost = dynamic(() => import('../components/TableOfCost'), { ssr: false });
const CarrouselWork = dynamic(() => import('../components/CarrouselWork'), { ssr: false });

const Loyalty = dynamic(() => import('../components/Loyalty'));
const FormComponent = dynamic(() => import('../components/FormComponent'));
const Partners = dynamic(() => import('../components/Partners'), { ssr: false });

export default function Home() {



  return (
    <main>

      <MainBackground/>
    
      <ServiceGaranty />
    
      <MainTarifs />  
    
      <TableOfCost/>
    
      <CarrouselWork/>
    
      <Loyalty/>
    
      <FormComponent/>
    
      <Partners/>
    
    </main>
  );
}
