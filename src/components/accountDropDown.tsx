import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './accountDropDown.css';

interface Props {
    label: string;
}

const AccountDropDown: React.FC<Props> = ({label}) => {

    return (
        <div id="main">
            <div className="button">
                <h1>{label}</h1>
                <div>
                    <span className={`block transition-all duration-300 ease-out 
                          h-0.5 w-4 rounded-sm -rotate-45 -translate-x-2.5`} ></span>
                    <span className={`block transition-all duration-300 ease-out 
                          h-0.5 w-4 rounded-sm rotate-45 -translate-y-0.5`} ></span>
                </div>
            </div>
        </div>
    )
}

export default AccountDropDown;