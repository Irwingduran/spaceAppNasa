import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
 
export const gridItems = [
  {
    id: 1,
    title: "Refugio Iniciative",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/2.jpg",
    spareImg: "/20.jpg",
  },
  
  {
    id: 2,
    title: "Refugio Community",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-black",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Personal guidance",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/4.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title: "ONGs partnership",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/kids.jpg",
    spareImg: "11.jpg",
  },

  {
    id: 5,
    title: "I want to be a Refugio",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/15.jpg",
    spareImg: "/17.jpg",
  },
  
  
];
 
const Grid = () => {
  return (
    <section className="" id="about">
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
