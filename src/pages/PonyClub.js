import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../css/ponyKlub.module.css"
import * as style from "../css/prices.module.css"

const PonyKlub = ({data}) => {
   const {
       allContentfulPonyClub: {
         nodes: pony
      },
   } = data

   return (
       <Layout>
          <section className={styles.page}>
              <h1 className={styles.h1}>Tücsök Póni Klub</h1>
              {pony.map(r => {
                  return(
                      <div key={r.id} >
                          <p className={styles.p}>{r.szoveg.szoveg}</p>
                      </div>
                  )
              })}
              <div className={style.button}>
                  <Link to={'/Competitors'}> Versenyzőink</Link>
              </div>
          </section>
       </Layout>
   )
}
export const query = graphql`
 {
    allContentfulPonyClub {
    nodes {
      szoveg {
        szoveg
      }
    }
  }
  }
`

export default PonyKlub