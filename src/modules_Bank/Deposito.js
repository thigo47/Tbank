import { useState } from "react"
import styles from "../Estilos/Deposito.module.css"
import Saque from "./Saque";

function Deposito({depositar}) {
 const [valord , setValord] = useState(0)
 const [saldoAtual, setSaldoAtual] = useState(0);

 function sacando(params) {

    const novosaldo = saldoAtual - Number(valord);
    setSaldoAtual(novosaldo);
    
    window.alert(`Você Sacou:  ${novosaldo}`)
}


function MostarValor() {
    if (valord.length == 0) {
    window.alert("Adicione valores primeiro")
    } else {
        // eu fiz um novo usestate com saldo atual valendo zero , apos isso crio a variavel novo saldo e somo saldo atual ou seja 0 com valord , e set saldo atual com o resuldado fazendo assim efeito cascata.

    const novosaldo = saldoAtual + Number(valord);
    setSaldoAtual(novosaldo);

        window.alert(`Valor de ${valord} depositado!`)
        depositar(novosaldo)

       
    }
    
}

    return(
        <div className={styles.fundo}>

        <div className={styles.pergunta}>Quanto deseja depositar?</div>

        <input type = "number" className={styles.inputdep} onChange={(e)=>setValord(e.target.value)}></input>

        <button className={styles.botao} onClick={MostarValor}>Depositar</button>
        <Saque sacando={sacando}/>
        </div>
        

    )
}
export default Deposito