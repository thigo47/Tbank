import React, { useState } from "react";
import Deposito from "./Deposito"
import styles from "../Estilos/ConteudoBank.module.css"

function ConteudoBank() {
    const [mostrarModal , setMostrarModal] = useState(false); 
    const [valorDeposito , setValorDeposito] = useState(0);

    function depositar(valor) {
        setValorDeposito (valor);
    }

    const handleDeposito = () => {
        setMostrarModal(true)
    }

    return(
        <div>
            <div>Conta</div>
            <div>€ {valorDeposito} </div>
             <div onClick={handleDeposito}>Deposito</div>       

           {mostrarModal && (
            <div className={styles.Modal}>
                <div className={styles.ModalConteudo}>
                    <Deposito depositar = {depositar}/>

                    <button className={styles.botao} onClick={()=> setMostrarModal(false)}>Fechar</button>
                    
                    
                </div>
                </div>
           )}

        </div>
    )
}
export default ConteudoBank