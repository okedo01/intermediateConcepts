import { createContext, useContext, useState, type ReactNode } from "react";

interface signInContextType {
    signIn: boolean;
    toggleSignIn: () => void;
}
const signInContext = createContext<signInContextType | undefined>(undefined);

export const signInProvider = ({children}: {children: ReactNode}) => {
    const [ signIn, setSignIn ] = useState(false);

    const toggleSignIn = () => {
        setSignIn(!signIn);
    };

    return (
        <signInContext.Provider value={{ signIn, toggleSignIn }}>
            {children}
        </signInContext.Provider>
    )
};

export const useSignIn = () => {
    const context = useContext(signInContext);
    if(!context) {
        throw new Error("useSignIn must be used within a signInProvider")
    }
    return context;
}