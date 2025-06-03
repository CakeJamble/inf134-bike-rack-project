import Image from 'next/image';
import NavBar from "@/components/navbar";
import MyMap from "@/components/map";
import { Button } from '@headlessui/react';
import './page.css'
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

export default function Home() {
  return (
    <>
      {/* <NavBar /> */} {/* Sirena commented this out 5/7 moved to outer layout.tsx*/}
      <div className="grid grid-rows-[200fr_2px] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <MyMap />
        <Button id="toLocation" className="rounded px-5 py-5 text-sm text-white">
          <Image
            className="pfp"
            src="/location-arrow.png"
            alt="to my location"
            width="25"
            height="25"
          />
        </Button>
      </div>
    </>
  );
}