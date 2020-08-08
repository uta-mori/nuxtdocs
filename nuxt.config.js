import theme from '@nuxt/content-theme-docs'

export default theme({
  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/nuxtdocs/'] // give the first url to start crawling
  }
})
