import { useState } from "react"
import styles from "../Estilos/Deposito.module.css"

function Saque(props) {
    const [valordigitado , setValordigitado] = useState()
  
    function handleclick() {
      
      props.sacar(valordigitado)
    }
    function handlechange(e) {
      setValordigitado(e.target.value)
      
            
    }
  //aida nao resolvido saque
    return (
      <div className={styles.fundo}>
        <div className={styles.pergunta}>Quanto deseja sacar?</div>

        <input
          type="number"
          className={styles.inputdep}
          onChange={handlechange} placeholder="€"
        ></input>

        <button className={styles.botao} onClick={handleclick}>
          Saque
        </button>
      </div>
    );
  }
  
export default Saque