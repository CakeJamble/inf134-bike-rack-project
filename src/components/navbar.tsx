"use client";
import Image from "next/image";
import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import "./navbar.css"

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function Logo() {
  return (
    <Link href='/' className="logo-link"> {/* Link that navigates to root page when clicked */}
      <Image 
        className="logo-img"
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
        <MenuButton className="flex flex-col justify-center items-center" onClick={handleClick}
        >
          <span className={`bg-white block transition-all duration-300 ease-out origin-center 
                          h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}` } >
          </span>
          <span className={`bg-white block transition-all duration-300 ease-out origin-center
                          h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`} >
          </span>
          <span className={`bg-white block transition-all duration-300 ease-out origin-center
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
            <span className="menu-item"> Account </span>
          </MenuItem>
        </Link>
        {/* The Reports Page */}
        <Link href={"Reports"}>
          <MenuItem>
            <span className="menu-item"> Reports </span>
          </MenuItem>
        </Link>

        {/* The Community Page */}
        <Link href={"/community"}>
          <MenuItem>
            <span className="menu-item"> Community </span>
          </MenuItem>
        </Link>

        {/* The About Page */}
        <Link href={"/about"}>
          <MenuItem>
              <span className="menu-item"> About </span>
          </MenuItem>
        </Link>
      </MenuItems>
    </Menu>
  );
}

function ProfileIcon(){
  return(
    <Link href="/account"
          className="rounded-full overflow-hidden hover:opacity-80 transition-opacity">
      <Image
        className="flex w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full  cursor-pointer object-cover"
        src="/shri.png"
        alt="profile icon"
        priority
        width={48}
        height={48}
      />
    </Link>
  );
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="w-full sticky top-0 z-20" style={{ backgroundColor: '#46A70A' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 ">
      <div className="relative flex items-center justify-between h-20">
      {/* Left-Aligned Logo */}
          <div className="flex items-center h-full border-2" >
              <Logo />
          </div>
          {/* Right-Aligned HamburgerDropdown */}
          <div className="ml-auto flex items-center gap-2">
            <HamurgerSqueeze />
            <ProfileIcon/>
          </div>
        </div>
      </div>


    </Disclosure>
  )
}
