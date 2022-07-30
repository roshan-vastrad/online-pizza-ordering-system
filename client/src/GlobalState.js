import {createContext, useState} from 'react'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [post, setPost] = useState([]);

    const state = {
        menu: [post,setPost],
    }

    return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
}