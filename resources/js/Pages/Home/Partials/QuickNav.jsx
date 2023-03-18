import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function QuickNav() {
    const [isScrolled, setIsScrolled] = useState(false);
    return (
        <div className={`  ${isScrolled ? "h-fit" : "h-screen"}`}>
            <Transition
                show={!isScrolled}
                enter="transition transform duration-700 ease-out"
                enterFrom="translate-y-0 opacity-0"
                enterTo="translate-y-5 opacity-100"
                leave="transition transform duration-300 ease-in"
                leaveFrom="translate-y-5 opacity-100"
                leaveTo="translate-y-0 opacity-0"
            >
                <div
                    className={`flex flex-col items-center  ${
                        isScrolled ? "hidden" : ""
                    }`}
                >
                    <div className="flex flex-col gap-y-3">
                        <a
                            href="https://www.tiktok.com/@rafasadina0?is_from_webapp=1&sender_device=pc"
                            target="_blank"
                            className="px-6 py-4 overflow-hidden text-lg font-bold transition-all duration-300 ease-in-out border-4 rounded-lg shadow-md hover:shadow-xl sm:px-14 "
                        >
                            <i className="mr-4 fa-brands fa-tiktok"></i>
                            Sadina TikTok
                        </a>
                        <a
                            href="https://drive.google.com/drive/folders/12XWCEmJi2rqmHwY314G9UefewPCZaYvY"
                            target="_blank"
                            className="px-6 py-4 overflow-hidden text-lg font-bold transition-all duration-300 ease-in-out border-4 rounded-lg shadow-md hover:shadow-xl sm:px-14 "
                        >
                            <i className="mr-4 fa-solid fa-book"></i>
                            Katalog Sadina
                        </a>
                        <a
                            href="https://www.facebook.com/silvia.noviani.7/videos"
                            target="_blank"
                            className="px-6 py-4 overflow-hidden text-lg font-bold transition-all duration-300 ease-in-out border-4 rounded-lg shadow-md hover:shadow-xl sm:px-14 "
                        >
                            <i className="mr-4 fa-brands fa-facebook"></i>
                            Check Update Produk di Facebook
                        </a>
                        <a
                            href="https://goo.gl/maps/VdG99X3wE9C7RK4RA"
                            target={"_blank"}
                            className="px-6 py-4 overflow-hidden text-lg font-bold transition-all duration-300 ease-in-out border-4 rounded-lg shadow-md hover:shadow-xl sm:px-14 "
                        >
                            <i className="mr-4 fa-solid fa-map-location-dot"></i>
                            Lokasi Sadina
                        </a>
                        <a
                            href="https://forms.gle/QmmjfFP7Pq5fnEkK7"
                            target={"_blank"}
                            className="px-6 py-4 overflow-hidden text-lg font-bold transition-all duration-300 ease-in-out border-4 rounded-lg shadow-md hover:shadow-xl sm:px-14 "
                        >
                            <i className="mr-4 fa-solid fa-circle-check"></i>
                            Konfirmasi Alamat Pengiriman
                        </a>
                    </div>
                </div>
            </Transition>
            <div
                className={`flex w-fit ${
                    isScrolled ? "" : "mt-6"
                } p-2 mx-auto justify-center rounded-full overflow-hidden`}
            >
                <span
                    className="font-semibold text-black underline cursor-pointer"
                    onClick={() => setIsScrolled(!isScrolled)}
                >
                    {isScrolled ? "Show Navigation" : "Hide Navigation"}
                </span>
            </div>
        </div>
    );
}
