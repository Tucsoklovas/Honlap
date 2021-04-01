import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import * as styles from "../css/about.module.css"

const ComponentName = ({data}) => {
    const {
        allContentfulRolunk: {
            nodes:rolunk
        },
    } = data

    return (
        <Layout>
            <section className={styles.indexPage}>
                {rolunk.map(r => {
                    return(
                        <div key={r.id} className={styles.indexContainer}>
                            <Image fluid={r.fenykep.fluid} className={styles.indexImg}/>
                            <p>{r.szoveg.szoveg}</p>
                        </div>
                    )
                })}
            </section>
        </Layout>
    )
}
export const query = graphql`
 {
    allContentfulRolunk {
      nodes {
         id
        szoveg {
          szoveg
        }
         fenykep {
            fluid {
               ...GatsbyContentfulFluid
            }
          }
      }
    }
  }
`

export default ComponentName