import React, { useState } from "react";
import Deposito from "./Deposito"
import styles from "../Estilos/ConteudoBank.module.css"
import Saque from "./Saque";


function ConteudoBank(props) {
    
    const [mostrarModal , setMostrarModal] = useState(false);

    const [saqueModal , setSaqueModal] = useState(false);

    // logica de lifting

    const [valorDeposito , setValorDeposito] = useState(0);

    const [valorSaque , setValorSaque] = useState(0);

    const [valorSaldo , setValorSaldo] = useState(0); 

    function depositar(valor) {
        
        setValorDeposito (valor);
    }
    function sacar(valor) {
        setValorSaque(valor)
    }

    
    function saldodeposito() {
        setValorSaldo(valorDeposito)
    }

// mostrar ou nao o modal
    const handleDeposito = () => {
        setMostrarModal(true)
    }

    const handleSaque = ()=>{
        setSaqueModal(true)
    }

    return(
        <div>
            <div>Conta</div>
            <div>€ {valorSaldo}</div>
             <div onClick={handleDeposito}>Deposito</div> 
             <div onClick={handleSaque}>Saque</div>      

           {mostrarModal && (
            <div className={styles.Modal}>
                <div className={styles.ModalConteudo}>
                    <Deposito depositar = {depositar} saldodeposito = {saldodeposito}/>

                    <button className={styles.botao} onClick={()=> setMostrarModal(false)}>Fechar</button>     
                </div>
                </div>

           )}
            {saqueModal &&(
                    <div className={styles.Modal}>
                        <div className={styles.ModalConteudo}>
                        <Saque sacar = {sacar}/>

                        <button className={styles.botao} onClick={()=>setSaqueModal(false)}>fechar</button>
                        </div>
                        
                    </div>
            )

            }
        </div>
    )
}
export default ConteudoBank