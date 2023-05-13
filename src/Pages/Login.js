import { useState } from 'react';
import { Link  , Navigate} from 'react-router-dom';
import styles from "../Estilos/Login.module.css"
import FlashMessage from "../modules_Bank/FlashMessage";


function Login() {
  const [email, setEmail] = useState('');
  const [senha , setSenha] = useState('');
  const [authenticated , setAuthenticated] = useState(false);
  const [mostrarmensagem , setMostrarMensagem] = useState(false);
  const [mostrarvazio , setMostrarVazio] = useState(false);
  const [emailcorreto , setEmailCorreto] = useState(false);
  const [senhaincorreta , setSenhaIncorreta] = useState(false);


  function emailSenha() {
    const emailSenha1 = document.getElementById('email');
    const emailSenha2 = document.getElementById('senha');

    if (emailSenha1.value.length === 0 || emailSenha2.value.length === 0) {
      setMostrarVazio(true);

      setTimeout(()=>{
        setMostrarVazio(false);
      }, 3000);

    


    } else {
      console.log(`email: ${email} senha: ${senha}`);
      const cadEmail = localStorage.getItem('email');
      const cadSenha = localStorage.getItem('senha');

      if (email !== cadEmail) {
        setEmailCorreto(true)

        setTimeout(()=>{
          setEmailCorreto(false)
        },3000)

      } else if (senha !== cadSenha) {

        setSenhaIncorreta(true)

        setTimeout(()=>{
          setSenhaIncorreta(false)
        }, 3000)

      } else if (cadEmail.length === 0 || cadSenha.length === 0) {
        window.alert('Você não se cadastrou ainda!');
      } else {
        
       
        setMostrarMensagem(true);
        setTimeout(()=>{
        setMostrarMensagem(false)
        setAuthenticated(true);
        }, 500);

      }
    }
    
  }
  if(authenticated){
    
    return (
      <Navigate to = "/BancoInicial"/>
    )
    }
  return (
    <div className={styles.Body}>
<div className={styles.App}>
      <div className={styles.Loginpai}>
        {mostrarmensagem&&(
          <FlashMessage mensagem="Login efetuado com sucesso!"/>
        )

        }
        {mostrarvazio&&(
          <FlashMessage mensagem="Adicione as informações primeiro."/>
        )

        }
        {emailcorreto &&(
          <FlashMessage mensagem="Email incorreto."/>
        )
          
        }
        {senhaincorreta &&(
          <FlashMessage mensagem="Senha incorreta."/>
        )

        }
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
