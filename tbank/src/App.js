import logo from './logo.svg';
//parte principal do app

import './App.css';
import { BrowserRouter
 as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/Login"/>
      </Routes>
      <h1>Testando</h1>
    </div>
  );
}

export default App;
