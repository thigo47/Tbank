import { useState } from "react"
import styles from "../Estilos/Deposito.module.css"

function Saque({ saldoAtual, sacar }) {
    const [valorSaque, setValorSaque] = useState(0);
  
    function handleclick() {
      const novoSaldo = saldoAtual - Number(valorSaque);
      setValorSaque(); // reseta o valor do saque
      sacar(novoSaldo); // atualiza o saldo na função sacar em ConteudoBank
      window.alert(`Você sacou: ${valorSaque} Novo saldo: ${novoSaldo}`);
    }
  //aida nao resolvido saque
    return (
      <div className={styles.fundo}>
        <div className={styles.pergunta}>Quanto deseja sacar?</div>

        <input
          type="number"
          className={styles.inputdep}
          onChange={(e) => setValorSaque(e.target.value)}
          value={valorSaque} // exibe o valor do saque atualizado
        ></input>

        <button className={styles.botao} onClick={handleclick}>
          Saque
        </button>
      </div>
    );
  }
  
export default Saque