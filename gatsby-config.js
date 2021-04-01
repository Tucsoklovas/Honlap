
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "starter",
  },

  plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `images`,
              path: `${__dirname}/src/images/`,
          },
      },


     {
         resolve: `gatsby-source-contentful`,
         options: {
             spaceId: `z2guq3p46sb9`,
             // Learn about environment variables: https://gatsby.dev/env-vars
             accessToken:  process.env.ACCES_TOKEN,
         },

    },
  ],
};
