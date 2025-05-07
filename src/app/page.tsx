import Image from 'next/image';
import NavBar from "@/components/navbar";
import MyMap from "@/components/map";

export default function Home() {
  return (
  <>
      <NavBar />
    <div className="grid grid-rows-[200fr_2px] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <MyMap />
    </div>
  </>
  );
}
