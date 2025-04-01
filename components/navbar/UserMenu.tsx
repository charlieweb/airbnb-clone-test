'use client'
import { useState, useEffect, useRef } from "react";
import { MenuIcon } from "lucide-react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
     // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3" ref={ref}>
        <div onClick={() => { }}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 cursor-pointer">
          Airbnb Your Home
        </div>
        <div onClick={toggleOpen} 
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <MenuIcon />
          <div className="hidden md:block">
            <Avatar/>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer ">
            <MenuItem
              onClick={() => { }}
              title="Login"
            />
            <MenuItem
              onClick={() => { }}
              title="Logout"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu