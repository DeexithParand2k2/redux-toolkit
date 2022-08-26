import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Features/user'

// get the updated state 
// import { useSelector } from 'react-redux'

function Login() {

    //pass the imported action
    //pass the updated state as payload
    const dispatch = useDispatch()

    const [name,changeName] = useState('')
    const [age,changeAge] = useState(0)
    const [email,changeEmail] = useState('')

  return (
    <div>
        <input type='text' placeholder='name' onChange={(e)=>changeName(e.target.value)}></input>
        <input type='text' placeholder='age' onChange={(e)=>changeAge(e.target.value)}></input>
        <input type='text' placeholder='email' onChange={(e)=>changeEmail(e.target.value)}></input>
        <button onClick={()=>dispatch(login({name:name,age:age,email:email}))}>Login</button>
    </div>
  )
}

export default Login