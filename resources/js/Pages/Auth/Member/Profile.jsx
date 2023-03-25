import Member from "@/Layouts/Member/Index";
import { Head } from "@inertiajs/react";
import React from "react";

function Profile() {
    return (
        <Member auth>
            <Head title="Profile" />
            <div>
                <div className="w-full p-10 bg-white">
                    <div className="items-center pb-6 border-b border-gray-200 md:flex">
                        <div className="flex items-center mt-4 md:mt-0">
                            <div className="flex items-center justify-center w-8 h-8 bg-indigo-700 rounded">
                                <p className="text-base font-medium leading-none text-white">
                                    01
                                </p>
                            </div>
                            <p className="ml-3 text-base font-medium leading-4 text-gray-800">
                                Sign Up
                            </p>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0 md:ml-12">
                            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded">
                                <p className="text-base font-medium leading-none text-gray-800">
                                    02
                                </p>
                            </div>
                            <p className="ml-3 text-base font-medium leading-4 text-gray-800">
                                Security Check
                            </p>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0 md:ml-12">
                            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded">
                                <p className="text-base font-medium leading-none text-gray-800">
                                    03
                                </p>
                            </div>
                            <p className="ml-3 text-base font-medium leading-4 text-gray-800">
                                Confirm Info
                            </p>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0 md:ml-12">
                            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded">
                                <p className="text-base font-medium leading-none text-gray-800">
                                    04
                                </p>
                            </div>
                            <p className="ml-3 text-base font-medium leading-4 text-gray-800">
                                Onboarding
                            </p>
                        </div>
                    </div>
                    <h1
                        tabIndex={0}
                        role="heading"
                        aria-label="profile information"
                        className="mt-12 text-3xl font-bold text-gray-800 focus:outline-none"
                    >
                        Profile info
                    </h1>
                    <p
                        role="contentinfo"
                        className="mt-4 font-light leading-tight text-gray-600 focus:outline-nonetext-sm"
                    >
                        Fill in the data for profile. It will take a couple of
                        minutes. <br />
                        You only need a passport
                    </p>
                    <h2
                        role="heading"
                        aria-label="enter Personal data"
                        className="mt-10 text-xl font-semibold leading-7 text-gray-800"
                    >
                        Personal data
                    </h2>
                    <p className="text-sm font-light leading-none text-gray-600 mt-0.5">
                        Your details and place of birth
                    </p>
                    <div className="items-center mt-8 md:flex">
                        <div className="flex flex-col">
                            <label className="mb-3 text-sm leading-none text-gray-800">
                                First name
                            </label>
                            <input
                                type="name"
                                tabIndex={0}
                                aria-label="Enter first name"
                                className="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded"
                                defaultValue="William"
                            />
                        </div>
                        <div className="flex flex-col mt-8 md:ml-12 md:mt-0">
                            <label className="mb-3 text-sm leading-none text-gray-800">
                                Last name
                            </label>
                            <input
                                type="name"
                                tabIndex={0}
                                aria-label="Enter last name"
                                className="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded"
                                defaultValue="Smith"
                            />
                        </div>
                    </div>
                    <div className="items-center mt-12 md:flex">
                        <div className="flex flex-col">
                            <label className="mb-3 text-sm leading-none text-gray-800">
                                Email Address
                            </label>
                            <input
                                type="email"
                                tabIndex={0}
                                aria-label="Enter email Address"
                                className="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded"
                                defaultValue="smith.william@gmail.com"
                            />
                        </div>
                        <div className="flex flex-col mt-8 md:ml-12 md:mt-0">
                            <label className="mb-3 text-sm leading-none text-gray-800">
                                Phone number
                            </label>
                            <input
                                type="number"
                                tabIndex={0}
                                aria-label="Enter phone number"
                                className="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded"
                                defaultValue="+81 839274"
                            />
                        </div>
                    </div>
                    <div className="items-center mt-12 md:flex">
                        <div className="flex flex-col">
                            <label className="mb-3 text-sm leading-none text-gray-800">
                                Date of birth
                            </label>
                            <input
                                type
                                tabIndex={0}
                                aria-label="Enter date of birth"
                                className="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded"
                                defaultValue="28.03.1997"
                            />
                        </div>
                        <div className="flex flex-col mt-8 md:ml-12 md:mt-0">
                            <label className="mb-3 text-sm leading-none text-gray-800">
                                Place of birth
                            </label>
                            <input
                                type="name"
                                tabIndex={0}
                                aria-label="Enter place of birth"
                                className="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded"
                                defaultValue="San Diego, CA, USA"
                            />
                        </div>
                    </div>
                    <div className="mt-12">
                        <div className="flex items-center py-4">
                            <div className="relative flex items-center justify-center flex-shrink-0 w-4 h-4 bg-white border border-gray-400 rounded-sm dark:bg-gray-800 dark:border-gray-700">
                                <input
                                    type="checkbox"
                                    tabIndex={0}
                                    aria-label="I agree with the terms of service"
                                    defaultChecked
                                    className="absolute w-full h-full opacity-0 cursor-pointer checkbox"
                                />
                                <div className="hidden text-white bg-blue-500 rounded-sm check-icon">
                                    <svg
                                        className="icon icon-tabler icon-tabler-check"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                            </div>
                            <p className="ml-2 text-sm leading-none">
                                I agree with the{" "}
                                <span className="text-indigo-700">
                                    terms of service
                                </span>
                            </p>
                        </div>
                    </div>
                    <button
                        role="button"
                        aria-label="Next step"
                        className="flex items-center justify-center py-4 bg-white border border-gray-400 rounded px-7 focus:outline-none mt-7 md:mt-14 hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                    >
                        <span className="text-sm font-medium text-center text-gray-800 capitalize">
                            Next Step
                        </span>
                        <svg
                            className="mt-1 ml-3"
                            width={12}
                            height={8}
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z"
                                fill="#242731"
                            />
                        </svg>
                    </button>
                </div>
                <style
                    dangerouslySetInnerHTML={{
                        __html: "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      ",
                    }}
                />
            </div>
        </Member>
    );
}

export default Profile;
