import styles from  "../Estilos/Header.module.css"
import { VscEye } from "react-icons/vsc";

function HeaderBanco(params) {
 
        return(
            <div>
                <div className={styles.cabeçalho}>
                <div>Aqui ft</div>
                <div className={styles.saldosuporte}>

                
                <div className= {styles.visualizar}><VscEye/></div>
                <div> suporte</div>

                </div>
                </div>
                </div>        
        )
   
}export default HeaderBanco