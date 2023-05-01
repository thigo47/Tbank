import logo from './logo.svg';
//Login

import './App.css';
import { BrowserRouter
 as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <div className='Loginpai'>
        <input type='email' placeholder='Insert Email...'></input>
             <input type = "password" placeholder='Insert Password...'></input>
             <input type='button' value="Login"></input>
      </div>
    </div>
  );
}

export default App;
