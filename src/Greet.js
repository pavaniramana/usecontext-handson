import React, {useContext} from 'react'
import {UserContext} from './UserContext';

const Greet = () => {
    const[user,setUser] = useContext(UserContext)
  return (
    <div>
        
        <h5>this is the explanation of useContext Hook</h5>
        {user.name} || {user.is} || {user.age} || {user.dept} || {user.salary}
    </div>
  )
}

export default Greet;

// useContext:
// this hook is used to use the context API.
// props drilling:if you have four components, and you to pass the data from one compo 