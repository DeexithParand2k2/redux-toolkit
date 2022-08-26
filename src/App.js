import React from "react";

//components
import Login from './components/Login';
import Profile from './components/Profile';
import Darkmode from './components/Darkmode';
import Fetchapp from "./components/Fetchapp";

import {useSelector} from 'react-redux'

function App() {

  const thisState = useSelector((state)=>state.mode.color)

  return (
    <div className="App" style={{backgroundColor:thisState}}>
      <Profile />
      <Login />
      <Darkmode />
      <Fetchapp />
    </div>
  );
}

export default App;
