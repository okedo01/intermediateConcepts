import React, { type Dispatch, type SetStateAction } from 'react'

interface BtnProps {
    signIn: boolean;
    setSignIn: Dispatch<SetStateAction<boolean>>;
}
const Btn: React.FC<BtnProps> = ({ signIn, setSignIn }) => {
  return (
    <div>
        <button onClick={() => setSignIn(!signIn)}>
            { signIn ? "Sign Out" : "Sign In"}
        </button>
    </div>
  )
}

export default Btn