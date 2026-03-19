'use client'
import { useState, useCallback } from 'react'
import { MenuIcon } from 'lucide-react'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'
import useRegisterModal from '@/hooks/useRegisterModal'
import useLoginModal from '@/hooks/useLoginModal'
import { auth } from '@/lib/auth'
import { signOut } from '@/lib/actions/auth-actions'
import { User } from '@/lib/generated/prisma'
type Session = typeof auth.$Infer.Session

interface UserMenuProps {
  session: Session | null
  currentUser?: User | null
}

const handleSignOut = async () => {
  await signOut();
  
}
const UserMenu = ({ session, currentUser }: UserMenuProps) => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 cursor-pointer"
        >
          Airbnb Your Home
        </div>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <MenuIcon />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          {currentUser && (
            <>
              <MenuItem onClick={() => { }} title="My trips"></MenuItem>
              <MenuItem onClick={() => { }} title="My favorites"></MenuItem>
              <MenuItem onClick={() => { }} title="My reservations"></MenuItem>
              <MenuItem onClick={() => { }} title="My properties"></MenuItem>
              <MenuItem onClick={() => { }} title="Airbnb my home"></MenuItem>
              <hr />

              <MenuItem onClick={handleSignOut} title="Logout" />
            </>
          )}
          <div className="flex flex-col cursor-pointer ">
            {!currentUser && (
              <>
                <MenuItem onClick={loginModal.onOpen} title="Login" />
                <MenuItem onClick={registerModal.onOpen} title="Sign Up" />
              </>
            )}

          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
