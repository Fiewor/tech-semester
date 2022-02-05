import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';
import { useSelector } from 'react-redux';
import { selectState } from './features/auth/authSlice';

function App() {
  const logged = useSelector(selectState);
  console.log("logged",logged)

  return (
    <div className="App">
      {logged ? <Login /> : <Register />}
    </div>
  );
}

export default App;
