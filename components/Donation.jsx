import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";


export const donationItems = [
    {
        id: 6,
        title: "Click here for donate now",
        description: "",
        className: "lg:max-w-full",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },

];


const Donation = () => {
    return (
        <section id="donation">
            <div className="center-item" >
                <h1 className="heading">
                    It&apos;s your time for <span className="text-purple">Donate</span>
                </h1>

                <BentoGrid className="w-full py-20">
                    {donationItems.map((item, i) => (
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
            </div>
        </section>
    );
};

export default Donation;
