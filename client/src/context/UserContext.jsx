import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});
const initialUser = JSON.parse(localStorage.getItem('user')) || {};

export default function UserProvider({ children }) {
    const [user, setUser] = useState(initialUser);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser, }}>
            {children}
        </UserContext.Provider>
    );
}