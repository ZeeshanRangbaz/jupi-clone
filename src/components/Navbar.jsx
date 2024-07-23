import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="">
      <header className="flex w-screen  justify-between p-4 bg-purple-900 h-24 text-white text-xl items-center position fixed z-50 ">
        <div className="">
          <h1 className="font-serif text-5xl font-[550]"> Jupi</h1>
        </div>
        <p className="text-white bg-red-500 lg:hidden">icon</p>
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8 ">
            <li>Home</li>
            <li>Feature</li>
            <li>
              <a href="#test">Testimonial</a>
            </li>
            <li>
              <a href="#pric">Price </a>
            </li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contacts</li>
          </ul>
          <div>
            <HiOutlineShoppingBag />
          </div>
        </div>
      </header>

      <footer></footer>
    </div>
  );
};

export default Navbar;
