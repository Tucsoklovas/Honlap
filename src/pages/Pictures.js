import React from "react"
import Layout from "../components/Layout"
import {graphql, Link} from "gatsby"
import ImageGallery from 'react-image-gallery';
import * as styles from "../css/photos.module.css";
import Image from "gatsby-image";

const Pictures = ({data}) => {
    const {
        allContentfulGaleria: {nodes: images},
        allContentfulTortenetek: {nodes: story}
    } = data
    return (
        <Layout>
            <div className={styles.photosFullpage}>

                <h1 className={styles.title}>Képek</h1>

                <div className={styles.photosPage}>
                    <ImageGallery showPlayButton={false} className={styles.galery} style={{zIndex: '-1'}} items={images.map((item) => (
                            {
                                original: item.fenykep.fluid.src,
                                thumbnail: item.fenykep.fluid.src,
                            }
                        )
                    )}/>
                </div>

                <h1 className={styles.title}>Videók</h1>
                <iframe src="https://www.youtube.com/embed/4-Cqrm7mPvs" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className={styles.video} title={"videó"}></iframe>
                <h1 className={styles.title}>Történetek</h1>
                <p className={styles.p}>Ha kívácsi vagy pár történetünkre akkor kattint az alábbi gombokra és olvasd el őket nanananananananan ide kell vmi szöveg:</p>
                <div className={styles.story}>
                    {story.map(s => {
                        return(
                            <div key={s.id}  >
                                <Link to={`/Pictures/${s.slug}`} className={styles.link} >
                                    <h1 className={styles.storybox}>{s.cim}</h1>
                                </Link>
                            </div>
                        )
                    })}

                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
  {
    allContentfulGaleria {
      nodes {
        id
        fenykep {
          fluid {
              ...GatsbyContentfulFluid
          }
        }
      }
    }
    ,
    allContentfulTortenetek {
    nodes {
      cim
      id
      slug
      szoveg {
        szoveg
      }
    }
  }
  }
`
export default Pictures