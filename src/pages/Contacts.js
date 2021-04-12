import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import BigMap from "../components/BigMap"
import  * as styles from "../css/contacts.module.css"
import  * as style from "../css/prices.module.css"
const Contacts = () => {
    return(
        <Layout>
            <div className={styles.contactContainer}>
                <div className={styles.contactDiv}>
                    <h1>Kapcsolatok</h1>
                    <p>
                        <span className={styles.span}>Edző:</span> Benedek Rita <br/>
                        <span className={styles.span}>Telefonszám:</span> +36 30 242 8536 <br/>
                        <span className={styles.span}>Email: </span> info@tucsoklovasudvar.hu <br/>
                        <span className={styles.span}>Cím: </span>
                        <Link className={styles.cim} href={"https://www.google.hu/maps/place/T%C3%BCcs%C3%B6k+Lovasudvar/@47.4496877,18.5421168,17z/data=!3m1!4b1!4m5!3m4!1s0x476a13e76e5c3bab:0x1e9d65c357e06622!8m2!3d47.4496841!4d18.5443055"}>
                              Bodmér, Unnamed Road, 8080
                        </Link>
                    </p>
                    <h2>Lovaglás csak előre lebeszélt időpontban lehetséges!<br/>
                        Ha nem jártál még nálunk az alábbi gombra kattintva tudsz bejelentkezni hozzánk
                    </h2>
                    <div className={style.button}>
                        <Link to={'/Form'}> Jelentkezés lovaglásra</Link>
                    </div>
                </div>
                <div className={styles.bigmap}>
                    <BigMap/>
                </div>
            </div>
        </Layout>
    )
}
export default Contacts