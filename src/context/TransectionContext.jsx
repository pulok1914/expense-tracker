import { createContext, useState, useContext } from "react";

const TransectionContext = createContext();

export function TransectionProvider({children}){
    const [transections, setTransections] = useState([
        {id: "2103", name: "Grocery Shopping", type: "expense", category: "Food", amount: 40},
        {id: "2107", name: "Freelance project", type: "income", category: "Food", amount: 400},
        {id: "2254", name: "Winter Shopping", type: "expense", category: "Cloth", amount: 100},
    ])
    return (
        <TransectionContext.Provider value={{transections,setTransections}}>
            {children}
        </TransectionContext.Provider>
    )
}

export function useTransection(){
    return useContext(TransectionContext)
}