import { useContext } from "react";
import Btn from "./Btn"
import type React from "react";

// interface NavbarProps {
//     signIn: boolean;
//     onClick: () => void;
// }

const navContext = useContext(signInContext);

const Navbar: React.FC<> = () => {
  return (
    <div>
        <h1>Lifting Up the State</h1>
        { navContext ? "Welcome, User!" : "Please Sign In"}
    </div>
  )
}

export default Navbar