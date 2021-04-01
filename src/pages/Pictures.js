import React from "react"
import Layout from "../components/Layout"
import {graphql} from "gatsby"
import ImageGallery from 'react-image-gallery';
import * as styles from "../css/photos.module.css";

const Pictures = ({data}) => {
    const {
        allContentfulGaleria: {nodes: images},
    } = data
    return (
        <Layout>
            <div className={styles.photosFullpage}>
                <div className={styles.photosPage}>
                    <ImageGallery showPlayButton={false} items={images.map((item) => (
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
  }
`
export default Pictures