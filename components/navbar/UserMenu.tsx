'use client'

import { MenuIcon } from "lucide-react"
import Avatar from "../Avatar"

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div onClick={() => { }}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 cursor-pointer">
          Airbnb Your Home
        </div>
        <div onClick={() => { }}
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <MenuIcon />
          <div className="hidden md:block">
            <Avatar/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu