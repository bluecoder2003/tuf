import { useState } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { PiCardsFill } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidePanel}
          className="text-white text-2xl p-2 bg-[#1a1a1a] rounded-md"
        >
          {isOpen ? <IoMdClose /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen bg-[#1a1a1a] text-white p-8 flex flex-col space-y-6 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <Link
          href="/admin"
          className="hover:text-[#f1684d] mt-8 text-xl transition-colors duration-300 bg-[#333333] py-4 px-8 rounded-lg flex gap-2 justify-center items-center"
        >
          <MdDashboard />
          Dashboard
        </Link>
        <Link
          href="/"
          className="hover:text-[#f1684d] text-xl transition-colors duration-300 bg-[#333333] py-4 px-8 rounded-lg flex gap-2 justify-center items-center"
        >
          <PiCardsFill />
          Flashcards
        </Link>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidePanel}
        ></div>
      )}
    </>
  );
};

export default SidePanel;
