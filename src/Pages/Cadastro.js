import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import '../App.css';

function Cadastro() {
  const [cademail , setCademail] = useState()
  const[cadsenha , setCadsenha] = useState()

  function Cadastrando() {
    window.alert("Cadastrado com sucesso!")
      localStorage.setItem("email" , cademail);
      localStorage.setItem("senha" , cadsenha);
  }
 
  return (
      <div className="App">
        <div className='Loginpai'>
          <h1>Cadastro</h1>

          <input type='email' placeholder='Insert Email...' className='emailesenha' id='email' onChange={
            (e)=>{setCademail(e.target.value)}
          }></input>

          <input type="password" id='senha' placeholder='Insert Password...' className='emailesenha'onChange={
            (e)=>{setCadsenha(e.target.value)}
          }></input>

          <input type='button' value="Cadastre-se" className='botao' onClick={Cadastrando}></input>
        </div>
        <footer>
        <Link to = "/">
            <button className='botaoc'>Login</button>
            </Link>  
        </footer>
      </div>
  );
}



export default Cadastro;
