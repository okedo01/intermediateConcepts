import Btn from "./Btn"
import type React from "react";

interface NavbarProps {
    signIn: boolean;
    onClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({signIn, onClick}) => {
  return (
    <div>
        <h1>Lifting Up the State</h1>
        <Btn signIn={signIn} onToggle={onClick}/>
    </div>
  )
}

export default Navbar