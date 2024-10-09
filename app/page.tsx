"use client";

import Hero from "@/components/Hero";
import Entities from "@/components/Entities";
import MapMain from "@/components/MapMain";
import Grid from "@/components/Grid";
import Donation from "@/components/Donation";

import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
{ /*
import RecentProjects from "@/components/RecentProjects"; 
import Experience from "@/components/Experience"; 


*/}
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNavbar";



const Home = () => {
  return (
    <main className="relative dark:bg-white-100
         bg-white  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <Grid />
        { /* 
        <RecentProjects />
        <Experience />
         */}
         <Donation />
         <Entities />
         <div className="w-full">
         <MapMain />
         </div>
         <Approach />
         <Testimonials />
         <Footer />
        { /*  
         <Clients />
        */}
      </div>
    </main>
  );
}; 

export default Home;
