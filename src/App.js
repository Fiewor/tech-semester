import React from 'react';
import Register from './pages/Register';
import './App.css';
import { useSelector } from 'react-redux';
import { selectState } from './features/auth/authSlice';
import Home from './pages/Home'
import Login from './pages/Login';

function App() {
  const logged = useSelector(selectState);

  return (
    <div className="App">
      {/* {logged ? <Home/> : <Register />} */}
      {logged ? <Login/> : <Register />}
    </div>
  );
}

export default App;
