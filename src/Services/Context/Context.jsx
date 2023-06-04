import { createContext, useState } from "react";

export const StateContext = createContext()

const StateContextProvider = ({children}) => {
    const [menuActive, setMenuActive] = useState(false)

    const data = {menuActive, setMenuActive}

    return (
        <StateContext.Provider value={data}>

            {children}

        </StateContext.Provider>
    )

}

export default StateContextProvider