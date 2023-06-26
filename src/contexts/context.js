import { useReducer } from "react";
import { createContext  } from "react";
import reducer from '../reducers/reducer'
import { useContext } from "react";
export const NumberContext = createContext([])
export const DispatchContext = createContext(null)

const ContextProvider = ({children}) => {
    const [n, dispatch] = useReducer(reducer, []);
    return (
        <NumberContext.Provider value={n}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </NumberContext.Provider>
    );
}

export const useNumber = () => {
    return useContext(NumberContext)
}

export const useDispatch = () => {
    return useContext(DispatchContext)
}

export default ContextProvider;