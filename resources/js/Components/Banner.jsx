import React from "react";

function Banner({ image }) {
    return (
        <div className="mx-auto overflow-hidden rounded-lg w-fit h-96">
            <img src={image.url} alt="gambar" className="object-cover" />
        </div>
    );
}

export default Banner;
