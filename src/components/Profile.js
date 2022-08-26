import React from 'react'
import {useSelector} from 'react-redux'

//focus on displaying the state 
//display updated here


//displays the state from here
function Profile() {
  
  const userState = useSelector((state) => state.user.value)

  return (
    <div>
        <h1>Profile Page</h1>
        <p>User:{userState.name}</p>
        <p>Age:{userState.age}</p>
        <p>Email:{userState.email}</p>
    </div>
  )
}

export default Profile