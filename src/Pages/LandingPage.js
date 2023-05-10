import styles from "../Estilos/LandingPage.module.css"
import Bolsa from "../Estilos/Midia/Imagens/Moeda.jpg"
function LandingPage() {
    return(
        <div className={styles.body}>
            <div className={styles.card1}>
            <h2>Seja bem vindo ao Tbank</h2>
            <img src = {Bolsa} alt = "Bolsa" className={styles.ftbolsa}/>
            </div>


            <div className={styles.card2}>
                <div>Fazer login</div>
            </div>
        </div>
    )
}

export default LandingPage