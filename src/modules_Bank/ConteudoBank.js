import React, { useState } from "react";
import Deposito from "./Deposito"
import styles from "../Estilos/ConteudoBank.module.css"
import Saque from "./Saque";
import Historico from "./Historico";
import FlashMessage from "./FlashMessage";

function ConteudoBank() {

    const [mostrarModal, setMostrarModal] = useState(false);

    const [saqueModal, setSaqueModal] = useState(false);

    const [hisModal, setHisModal] = useState(false);

    const [historico, setHistorico] = useState(0);

    const [saldoinsuficiente, setSaldoInsuficiente] = useState(false);

    const [vocesacou, setVoceSacou] = useState(false);

    // logica de lifting

    const [valorDeposito, setValorDeposito] = useState(0);

    const [valorSaque, setValorSaque] = useState(0);


    const hisdep = []
    const hissaque = []
    //ideia , eu ter dois arrays , quando eu depositar : hisdeposito= [] , e saque , hissaque = [] , senpre que eeu depositar eu guardo o valor.



    function depositar(valor) {

        setValorDeposito(valor);


    }
    function sacar(valor) {
        if (valorDeposito < valorSaque || valorDeposito == 0) {
            setSaldoInsuficiente(true)
            setInterval(() => {
                setSaldoInsuficiente(false)
            }, 3000);

        } else {
            const valorsaldosaque = valorDeposito - valor

            setValorSaque(valor)
            setValorDeposito(valorsaldosaque)
            setVoceSacou(true)

            setInterval(() => {
                setVoceSacou(false)
            }, 3000);

            hissaque.push(valor)
            console.log(hissaque)

        }

    }


    // mostrar ou nao o modal
    const handleDeposito = () => {
        setMostrarModal(true)
    }

    const handleSaque = () => {
        setSaqueModal(true)
    }
    const handleHis = () => {
        setHisModal(true)
    }

    return (
        <div>
            <div className={styles.historico}>
                <div onClick={handleHis}>Conta</div>

                <div>{valorDeposito.toLocaleString('pt', { style: 'currency', currency: 'EUR' })}</div>
            </div>

            <div className={styles.container}>

                <div onClick={handleDeposito} className={styles.depesaque}>Deposito</div>

                <div onClick={handleSaque} className={styles.depesaque}>Saque</div>

            </div>
            {mostrarModal && (
                <div className={styles.Modal}>
                    <div className={styles.ModalConteudo}>
                        <Deposito depositar={depositar} historico={historico} setHistorico={setHistorico} />

                        <button className={styles.botao} onClick={() => setMostrarModal(false)}>Fechar</button>
                    </div>
                </div>

            )}
            {saqueModal && (
                <div className={styles.Modal}>

                    <div className={styles.ModalConteudo}>

                        {saldoinsuficiente && (
                            <FlashMessage mensagem="Seu saldo é insuficiente." />
                        )
                        }
                        {vocesacou && (
                            <FlashMessage mensagem={`Você sacou: € ${valorSaque}`} />
                        )}


                        <Saque sacar={sacar} valor={`Você sacou ${valorDeposito}`} setValorDeposito={setValorDeposito} />

                        <button className={styles.botao} onClick={() => setSaqueModal(false)}>fechar</button>
                    </div>

                </div>
            )

            }
            {/*hisModal && (
                 <div className={styles.Modal}>
                 <div className={styles.ModalConteudo}>
                 <Historico historico = {historico} setHistorico = {setHistorico}/>

                 <button className={styles.botao} onClick={()=>setHisModal(false)}>fechar</button>
                 </div>
                 
             </div>
            )

            */}
        </div>
    )
}
export default ConteudoBank