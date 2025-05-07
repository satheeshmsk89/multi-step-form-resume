import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:py-5">
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Beyond Logo" width={100} height={40} />
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-normal text-black-500 rounded-full border border-gray-300 px-5 py-2">
          <Link href="#"><span className="hover:text-orange-500 cursor-pointer">Company</span></Link>
          <Link href="#"><span className="hover:text-orange-500 cursor-pointer">Case studies</span></Link>
          <Link href="#"><span className="hover:text-orange-500 cursor-pointer">Impact</span></Link>
          <Link href="#"><span className="hover:text-orange-500 cursor-pointer">Operations</span></Link>
          <Link href="#"><span className="hover:text-orange-500 cursor-pointer">Career</span></Link>
        </nav>

        <button className="ml-4 font-bold text-black-400 bg-white border border-gray-300 text-sm px-5 py-2 rounded-full hover:shadow-sm">
          Build with us
        </button>
      </div>
    </header>
  );
}
