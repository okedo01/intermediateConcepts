import React, { useContext } from 'react'

interface BtnProps {
    signIn: boolean;
    onToggle: () => void;
}
const BtnContext = useContext(signInContext);
const Btn: React.FC<BtnProps> = () => {
  return (
    <div>
        <button >
            { BtnContext }
        </button>
    </div>
  )
}

export default Btn