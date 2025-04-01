'use client'
interface MenuItemProps { 
  title: string;
  onClick?: () => void;
}
const MenuItem: React.FC<MenuItemProps> = ({ title, onClick }) => {
  return (
    <div
      className="px-4 py-3 hover:bg-neutral-100 font-semibold transition"
      onClick={onClick}
      >
      {title}
    </div>
  )
}

export default MenuItem;