/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({ path: ".env" })

module.exports = {
  /* Your site config here */
  siteMetadata: {
    backendUrl: process.env.BACKEND_URL || "/fallback/",
    labUrl: process.env.LAB_URL || "/fallback/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "2",
        matomoUrl: "https://makinacorpus.matomo.cloud",
        siteUrl: "https://outdoorvision.fr/",
        disableCookies: true,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-theme-material-ui",
      options: {
        stylesConfig: {
          // disableAutoprefixing: true,
          disableMinification: true,
        },
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: "Montserrat",
                variants: ["300", "400", "500", "700"],
              },
            ],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-create-client-paths",
      options: {
        prefixes: ["/compte/*"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/md-pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-blocks",
        path: `${__dirname}/src/md-blocks`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "medias",
        path: `${__dirname}/static/medias`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 630,
              linkImagesToOriginal: false,
              wrapperStyle: "margin-left: 0",
              disableBgImage: true,
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-external-links",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            // 'X-Frame-Options: DENY',
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: same-origin",
          ],
        },
        mergeSecurityHeaders: false,
      },
    },
  ],
}
