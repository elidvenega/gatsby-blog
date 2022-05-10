module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby blog',
    author: 'Elid Venega',
  },
 
  plugins: [
    'gatsby-plugin-sass', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}
