
import React from 'react'

const MapMain = () => {
    return (
        <div className='cursor-pointer'>
            <h1 className="heading text-black">
                EONET<span className="text-purple"></span>
            </h1>
            <p className="text-center md:tracking-wider mb-4 m4 text-sm md:text-lg lg:text-2xl text-black">
                The Earth Observatory Natural Event Tracker
                More and more NASA imagery is being made available via web services and a significant percentage of it is being produced and published in near real time. <br />
                This ability means that NASA imagery can be used more routinely to examine current natural events as they happen.Using client applications. Users can browse the entire globe daily and look for natural events as they occur. <br />
                Storms are regularly spotted in the tropics, dust storms over deserts, forest fires in the summers. These events are occurring constantly and NASA NRT imagery can represent them all using a variety of different data parameters.
            </p>
            <a href="https://map-eonet-nasa.vercel.app/" >
                <div>
                    <img src="/ss.png" alt="" />
                </div>
            </a>
        </div>
    )
}

export default MapMain