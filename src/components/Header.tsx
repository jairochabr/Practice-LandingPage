import Logo from '../assets/Practice.svg';
import Lock from '../assets/Lock.svg';
import Bars from '../assets/bars-3.svg';
import close from '../assets/close.svg';
import { useState } from 'react';

export function Header() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[96px] bg-white border">
      <div className="md:max-w-[1420px] max-w-[600px] m-auto w-full h-full flex justify-between items-center">
        <img src={Logo} alt="Website logo" className="h-[25px]" />

        <div className="hidden md:flex items-center">
          <ul className="flex gap-12">
            <li>
              <a
                className="text-[#6D737A] font-medium hover:text-[#20B486] hover:font-bold"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-[#6D737A] font-medium hover:text-[#20B486] hover:font-bold"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-[#6D737A] font-medium hover:text-[#20B486] hover:font-bold"
                href="#course"
              >
                Course
              </a>
            </li>
            <li>
              <a
                className="text-[#6D737A] font-medium hover:text-[#20B486] hover:font-bold"
                href="#blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-[#6D737A] font-medium hover:text-[#20B486] hover:font-bold"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="text-[#6D737A] flex justify-between items-center bg-transparent px-6 gap-2 font-medium">
            <img src={Lock} alt="lock icon" />
            Login
          </button>
          <button className="bg-[#20B486] px-6 py-3 rounded-md text-white hover:bg-[#269461] font-medium">
            Sign up for Free
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img
            src={toggle ? close : Bars}
            alt="bars icon"
            className="h-[43px]"
          />
        </div>
      </div>

      <div
        className={
          toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden' : 'hidden'
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 rounded-md">
            <a className="text-[#6D737A] font-medium" href="#home">
              Home
            </a>
          </li>
          <li className="p-4 hover:bg-gray-100 rounded-md">
            <a className="text-[#6D737A] font-medium" href="#about">
              About
            </a>
          </li>
          <li className="p-4 hover:bg-gray-100 rounded-md">
            <a className="text-[#6D737A] font-medium" href="#course">
              Course
            </a>
          </li>
          <li className="p-4 hover:bg-gray-100 rounded-md">
            <a className="text-[#6D737A] font-medium" href="#blog">
              Blog
            </a>
          </li>
          <li className="p-4 hover:bg-gray-100 rounded-md">
            <a className="text-[#6D737A] font-medium" href="#contact">
              Contact
            </a>
          </li>
          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[#20B486] text-[#6D737A] flex justify-center items-center bg-transparent px-6 gap-2 font-medium py-4 rounded-md">
              <img src={Lock} alt="lock icon" />
              Login
            </button>
            <button className="bg-[#20B486] px-6 py-5 rounded-md text-white hover:bg-[#269461] font-medium">
              Sign up for Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
