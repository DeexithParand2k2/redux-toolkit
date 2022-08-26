import React from 'react'
import { useDispatch } from 'react-redux'
import {dark} from '../Features/mode'

function Darkmode() {

    const dispatch = useDispatch()

  return (
    <div style={{margin:'50px'}}>
        <button onClick={()=>{dispatch(dark('white'))}}>Light</button>
        <button onClick={()=>{dispatch(dark('whitesmoke'))}}>Dark</button>
    </div>
  )
}

export default Darkmode