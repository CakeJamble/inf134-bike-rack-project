"use client";

import Image from 'next/image';
import NavBar from "@/components/navbar";
import MyMap from "@/components/map";
import Drawer from "@/components/drawer"
import { useState } from 'react';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <>
      {/* <NavBar /> */} {/* Sirena commented this out 5/7 moved to outer layout.tsx*/}
    <div className="grid grid-rows-[200fr_2px] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <MyMap />
      <Drawer isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
        <h1 className="text-xl font-bold mb-4">Bottom Panel</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700 p-3 rounded">
            <h3 className="font-semibold">Quick Actions</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-sky-300">Action 1</a></li>
              <li><a href="#" className="hover:text-sky-300">Action 2</a></li>
            </ul>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h3 className="font-semibold">Recent Items</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-sky-300">Item 1</a></li>
              <li><a href="#" className="hover:text-sky-300">Item 2</a></li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  </>
  );
}
