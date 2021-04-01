import React from 'react'
import logo from "../assets/logo.png"
import * as style from "./Footer.module.css"

const Footer = () => {
    return(
        <section className={style.footerPage}>
            <div className={style.footerContainer}>
                <div className={style.footerDiv}>
                    <div>
                        <h2 className={style.footerH2}>
                            Benedek Rita
                        </h2>
                        <p className={style.footerP}>
                            <span>Telefonszám:</span> +36302428536 <br/>
                            <span>Cím: </span>Bodmér <br/>
                            <span>E-mail: </span> info@tucsoklovasudvar.uh
                        </p>
                    </div>
                    <img src={logo} className={style.footerImg} alt={"logo"}/>
                    <div className={style.footerLink}>
                        <h2 className={style.footerH2}>
                            Hahó
                        </h2>
                        <p >Adatvédelmi nyilatkozat</p>
                        <p>
                            valamiiiiiiiiii!!! <br/>
                            vali 2
                        </p>
                    </div>
                </div>
                <p className={style.footerCopyright}>Copyright 2021 © Tücsök Lovasudvar</p>
            </div>
        </section>
    )
}
export default Footer
