import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha , setSenha] = useState('');

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
        <Link to = "/BancoInicial"></Link>
      }
    }
  }
  
  return (
    <div className="App">
      <div className="Loginpai">
        <h1>Login</h1>
        <input type="email" placeholder="Insert Email..." className="emailesenha" id="email" onChange={(e)=> setEmail(e.target.value)}></input>
        <input type="password" id="senha" placeholder="Insert Password..." className="emailesenha" onChange={(e)=> setSenha(e.target.value)}></input>
        <input type="button" value="Login" className="botao" onClick={emailSenha}></input>
      </div>
      <footer id="rodape">
        <Link to="/Cadastro">
          <button className="botaoc">Cadastre-se</button>
        </Link>
      </footer>
    </div>
  );
}

export default Login;
