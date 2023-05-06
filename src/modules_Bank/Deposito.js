import { useState } from "react"
import styles from "../Estilos/Deposito.module.css"

function Deposito({depositar , saldodeposito}) {
 const [valord , setValord] = useState(0)

function MostarValor() {
    saldodeposito()
    if (valord.length == 0) {
    window.alert("Adicione valores primeiro")
    } else {
        const saldoatual = valord
        const novosaldo = Number(saldoatual) + Number(valord)
        
        window.alert(`Valor de ${valord} depositado! Saldo: ${novosaldo}`)
        depositar(novosaldo)
    }
    
}

    return(
        <div className={styles.fundo}>

        <div className={styles.pergunta}>Quanto deseja depositar?</div>

        <input type = "number" className={styles.inputdep} onChange={(e)=>setValord(e.target.value)}></input>

        <button className={styles.botao} onClick={MostarValor}>Depositar</button>
        </div>

    )
}
export default Deposito