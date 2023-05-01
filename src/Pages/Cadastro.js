import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Cadastro() {
  return (
      <div className="App">
        <div className='Loginpai'>
          <h1>Login</h1>
          <input type='email' placeholder='Insert Email...' className='emailesenha' id='email'></input>
          <input type="password" id='senha' placeholder='Insert Password...' className='emailesenha'></input>
          <input type='button' value="Cadastre-se" className='botao'></input>
        </div>
        <footer>
            <button className='botaoc'>Login</button>
        </footer>
      </div>
  );
}



export default Cadastro;
