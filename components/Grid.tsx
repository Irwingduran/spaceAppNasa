import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
 
export const gridItems = [
  {
    id: 1,
    title: "Red Comunidades Refugio",
    description: "Centros creados por la comunidad, donde se ofrece servicios como asilo, alimentación, cuidado médico para mujeres en estado de vulnerabilidad.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/kids.jpg",
    spareImg: "",
  },
  
  {
    id: 2,
    title: "texto texto texto texto texto texto texto",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "texto texto texto texto texto texto texto",
    description: "texto texto texto texto texto texto texto",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/details1.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title: "texto texto texto texto texto texto texto",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/kids.jpg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "texto texto texto texto texto texto texto",
    description: "texto texto texto texto texto texto texto",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/oldWomen.jpg",
    spareImg: "/grid.svg",
  },
  
  
];
 
const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
