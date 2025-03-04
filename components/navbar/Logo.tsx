'use client';
import Image from "next/image";

export const Logo = () => {
  return (
    <div>

      <Image
        src="/images/logo.svg"
        alt="logo"
        width='100'
        height='100'
        className="cursor-pointer md:block hidden"
      />
    </div>
  )
}
