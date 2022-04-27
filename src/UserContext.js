import React, {useState} from "react";
import {createContext} from 'react';

export const UserContext = createContext()

export const UserContextProvider = (props) =>{
    const[user,setUser] =  useState({
        is:1,name:"Pavani",age:15,dept:"ECE",salary:40000
    })

    return(
        <>
        <UserContext.Provider value={[user,setUser]}>
            {props.children}   
            {/* props.children is a component        */}
        </UserContext.Provider>
        </>
    )
}
