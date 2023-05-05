import { useState } from "react"
import styles from "../Estilos/Deposito.module.css"

function Deposito({depositar}) {
 const [valord , setValord] = useState("")

function MostarValor() {
    window.alert(`Valor de ${valord} depositado!`)
    depositar(valord)
}

    return(
        <div className={styles.fundo}>
        <div>Quanto deseja depositar?</div>
        <input type = "number" onChange={(e)=>setValord(e.target.value)}></input>
        <button onClick={MostarValor}>Depositar</button>
        </div>

    )
}
export default Deposito