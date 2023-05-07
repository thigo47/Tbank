import { useState } from "react"
import styles from "../Estilos/Deposito.module.css"

function Saque({sacando}) {
    const [valorSaque , SetValorsaque] = useState(0)
function handleclick(params) {
    sacando();
}

    return(
        <div className={styles.fundo}>
            <div className={styles.pergunta}>
                Quanto deseja sacar?
            </div>
            <input type="number" className={styles.inputdep}onChange={(e)=> SetValorsaque(e.target.value)}></input>

            <button className={styles.botao} onClick={handleclick}>Saque</button>
        </div>
    )
}
export default Saque