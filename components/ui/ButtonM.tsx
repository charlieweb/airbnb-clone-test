'use client';
import type { LucideIcon } from "lucide-react";

interface ButtonMProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  Icon?: LucideIcon;
}
const ButtonM: React.FC<ButtonMProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  Icon
}) => {
  return ( 
    <button 
      onClick={onClick}
      disabled= {disabled}
      className={`
          relative
          disable:opacity-70
          disable:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          w-full
          ${ outline ? 'bg-white' : 'bg-rose-500'}
          ${ outline ? 'border-black' : 'bg-rose-500'}
          ${ outline ? 'text-black' : 'text-white'}
          ${ small ? 'py-1' : 'py-3'}
          ${ small ? 'text-sm' : 'text-md'}
          ${ small ? 'font-light' : 'font-semibold'} 
          ${ small ? 'border-[1px]' : 'border-2'}
          
        `}
    >
      {Icon && (
        <Icon
        className ="
        absolute
        left-4
        top-3
      "
        />
      )}
      {label}
      </button>
  );
}

export default ButtonM;