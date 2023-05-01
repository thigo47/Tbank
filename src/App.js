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
        <input type='email' placeholder='Insert Email...' className='emailesenha'></input>

             <input type = "password" placeholder='Insert Password...' className='emailesenha'></input>
             
             <input type='button' value="Login" className='botao'></input>
      </div>
    </div>
  );
}

export default App;
