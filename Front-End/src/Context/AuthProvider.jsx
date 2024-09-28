import React, { createContext, useContext, useEffect, useState } from 'react';
// import {useHistory} from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialUserState = localStorage.getItem("userInfo");
    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined);
    // const [authUser, setAuthUser] = useState();

    // const history=useNavigate();
    // useEffect(()=>{
    //     const userInfo=JSON.parse(localStorage.getItem("userInfo"));
    //     setAuthUser(userInfo);
    //     if(!userInfo){
    //         history("/signUp")
    //     }
    // },[])

    return (
        <AuthContext.Provider value={[ authUser, setAuthUser ]}>
            {children}
        </AuthContext.Provider>
        
    )
}
 
export const useAuth = () => useContext(AuthContext);
