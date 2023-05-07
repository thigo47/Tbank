import styles from  "../Estilos/Header.module.css"
import { VscEye } from "react-icons/vsc";
import { VscInfo } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";


function HeaderBanco(params) {
 
        return(
            <div>
                <div className={styles.cabeçalho}>
                <div className={styles.foto}><VscAccount/></div>
                <div className={styles.saldosuporte}>
                
                <div className= {styles.visualizar}><VscEye/></div>
                
                <div> <VscInfo/></div>

                </div>
                </div>
                </div>        
        )
   
}export default HeaderBanco