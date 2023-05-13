import styles from "../Estilos/Flashmessage.module.css"
function FlashMessage({mensagem}){
    return(
        <>
        <p className={styles.mensagem}>{mensagem}</p>
        </>
    )
}

export default FlashMessage