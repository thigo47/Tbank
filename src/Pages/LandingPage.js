import { useState } from "react";
import styles from "../Estilos/LandingPage.module.css"
import Bolsa from "../Estilos/Midia/Imagens/Moeda.jpg"
import { Link  , Navigate} from 'react-router-dom';


function LandingPage() {
    const [redirect , setRedirect] = useState(false)


    if (redirect === true) {
        return <Navigate to = "/Login"/>
    }
       
    
    return(
        <div className={styles.body}>
            <div className={styles.card1}>
            <h2>Seja bem vindo ao Tbank</h2>
            </div>


            <div className={styles.card2}>
                
                <div className={styles.botao}onClick={(e)=>setRedirect(true)}>
                    Fazer Login
                </div>
                
               

            </div>
        </div>
    )
}

export default LandingPage