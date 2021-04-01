import React from "react"
import Layout from "../components/Layout";
import {graphql} from "gatsby"
import Card from "../components/Card";
import * as styles from "../css/horses.module.css"

const Horses = ({data}) => {
    const {
        horses: {nodes: horses},
        dogCat: {nodes: dc}
    } = data
    return (
        <Layout>
            <div className={styles.horsesFullPage}>
                <h1 className={styles.horsesTitle}>Lovaink</h1>
                <div className={styles.horsesPage}>
                    {horses.map(horse => {
                        return (
                            <Card key={horse.id} title={horse.nev} description={horse.szoveg.szoveg}
                                  img={horse.fenykep.fluid}/>
                        )
                    })}
                </div>
                <h1 className={styles.horsesTitle}>Kutyáink és macskáink </h1>
                <h3 className={styles.horsesH3}>A házörző és rágcsálóírtó részleg</h3>
                <div className={styles.horsesPage}>

                    {dc.map(d => {
                        return (
                            <Card key={d.id} title={d.nev} description={d.szoveg.szoveg}
                                  img={d.fenykep.fluid}/>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
  {
    horses:allContentfulAllataink (filter: {lo: {eq: true}}) {
      nodes {
        id
        nev
        szoveg {
          szoveg
        }
        fenykep {
          fluid {
             ...GatsbyContentfulFluid

          }
        }
        lo
      }
    },
    dogCat:allContentfulAllataink (filter: {lo: {eq: false}}) {
      nodes {
        id
        nev
        szoveg {
          szoveg
        }
        fenykep {
          fluid {
             ...GatsbyContentfulFluid

          }
        }
        lo
      }
    }
  }
`
export default Horses
