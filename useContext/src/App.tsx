import React, { useState } from "react"
// import Btn from "./Components/Btn"
import Navbar from "./Components/Navbar";

const App: React.FC = () => {
  const [ signIn, setSignIn ] = useState<boolean>(false);

  return (
    <div>
      <Navbar signIn={signIn} setSignIn={setSignIn}/>
      {/* <Btn signIn={signIn} setSignIn={setSignIn}/> */}
    </div>
  )
}

export default App