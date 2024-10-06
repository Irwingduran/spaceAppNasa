import React from "react";

import { Button } from "./ui/MovingBorders";
import Image from "next/image";

export const entitiesItems = [
  {
    id: 1,
    title: "NASA'S EONET - Natural Disaster Alert",
    desc: "It uses real-time data from NASA to send alerts to foundations and NGOs in the network.",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 2,
    title: "Refugio Community Network",
    desc: "we offer a safe, reputable, and secure place for broader, more specialized support ",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 3,
    title: "Redistribution Of Emergency Funds",
    desc: "Automates the allocation of funds to disaster-affected communities.",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 4,
    title: "Coordination Platform",
    desc: "Facilitates coordination between foundations, NGOs, and network partners.",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 5,
    title: "Tax Benefit System",
    desc: "Provides tax benefits through NFT tokens.",
    className: "md:col-span-2",
    thumbnail: "",
  },
  
];


const Entities = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
      Our tool<span className="text-purple">kit</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {entitiesItems.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Entities;
