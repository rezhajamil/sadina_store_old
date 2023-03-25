import { Link } from "@inertiajs/react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useState } from "react";
import SmallButton from "./SmallButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "./PrimaryButton";

// function Navigation({ className = "" }) {
//     return (
//         <div
//             className={`w-full mb-2 text-center bg-premier py-6 px-4 sm:px-8 items-center justify-around flex ${className}`}
//         >
//             <Link href="/">
//                 <span className="inline-block text-xl font-bold text-black cursor-pointer font-inter sm:text-3xl">
//                     SADINA STORE
//                 </span>
//             </Link>
//             <div className="justify-end hidden sm:flex grow gap-x-3">
//                 <Link href={route("login")}>
//                     <SmallButton variant="white">
//                         <i className="mr-2 fa-solid fa-right-to-bracket"></i>
//                         SIGN IN
//                     </SmallButton>
//                 </Link>
//                 <Link href={route("register")}>
//                     <SmallButton variant="black">
//                         <i className="mr-2 fa-solid fa-user-plus"></i>
//                         SIGN UP
//                     </SmallButton>
//                 </Link>
//                 <div className="flex items-center md:order-2">
//                     <button
//                         type="button"
//                         className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                         id="user-menu-button"
//                         aria-expanded="false"
//                         data-dropdown-toggle="user-dropdown"
//                         data-dropdown-placement="bottom"
//                     >
//                         <span className="sr-only">Open user menu</span>
//                         <img
//                             className="w-8 h-8 rounded-full"
//                             src="/docs/images/people/profile-picture-3.jpg"
//                             alt="user photo"
//                         />
//                     </button>
//                     <div
//                         className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
//                         id="user-dropdown"
//                     >
//                         <div className="px-4 py-3">
//                             <span className="block text-sm text-sekunder dark:text-white">
//                                 Bonnie Green
//                             </span>
//                             <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
//                                 name@flowbite.com
//                             </span>
//                         </div>
//                         <ul className="py-2" aria-labelledby="user-menu-button">
//                             <li>
//                                 <a
//                                     href="#"
//                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                                 >
//                                     Dashboard
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                     <button
//                         data-collapse-toggle="mobile-menu-2"
//                         type="button"
//                         className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                         aria-controls="mobile-menu-2"
//                         aria-expanded="false"
//                     >
//                         <span className="sr-only">Open main menu</span>
//                         <svg
//                             className="w-6 h-6"
//                             aria-hidden="true"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 fill-rule="evenodd"
//                                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                                 clip-rule="evenodd"
//                             ></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

const Navigation = ({ auth }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black shadow-md">
            <div className="px-2 mx-auto sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <Link href="/">
                        <span className="inline-block text-xl font-bold cursor-pointer text-premier font-inter sm:text-3xl">
                            SADINA STORE
                        </span>
                    </Link>
                    <div className="absolute inset-y-0 right-0 flex items-center gap-x-4 sm:hidden">
                        <button className="inline-block text-white sm:hidden">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button
                            className="inline-flex items-center justify-center p-2 text-lg font-bold text-white transition duration-150 ease-in-out rounded-md bg-sekunder hover:text-sekunder hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                            aria-label="Main menu"
                            aria-expanded="false"
                            onClick={toggleMenu}
                        >
                            {isOpen ? (
                                <FontAwesomeIcon icon={faXmark} />
                            ) : (
                                <FontAwesomeIcon icon={faBars} />
                            )}
                        </button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-end">
                        <Link
                            href="/about"
                            className="hidden px-3 py-2 ml-6 mr-auto text-lg font-medium text-white underline rounded-md sm:inline-block focus:outline-none focus:text-white focus:bg-gray-700"
                        >
                            About
                        </Link>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex items-center h-full gap-x-3">
                                <button className="text-white">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                                {auth.user ? (
                                    <Link href={route("logout")} method="post">
                                        <SmallButton variant="red">
                                            <i className="mr-2 rotate-180 fa-solid fa-right-to-bracket"></i>
                                            SIGN OUT
                                        </SmallButton>
                                    </Link>
                                ) : (
                                    <>
                                        <Link href={route("login")}>
                                            <SmallButton variant="white">
                                                <i className="mr-2 fa-solid fa-right-to-bracket"></i>
                                                SIGN IN
                                            </SmallButton>
                                        </Link>
                                        <Link href={route("register")}>
                                            <SmallButton variant="black">
                                                <i className="mr-2 fa-solid fa-user-plus"></i>
                                                SIGN UP
                                            </SmallButton>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="absolute z-30 w-full min-h-screen bg-gray-500 sm:hidden">
                    <div className="flex flex-col min-h-screen px-2 pt-2 pb-3 gap-y-3">
                        <div className="">
                            <Link href="/about" className="">
                                <PrimaryButton
                                    variant="white-outline"
                                    className="w-full text-center border-4"
                                >
                                    About
                                </PrimaryButton>
                            </Link>
                        </div>
                        {auth.user ? (
                            <Link href={route("logout")} method="post">
                                <SmallButton variant="red">
                                    <i className="mr-2 rotate-180 fa-solid fa-right-to-bracket"></i>
                                    SIGN OUT
                                </SmallButton>
                            </Link>
                        ) : (
                            <>
                                <Link href={route("login")}>
                                    <PrimaryButton
                                        variant="white"
                                        className="w-full text-center border-4"
                                    >
                                        <i className="mr-2 fa-solid fa-right-to-bracket"></i>
                                        SIGN IN
                                    </PrimaryButton>
                                </Link>

                                <Link href={route("register")}>
                                    <PrimaryButton
                                        variant="black"
                                        className="w-full text-center border-4"
                                    >
                                        <i className="mr-2 fa-solid fa-user-plus"></i>
                                        SIGN UP
                                    </PrimaryButton>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
