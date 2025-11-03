'use client';
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link href='/'>
      <Image
        src="/images/logo.svg"
        alt="logo"
        width='100'
        height='100'
        className="cursor-pointer md:block hidden"
        />
     </Link>
    </div>
  )
}
