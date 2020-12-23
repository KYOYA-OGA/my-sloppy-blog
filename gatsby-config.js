require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `ゆるゆるWeb制作日記`,
    siteTitleAlt: `ゆるゆるWeb制作日`,
    siteHeadline: `自称エンジニアの開発奮闘記`,
    // siteUrl: `https://minimal-blog.lekoarts.de`,
    siteDescription: `自称エンジニアによるWeb制作奮闘記と日々のあれこれ。普段はWeb制作をメインにしながらも、ついつい痺れる技術を追い求めてしまう。`,
    siteLanguage: `ja`,
    author: `KYOYA`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        preset: '@theme-ui/preset-funk',
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/gasamobile1`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ゆるゆるWeb制作日記`,
        short_name: `ゆるゆるWeb制作日記`,
        description: `自称エンジニアによるWeb制作奮闘記と日々のあれこれ。普段はWeb制作をメインにしながらも、ついつい痺れる技術を追い求めてしまう。`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#90CDF4`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
