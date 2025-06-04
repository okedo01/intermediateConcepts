import { useState } from 'react'

const Btn = () => {
    const [ signIn, setSignIn ] = useState(false);

    const handleToggle = () => {
        setSignIn(!signIn);
    }
  return (
    <div>
        <button onClick={handleToggle}>
            { signIn ? "Sign Out" : "Sign In"}
        </button>
    </div>
  )
}

export default Btn