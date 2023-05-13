import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import styles from "../Estilos/Login.module.css"

function Cadastro() {
  const [cademail , setCademail] = useState()
  const[cadsenha , setCadsenha] = useState()

  function Cadastrando() {
    window.alert("Cadastrado com sucesso!")
      localStorage.setItem("email" , cademail);
      localStorage.setItem("senha" , cadsenha);
  }
 
  return (
    <div className={styles.Body}>
<div className={styles.App}>
        <div className={styles.Loginpai}>
          <h1 className={styles.titulo}>Cadastro</h1>

          <input type='email' placeholder='Insert Email...' className={styles.emailesenha} id='email' onChange={
            (e)=>{setCademail(e.target.value)}
          }></input>

          <input type="password" id='senha' placeholder='Insert Password...' className={styles.emailesenha} onChange={
            (e)=>{setCadsenha(e.target.value)}
          }></input>

          <input type='button' value="Cadastre-se" className={styles.botao} onClick={Cadastrando}></input>
        </div> 
        <footer className={styles.rodape}>
        <Link to = "/Login">
            <button className={styles.botaoc}>Login</button>
            </Link>  
        </footer>
      </div>

    </div>
      
  );
}



export default Cadastro;
