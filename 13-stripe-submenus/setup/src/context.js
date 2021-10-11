import React, { useState, useContext } from 'react'
import sublinks from './data'

const Appcontext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(true);
    
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    
    const openSubmenu = () => {
        setIsSubmenubarOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return (
        <AppContext.Provider 
                value={{
                    isSubmenuOpen,
                    isSidebarOpen,
                    openSubmenu,
                    openSidebar,
                    closeSubmenu,
                    closeSidebar
                    }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}