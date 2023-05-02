import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Cadastro from './Pages/Cadastro';
import BancoInicial from './Pages/BancoInicial';

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
      const cademail = localStorage.getItem("email")
      const cadsenha = localStorage.getItem("senha")

      if (email != cademail ) {
        window.alert("Email incorreto.")
      } else if (senha != cadsenha){
        window.alert("Senha incorreta")
      }else if(cademail.length == 0 || cadsenha.length
         == 0 ){
          window.alert("Você nao se cadastrou ainda!")
         }else{
          window.alert("Voce entrou")
         }
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
      <footer id='rodape'>
      <Link to="/Cadastro">
            <button className='botaoc'>Cadastre-se</button>
          </Link>
          <Link to="/BancoInicial">
            <button className='botaoc'>Banco</button>
          </Link>
          <Routes>
          <Route exact path="/" element={<></>}></Route>
          <Route exact path="/Cadastro" element={<Cadastro/>}></Route>
                  
      <Route exact path='/BancoInicial' element ={<BancoInicial/>} ></Route>         
          </Routes>

      </footer>
      </div>
      
    </Router>
  );
}

export default App;
