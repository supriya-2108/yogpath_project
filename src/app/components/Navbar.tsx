"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [showMobileMenu, setMobileMenu] = useState<boolean>(false);
  const [showSubMenu, setSubMenu] = useState<boolean>(false);
  const toggleMobileMennu = () => {
    setMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <div className="flex justify-end bg-gray-800 text-white">
        <ul className="list-none flex flex-row gap-8 py-6 px-20 uppercase max-md:hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">AboutUs</Link>
          </li>
          <li>
            <Link href="/contactus">ContactUs</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setSubMenu(!showSubMenu)}
          >
            User
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          className="h-8 md:hidden m-4"
          onClick={toggleMobileMennu}
        />
      </div>
      {showSubMenu && (
        <div className="flex justify-end text-center font-semibold text-[1.1rem] ">
          <ul className="bg-slate-400 w-[10rem]">
            <li>
              <Link href="/login" onClick={() => setSubMenu(false)}>
                Login
              </Link>
            </li>
            <li className="my-1">
              <Link href="/register" onClick={() => setSubMenu(false)}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
      {showMobileMenu && (
        <div className="bg-slate-400 flex justify-center font-semibold text-[1.1rem] ">
          <ul>
            <li>
              <Link href="/" onClick={toggleMobileMennu}>
                Home
              </Link>
            </li>
            <li className="my-1">
              <Link href="/about" onClick={toggleMobileMennu}>
                AboutUs
              </Link>
            </li>
            <li>
              <Link href="/contactus" onClick={toggleMobileMennu}>
                ContactUs
              </Link>
            </li>
            <li className="my-1 cursor-pointer">User</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
