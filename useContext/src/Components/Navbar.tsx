import type { Dispatch, SetStateAction } from "react";
import Btn from "./Btn"
import type React from "react";

interface NavbarProps {
    signIn: boolean;
    setSignIn: Dispatch<SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarProps> = ({signIn, setSignIn}) => {
  return (
    <div>
        <h1>Lifting the State Up</h1>
        <p>
            { signIn ? "Welcome, User!" : "Please Sign In"}
        </p>
        <Btn signIn={signIn} setSignIn={setSignIn}/>
    </div>
  )
}

export default Navbar