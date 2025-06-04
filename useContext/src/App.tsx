import React, { useState } from "react"
import Navbar from "./Components/Navbar";

const App: React.FC = () => {
  const [ signIn, setSignIn ] = useState<boolean>(false);

  const handleToggle = () => {
    setSignIn(!signIn);
  }

  return (
    <div>
      <Navbar signIn={signIn} onClick={handleToggle} />
      { signIn ? "Welcome, User!" : "Please Sign In"}
    </div>
  )
}

export default App