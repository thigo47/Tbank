import { useState } from 'react';
import { Link  ,  Navigate} from 'react-router-dom';
import styles from "../Login.module.css"


    

function Login() {
  const [email, setEmail] = useState('');
  const [senha , setSenha] = useState('');
  const [authenticated , setAuthenticated] = useState(false);


  function emailSenha() {
    const emailSenha1 = document.getElementById('email');
    const emailSenha2 = document.getElementById('senha');

    if (emailSenha1.value.length === 0 || emailSenha2.value.length === 0) {
      window.alert('Adicione as informações primeiro');
    } else {
      console.log(`email: ${email} senha: ${senha}`);
      const cadEmail = localStorage.getItem('email');
      const cadSenha = localStorage.getItem('senha');

      if (email !== cadEmail) {
        window.alert('Email incorreto.');
      } else if (senha !== cadSenha) {
        window.alert('Senha incorreta');
      } else if (cadEmail.length === 0 || cadSenha.length === 0) {
        window.alert('Você não se cadastrou ainda!');
      } else {
        window.alert('Você entrou');
        setAuthenticated(true);

      }
    }
    
  }
  if(authenticated){
    return <Navigate to =  "/BancoInicial" />
  }
  return (
    <div className={styles.Body}>
<div className={styles.App}>
      <div className={styles.Loginpai}>
        <h1 className={styles.titulo}>Login</h1>

        <input type="email" placeholder="Insert Email..."  className={styles.emailesenha} id="email" onChange={(e)=> setEmail(e.target.value)}></input>

        <input type="password" id="senha" placeholder="Insert Password..." className={styles.emailesenha} onChange={(e)=> setSenha(e.target.value)}></input>

        <input type="button" value="Login" className={styles.botao} onClick={emailSenha}></input>
      </div>
      <footer id="rodape" className={styles.rodape}>
        <Link to="/Cadastro">
          <button className={styles.botaoc}>Cadastre-se</button>
        </Link>
      </footer>
    </div>
      
    </div>
    
  );
}

export default Login;
