import styles from "../Estilos/LandingPage.module.css"
import Bolsa from "../Estilos/Midia/Imagens/Moeda.jpg"
function LandingPage() {
    return(
        <div className={styles.body}>
            <div className={styles.card1}>
            <h2>Seja bem vindo ao Tbank</h2>
            </div>


            <div className={styles.card2}>
                <div className={styles.botao}>
                    Fazer Login
                </div>

            </div>
        </div>
    )
}

export default LandingPage