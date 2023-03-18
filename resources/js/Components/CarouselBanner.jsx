import { Head } from "@inertiajs/react";
import { Carousel } from "flowbite-react";
import React from "react";

function CarouselBanner() {
    return (
        <div className="h-56 sm:h-64 lg:h-80 2xl:h-96 lg:w-2/3 mx-auto">
            <Carousel data-carousel="slide">
                <img src="https://picsum.photos/500/500" alt="..." />
                <img src="https://picsum.photos/500/500" alt="..." />
                <img src="https://picsum.photos/500/500" alt="..." />
                <img src="https://picsum.photos/500/500" alt="..." />
                <img src="https://picsum.photos/500/500" alt="..." />
            </Carousel>
        </div>
    );
}

export default CarouselBanner;
