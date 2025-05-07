"use client";
import Image from "next/image";
import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react";

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function Logo() {
  return (
    <Link href='/' className="relative w-24 aspect-[3/1]"> {/* Link that navigates to root page when clicked */}
      <Image 
        className="dark:invert"
        src="/app_icon.png"
        alt="Is There A Bike Rack Icon"
        fill
        priority
        sizes="(max-width: 640px) 2rem, (max-width: 768px) 2.5rem, (max-width: 1024px) 3rem, 3.5rem"
      />
    </Link>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HamurgerSqueeze() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return(
    // Dropdown Icon (3 bars)
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="flex flex-col justify-center items-center"
        >
          <span className={`bg-gray-500 block transition-all duration-300 ease-out 
                          h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
          </span>
          <span className={`bg-gray-500 block transition-all duration-300 ease-out 
                          h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} >
          </span>
          <span className={`bg-gray-500 block transition-all duration-300 ease-out 
                          h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
          </span>    
        </MenuButton>
      </div>
      {/* List of Dropdown Items */}
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {/* The Account Page */}
        <Link href={"/account"}>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden active:opacity-70"
            >
              Account
            </a>
          </MenuItem>
        </Link>
        {/* The Reports Page */}
        <Link href={"Reports"}>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden active:opacity-70"
            >
              Reports
            </a>
          </MenuItem>
        </Link>

        {/* The Community Page */}
        <Link href={"/community"}>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden active:opacity-70"
            >
              Community
            </a>
          </MenuItem>
        </Link>

        {/* The About Page */}
        <Link href={"/about"}>
          <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden active:opacity-70"
              >
                About
              </a>
          </MenuItem>
        </Link>
      </MenuItems>
    </Menu>
  );
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="w-full sticky top-0 z-20" style={{ backgroundColor: '#46A70A' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 ">
      <div className="relative flex items-center justify-between h-20">
      {/* Left-Aligned Logo */}
          <div className="flex items-center h-fullr" >
              <Logo />
          </div>
          {/* Right-Aligned HamburgerDropdown */}
          <div className="ml-auto flex items-center">
            <HamurgerSqueeze />
          </div>
        </div>
      </div>


    </Disclosure>
  )
}
