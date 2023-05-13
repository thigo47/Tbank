import React from 'react';
import { useState } from 'react';
import '../App.css';
import HeaderBanco from "../modules_Bank/HeaderBanco"
import ConteudoBank from '../modules_Bank/ConteudoBank';
import styles from "../Estilos/BancoInicial.module.css";

function BancoInicial(params) {
    return (

        <div className={styles.body}>
            <HeaderBanco />
            <ConteudoBank />
        </div>


    )
}
export default BancoInicial