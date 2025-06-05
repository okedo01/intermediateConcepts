import React, { createContext, useState } from "react"
import Navbar from "./Components/Navbar";
import Btn from "./Components/Btn";

const signInContext = React.createContext();

interface signInType {
  signIn: boolean;
  hadleToggle: () => void;
}

const App: React.FC<signInType> = () => {
  const [ signIn, setSignIn ] = useState<boolean>(false);

  const handleToggle = () => {
    setSignIn(!signIn);
  }

  return (
    <signInContext.Provider value={{signIn, setSignIn}}>
      <Navbar />
      <Btn />
    </signInContext.Provider>
  )
}

export default App