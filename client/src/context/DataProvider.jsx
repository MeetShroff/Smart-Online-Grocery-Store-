import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [Useraccount, SetUseraccount] = useState('');

    return(
        <DataContext.Provider value={{
            Useraccount,
            SetUseraccount

        }}>

            {children}

        </DataContext.Provider>
    )
}

export default DataProvider;