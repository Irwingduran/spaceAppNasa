"use client";

import React from "react";

import { InfiniteMovingCards } from "./ui/InfiniteCards";


export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt dolorem incidunt repellendus alias qui eum distinctio blanditiis consequatur quia reprehenderit, nobis ad cumque natus adipisci dolore cum. Nesciunt, cupiditate!",
    name: "María Gónzalez",
    title: "Oaxaca, Mx",
    
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt dolorem incidunt repellendus alias qui eum distinctio blanditiis consequatur quia reprehenderit, nobis ad cumque natus adipisci dolore cum. Nesciunt, cupiditate!",
    name: "Juana Jímenez",
    title: "Guerrero, Mx",
    
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt dolorem incidunt repellendus alias qui eum distinctio blanditiis consequatur quia reprehenderit, nobis ad cumque natus adipisci dolore cum. Nesciunt, cupiditate!",
   name: "Juana Jímenez",
    title: "Guerrero, Mx",
    
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt dolorem incidunt repellendus alias qui eum distinctio blanditiis consequatur quia reprehenderit, nobis ad cumque natus adipisci dolore cum. Nesciunt, cupiditate!",
    name: "Juana Jímenez",
    title: "Guerrero, Mx",
  
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt dolorem incidunt repellendus alias qui eum distinctio blanditiis consequatur quia reprehenderit, nobis ad cumque natus adipisci dolore cum. Nesciunt, cupiditate!",
    name: "Juana Jímenez",
    title: "Guerrero, Mx",
    
  },
];


const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Sucesos reales captados en  
        <span className="text-purple"> testimonios</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;
