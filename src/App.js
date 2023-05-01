import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Cadastro from './Pages/Cadastro';

function App() {
  const [email, setEmail] = useState()
  const [senha , setSenha] = useState()

  function emailsenha(params) {
    let emailsenha1 = document.getElementById("email")
    let emailsenha2 = document.getElementById("senha")
    if (emailsenha1.value.length == 0 || emailsenha2.value.length == 0 ) {
      window.alert("Adicione as informaçoes primeiro")
    } else {
      console.log(`email: ${email} senha: ${senha}`)
    }
    
  }
  
  return (
    <Router>
      <div className="App">
        <div className='Loginpai'>
          <h1>Login</h1>
          <input type='email' placeholder='Insert Email...' className='emailesenha' id='email' onChange={(e)=> setEmail(e.target.value)}></input>
          <input type="password" id='senha' placeholder='Insert Password...' className='emailesenha' onChange={(e)=> setSenha(e.target.value)}></input>
          <input type='button' value="Login" className='botao' onClick={emailsenha}></input>
        </div>
        <footer>
          <Link to="/Cadastro">
            <button className='botaoc'>Cadastre-se</button>
          </Link>
          <Routes>
            <Route exact path="/" element={<></>}></Route>
            <Route path="/Cadastro" element={<Cadastro/>}></Route>
          </Routes>
        </footer>
      </div>
    </Router>
  );
}

export default App;
