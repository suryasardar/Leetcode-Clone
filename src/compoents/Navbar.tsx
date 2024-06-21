import React from "react";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/authModelAtom";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
    const setAuthModelState = useSetRecoilState(authModalState);
    const Handlecheck = () => {
        setAuthModelState((prev) => ({ ...prev, isOpen: true }));
      }
      
  return (
    <div className="flex justify-between items-center px-2 sm:px-12 md:px-24 ">
      <Link href="/" className="flex items-center justify-center h-20">
        <img src="/logo.png" alt="leetcline" className="h-full" />
      </Link>
      <div className="flex items-center">
        <button
          className=" bg-brand-orange px-2 rounded-md sm:px-4 text-sm font-medium 
         hover:bg-white hover:text-brand-orange hover:border-2 hover:border-brand-orange transition duration-300 ease-in-out
        "
                  onClick={Handlecheck}
        >
          Sign In
        </button>
      </div>
    </div>
    
  );
};
export default Navbar;
