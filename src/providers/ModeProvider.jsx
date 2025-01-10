import { createContext, useEffect, useState } from "react";

// Deklarerer context 
export const ModeContext = createContext()

// Deklarerer provider komponent
export const ModeProvider = ({children}) => {
    // Deklarerer tilstandsvariabel
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Deklarerer toggle funktion til at skifte mellem true / false
    const changeMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    // useEffect hook renderer når isDarkMode ændres
    useEffect(() => {
        if(isDarkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [isDarkMode])

    // Returnerer context provider med variabel, funktion og komponent children
    return (
        <ModeContext.Provider value={{isDarkMode, changeMode}}>
            {children}
        </ModeContext.Provider>
    )
}

