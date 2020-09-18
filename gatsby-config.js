module.exports = {
  siteMetadata: {
    title: `Test con Strapi`,
    description: `Una simple PWA hecha con Gastby y Stapi!`,
    author: `Mattee37`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Test con Strapi`,
        short_name: `Test con Strapi`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "https://bienesraices-137.herokuapp.com/graphql",
      },
    },
  ],
}
