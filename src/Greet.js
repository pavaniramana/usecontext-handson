import React, {useContext} from 'react'
import {UserContext} from './UserContext';

const Greet = () => {
    const[user,setUser] = useContext(UserContext)

    const updatedValue = () => {
        setUser((prevState)=>({
            ...prevState,
            age:25
        }))
    }
  return (
    <div>
        
        <h5>this is the explanation of useContext Hook</h5>
        {user.name} || {user.is} || {user.age} || {user.dept} || {user.salary}
        <button onClick={updatedValue}>click here to change value</button>
    </div>
  )
}

export default Greet;

// useContext:
// this hook is used to use the context API.
// props drilling:if you have four components, and you to pass the data from one compo 