import React from "react";
import Link from "next/link";
const SideBar = () => {
  return (
    <div className="flex max-md:hidden">
      <ul className="list-none flex flex-col gap-8 p-6 uppercase">
        <li>
          <Link href="/">
            <img
              className="h-20"
              src="http://1.bp.blogspot.com/_qLZCK7dYhVA/TI_n-neNG1I/AAAAAAAAAYs/pA5C3BA2Ejg/s1600/Black-Swan-logo-Revise.gif"
            />
          </Link>
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
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
