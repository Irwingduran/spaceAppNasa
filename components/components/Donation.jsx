import React from "react";
import MagicButton from "./MagicButton";

const Donation = () => {
    return (
        <section
            id="donation"
            className="min-h-screen flex flex-col items-center justify-center space-y-6" // Aseguramos que los elementos estén en una columna y tengan un espacio entre ellos
        >
            <h1 className="heading text-center text-black">
                Donate <span className="text-purple">Now</span>
            </h1>
            <br />
            <a href="#">
                <MagicButton title="Donate" icon="" position="right" />
            </a>
        </section>
    );
};

export default Donation;
