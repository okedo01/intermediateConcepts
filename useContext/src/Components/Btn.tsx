import React from 'react'

interface BtnProps {
    signIn: boolean;
    onToggle: () => void;
}
const Btn: React.FC<BtnProps> = ({ signIn, onToggle }) => {
  return (
    <div>
        <button onClick={onToggle}>
            { signIn ? "Sign Out" : "Sign In"}
        </button>
    </div>
  )
}

export default Btn