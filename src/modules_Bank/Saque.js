import { useState } from "react"
import styles from "../Estilos/Deposito.module.css"

function Saque({sacar , saldosaque}) {
    const [valorSaque , SetValorsaque] = useState(0)

    function saque() {
        saldosaque()
        window.alert(`Você Sacou:  ${valorSaque}`)
        sacar(valorSaque)
        
    }
    return(
        <div className={styles.fundo}>
            <div className={styles.pergunta}>
                Quanto deseja sacar?
            </div>
            <input type="number" className={styles.inputdep}onChange={(e)=> SetValorsaque(e.target.value)}></input>

            <button className={styles.botao} onClick={saque}>Saque</button>
        </div>
    )
}
export default Saque