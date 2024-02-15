'use client';
import React from 'react';

interface Props {
    children?: any;
}

const globalNavigationContext = {
    isOpen: false,
    setIsOpen: (val: boolean) => {},
};

export const GlobalNavigationContext = React.createContext(globalNavigationContext);

export default function Providers({ children }: Props) {
    const initialState = {
        isOpen: false,
        setIsOpen,
    };

    const [state, setState] = React.useState(initialState);

    function setIsOpen(isOpen: boolean) {
        return setState({ ...state, isOpen });
    }

    return (
        <>
            {/* <Toast /> */}
            <GlobalNavigationContext.Provider value={state}>{children}</GlobalNavigationContext.Provider>
        </>
    );
}
