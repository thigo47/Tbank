import { useState } from "react"
import styles from "../Estilos/Deposito.module.css"
import FlashMessage from "../modules_Bank/FlashMessage";

function Deposito({ depositar,}) {
    const [valord, setValord] = useState()

    const [saldoAtual, setSaldoAtual] = useState(0);

    const [seudep, setSeuDep] = useState(false);

    const [valores , setValores] = useState(false);


    function MostarValor() {
        if (valord == undefined) {
           setValores(true)

           setInterval(()=>{
            setValores(false)
           },1000)
        } else {
            // eu fiz um novo usestate com saldo atual valendo zero , apos isso crio a variavel novo saldo e somo saldo atual ou seja 0 com valord , e set saldo atual com o resuldado fazendo assim efeito cascata.

            const novosaldo = saldoAtual + Number(valord);
            setSaldoAtual(novosaldo);

            setSeuDep(true)
            setInterval(() => {
                setSeuDep(false)
            }, 1000)
            depositar(novosaldo, valord)
        }

    }

    return (
        <div className={styles.fundo}>

            {seudep && (
                <FlashMessage mensagem={`€ ${valord} Depositados na sua conta.`} />
            )
            }{valores &&(
                <FlashMessage mensagem="Adicione valores primeiro para depositar."/>
            )

            }

            <div className={styles.pergunta}>Quanto deseja depositar?</div>

            <input type="number" className={styles.inputdep} onChange={(e) => setValord(e.target.value)} placeholder="€" ></input>

            <button className={styles.botao} onClick={MostarValor}>Depositar</button>
        </div>


    )
}
export default Deposito