import React from 'react';
import Register from './pages/Register';
import './App.css';
import { useSelector } from 'react-redux';
// import { selectState } from './auth/authSlice';
import Home from './pages/Home'

function App() {
  // const logged = useSelector(selectState);

  return (
    <div className="App">
      <Register />
      console.log(logged)
      {/* {logged && <Home/>} */}
    </div>
  );
}

export default App;
