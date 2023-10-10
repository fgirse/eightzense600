import { SafeUser } from "@/app/types";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-start
            gap-3
            md:gap-0
          "
        >
          <Logo />
          
          <UserMenu currentUser={currentUser} />
        </div>
    
    </div>
    
  </div>
  );
}


export default Navbar;